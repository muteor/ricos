/* eslint-disable react/no-find-dom-node */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import { Separator } from 'wix-rich-content-editor-common';
import BaseToolbarButton from '../baseToolbarButton';
import {
  BUTTONS,
  BUTTONS_BY_KEY,
  BlockLinkButton,
  deleteButton,
  BlockSpoilerButton,
} from '../buttons';
import Panel from '../../Components/Panel';
import toolbarStyles from '../../../statics/styles/plugin-toolbar.scss';
import ToolbarContent from './ToolbarContent';
import { isSSR } from 'wix-rich-content-common';
import { setVariables, getRelativePositionStyle, getToolbarPosition } from './toolbarUtils';

export default function createAtomicPluginToolbar({
  buttons,
  theme,
  pubsub,
  helpers,
  settings,
  isMobile,
  anchorTarget,
  relValue,
  t,
  name,
  uiSettings,
  getToolbarSettings,
  getEditorBounds,
  languageDir,
  getEditorState,
  linkTypes,
  innerModal,
  innerRCERenderedIn,
}) {
  return class BaseToolbar extends Component {
    static propTypes = {
      hide: PropTypes.bool,
    };

    constructor(props) {
      super(props);

      const {
        structure,
        offset,
        shouldCreate,
        visibilityFn,
        displayOptions,
        ToolbarDecoration,
      } = setVariables({ buttons, getToolbarSettings, isMobile });
      this.structure = structure;
      this.offset = offset;
      this.shouldCreate = shouldCreate;
      this.visibilityFn = visibilityFn;
      this.displayOptions = displayOptions;
      this.ToolbarDecoration = ToolbarDecoration;

      this.state = {
        position: { transform: 'scale(0)' },
        componentData: {},
        componentState: {},
        overrideContent: undefined,
        tabIndex: -1,
      };
    }

    componentDidMount() {
      pubsub.subscribe('focusedBlock', this.onVisibilityChanged);
      pubsub.subscribe('componentState', this.onComponentStateChanged);
      pubsub.subscribe('componentData', this.onComponentDataChanged);
      this.unsubscribeOnBlock = pubsub.subscribeOnBlock({
        key: 'componentLink',
        callback: this.onComponentLinkChange,
      });
      const focusedBlock = pubsub.get('focusedBlock');
      this.onVisibilityChanged(focusedBlock);
    }

    componentWillUnmount() {
      pubsub.unsubscribe('focusedBlock', this.onVisibilityChanged);
      pubsub.unsubscribe('componentState', this.onComponentStateChanged);
      pubsub.unsubscribe('componentData', this.onComponentDataChanged);
      this.unsubscribeOnBlock && this.unsubscribeOnBlock();
    }

    shouldComponentUpdate(_nextProps, nextState) {
      return !!(this.state.isVisible || nextState.isVisible);
    }

    onOverrideContent = overrideContent => {
      this.setState({ overrideContent });
    };

    onComponentStateChanged = contentState => {
      this.setState({ contentState });
    };

    onComponentDataChanged = componentData => {
      this.setState({ componentData }, () => this.onVisibilityChanged(pubsub.get('focusedBlock')));
    };

    onComponentLinkChange = linkData => {
      if (!linkData) {
        this.updateLinkData(null);
        return;
      }
      const { url, anchor, target, rel } = linkData;
      const link = url
        ? {
            url,
            target,
            rel,
          }
        : { anchor };
      this.updateLinkData(link);
    };

    updateLinkData = link => {
      pubsub.update('componentData', { config: null });
      pubsub.update('componentData', { config: { link } });
    };

    setLayoutProps = ({ alignment, size, textWrap }) => {
      pubsub.update('componentData', { config: { alignment, size, textWrap } });
    };

    onVisibilityChanged = focusedBlock => {
      if (!this.shouldCreate) {
        return;
      }
      if (focusedBlock && !isSSR() && window.getSelection().isCollapsed) {
        this.showToolbar();
      } else {
        this.hideToolbar();
      }

      if (focusedBlock !== this.focusedBlock) {
        this.hidePanels();
      }

      this.focusedBlock = focusedBlock;
    };

    hideToolbar = () => {
      this.setState({
        position: { transform: 'scale(0)' },
        componentData: {},
        componentState: {},
        overrideContent: undefined,
        tabIndex: -1,
        isVisible: false,
      });
    };

    getRelativePositionStyle = boundingRect => {
      const { position, updatedOffsetHeight } = getRelativePositionStyle({
        boundingRect,
        offset: this.offset,
        offsetHeight: this.offsetHeight,
        toolbarNode: findDOMNode(this),
        languageDir,
        isMobile,
        renderedInTable: innerRCERenderedIn === 'table',
      });
      this.offsetHeight = updatedOffsetHeight;
      return position;
    };

    showToolbar = () => {
      const boundingRect = pubsub.get('boundingRect');
      if (this.visibilityFn() && boundingRect.width !== 0) {
        this.setState({ isVisible: true }, () => {
          const componentData = pubsub.get('componentData') || {};
          const componentState = pubsub.get('componentState') || {};
          const position = getToolbarPosition({
            boundingRect,
            displayOptions: this.displayOptions,
            getRelativePositionStyle: this.getRelativePositionStyle,
            offset: this.offset,
          });
          this.setState({
            tabIndex: 0,
            componentData,
            componentState,
            position,
          });
        });
      }
    };

    scrollToolbar(event, leftDirection) {
      event.preventDefault();
      const { clientWidth, scrollWidth } = this.scrollContainer;
      this.scrollContainer.scrollLeft = leftDirection
        ? 0
        : Math.min(this.scrollContainer.scrollLeft + clientWidth, scrollWidth);
    }

    /*eslint-disable complexity*/
    PluginToolbarButton = ({
      button,
      index,
      themedStyle,
      separatorClassNames,
      tabIndex,
      componentData,
    }) => {
      const { alignment, size } = componentData;
      const icons = settings?.toolbar?.icons || {};
      const buttonByKey = BUTTONS_BY_KEY[button.type];
      const Button = (buttonByKey && buttonByKey(icons[button.keyName])) || BaseToolbarButton;
      const commonButtonProps = {
        tabIndex,
        theme: themedStyle,
        key: index,
        isMobile,
        t,
        pubsub,
      };

      const buttonProps = {
        ...this.mapComponentDataToButtonProps(button, this.state.componentData),
        ...this.mapStoreDataToButtonProps(button, pubsub.store, this.state.componentData),
        settings: button.settings,
        ...commonButtonProps,
      };
      const baseLinkProps = {
        onOverrideContent: this.onOverrideContent,
        helpers,
        componentState: this.state.componentState,
        closeModal: helpers.closeModal,
        anchorTarget,
        relValue,
        uiSettings,
        icons: icons.link,
        editorState: getEditorState(),
        linkTypes,
        toolbarOffsetTop: this.state.position && this.state.position['--offset-top'],
        toolbarOffsetLeft: this.state.position && this.state.position['--offset-left'],
        innerModal,
        ...commonButtonProps,
      };

      switch (button.type) {
        case BUTTONS.TEXT_ALIGN_LEFT:
        case BUTTONS.TEXT_ALIGN_CENTER:
        case BUTTONS.TEXT_ALIGN_RIGHT:
          return (
            <Button alignment={alignment} setLayoutProps={this.setLayoutProps} {...buttonProps} />
          );
        case BUTTONS.SIZE_SMALL:
        case BUTTONS.SIZE_MEDIUM:
        case BUTTONS.SIZE_LARGE:
          return <Button size={size} setLayoutProps={this.setLayoutProps} {...buttonProps} />;
        case BUTTONS.SIZE_ORIGINAL:
        case BUTTONS.SIZE_CONTENT:
        case BUTTONS.SIZE_FULL_WIDTH:
        case BUTTONS.SIZE_CONTENT_CENTER:
        case BUTTONS.SIZE_SMALL_CENTER:
        case BUTTONS.SIZE_SMALL_LEFT:
        case BUTTONS.SIZE_SMALL_RIGHT:
        case BUTTONS.ALIGN_RIGHT:
        case BUTTONS.ALIGN_LEFT:
        case BUTTONS.ALIGN_CENTER:
          return (
            <Button
              size={size}
              alignment={alignment}
              setLayoutProps={this.setLayoutProps}
              {...buttonProps}
            />
          );
        case BUTTONS.SEPARATOR:
          return <Separator className={separatorClassNames} key={index} />;
        case BUTTONS.HORIZONTAL_SEPARATOR:
          return <Separator className={separatorClassNames} horizontal key={index} />;
        case BUTTONS.LINK:
          return <BlockLinkButton {...baseLinkProps} tooltipText={t('TextLinkButton_Tooltip')} />;
        case BUTTONS.SPOILER:
          return (
            <BlockSpoilerButton {...commonButtonProps} tooltipText={t('Spoiler_Insert_Tooltip')} />
          );
        case BUTTONS.LINK_PREVIEW: {
          return (
            <BlockLinkButton
              {...baseLinkProps}
              unchangedUrl
              tooltipText={t('LinkPreview_Settings_Tooltip')}
              icons={button.icons}
            />
          );
        }
        case BUTTONS.DELETE: {
          const DeleteButtonComponent = deleteButton(icons.delete);
          return (
            <DeleteButtonComponent
              onClick={pubsub.get('deleteBlock')}
              icon={icons.delete}
              {...buttonProps}
            />
          );
        }
        default:
          return (
            <Button
              componentData={this.state.componentData}
              componentState={this.state.componentState}
              helpers={helpers}
              displayPanel={this.displayPanel}
              displayInlinePanel={this.displayInlinePanel}
              hideInlinePanel={this.hidePanels}
              uiSettings={uiSettings}
              getEditorBounds={getEditorBounds}
              {...buttonProps}
            />
          );
      }
    };
    /*eslint-enable complexity*/
    mapComponentDataToButtonProps = (button, componentData) => {
      if (!button.mapComponentDataToButtonProps) {
        return button;
      }
      return {
        ...button,
        ...button.mapComponentDataToButtonProps(componentData),
      };
    };

    mapStoreDataToButtonProps = (button, store, componentData) => {
      if (!button.mapStoreDataToButtonProps) {
        return button;
      }
      return {
        ...button,
        ...button.mapStoreDataToButtonProps({ store, componentData }),
      };
    };

    hidePanels = () => this.setState({ panel: null, inlinePanel: null });

    displayPanel = panel => {
      this.hidePanels();
      this.setState({ panel });
    };

    displayInlinePanel = inlinePanel => {
      this.hidePanels();
      this.setState({ inlinePanel });
    };

    renderInlinePanel() {
      const { inlinePanel, componentData, componentState } = this.state;
      const { PanelContent, keyName } = inlinePanel || {};

      return inlinePanel ? (
        <div
          className={toolbarStyles.pluginToolbar_inlinePanel}
          data-hook="baseToolbar_InlinePanel"
        >
          <PanelContent
            key={keyName}
            theme={theme}
            store={pubsub}
            helpers={helpers}
            t={t}
            componentData={componentData}
            componentState={componentState}
            close={this.hidePanels}
          />
        </div>
      ) : null;
    }

    renderPanel() {
      const { panel, componentData, componentState } = this.state;

      return panel ? (
        <div className={toolbarStyles.pluginToolbar_panel}>
          <Panel
            key={panel.keyName}
            theme={theme}
            store={pubsub}
            helpers={helpers}
            t={t}
            componentData={componentData}
            componentState={componentState}
            content={panel.PanelContent}
            keyName={panel.keyName}
            close={this.hidePanels}
            getEditorBounds={getEditorBounds}
          />
        </div>
      ) : null;
    }

    onClick = e => {
      e.preventDefault();
    };

    render() {
      const { overrideContent, tabIndex, isVisible } = this.state;
      const { hide } = this.props;
      const toolbarContentProps = {
        overrideContent,
        tabIndex,
        theme,
        PluginToolbarButton: this.PluginToolbarButton,
        structure: this.structure,
        componentData: this.state.componentData.config || {},
      };

      if (!this.shouldCreate) {
        return null;
      }

      const { toolbarStyles: toolbarTheme } = theme || {};

      if (this.visibilityFn() && isVisible) {
        const renderedInTable = innerRCERenderedIn === 'table';
        const props = {
          style: { ...this.state.position, visibility: hide ? 'hidden' : 'visible' },
          className: classNames(
            toolbarStyles.pluginToolbar,
            renderedInTable && toolbarStyles.overflowToolbar,
            toolbarTheme && toolbarTheme.pluginToolbar
          ),
          'data-hook': name ? `${name}PluginToolbar` : null,
          onClick: this.onClick,
        };

        const ToolbarWrapper = this.ToolbarDecoration || 'div';

        return (
          <ToolbarWrapper {...props}>
            <ToolbarContent {...toolbarContentProps} />
            {this.renderInlinePanel()}
            {this.renderPanel()}
          </ToolbarWrapper>
        );
      } else {
        return null;
      }
    }
  };
}
