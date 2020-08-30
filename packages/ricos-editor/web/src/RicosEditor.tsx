import React, { Component, Fragment, ElementType, FunctionComponent } from 'react';
import { RicosEngine, shouldRenderChild, localeStrategy, DRAFT_EDITOR_PROPS } from 'ricos-common';
import { RichContentEditor } from 'wix-rich-content-editor';
import { createDataConverter } from './utils/editorUtils';
import ReactDOM from 'react-dom';
import { EditorState, ContentState, EditorProps } from 'draft-js';
import RicosModal from './modals/RicosModal';
import './styles.css';
import { RicosEditorProps, EditorDataInstance, RichContentChild } from './index';
import { hasActiveUploads } from './utils/hasActiveUploads';
import { convertToRaw } from 'wix-rich-content-editor/dist/lib/editorStateConversion';

const filterDraftEditorSettings = (draftEditorSettings: Partial<EditorProps>) =>
  Object.entries(draftEditorSettings).map(
    ([k, v]) => DRAFT_EDITOR_PROPS.includes(k as typeof DRAFT_EDITOR_PROPS[number]) && v
  );

interface State {
  StaticToolbar?: ElementType;
  localeStrategy: { locale?: string; localeResource?: Record<string, string> };
  remountKey: boolean;
}

export class RicosEditor extends Component<RicosEditorProps, State> {
  editor: RichContentEditor;
  dataInstance: EditorDataInstance;
  isBusy = false;

  constructor(props: RicosEditorProps) {
    super(props);
    this.dataInstance = createDataConverter(props.onChange);
    this.state = { localeStrategy: { locale: props.locale }, remountKey: false };
  }

  static defaultProps = { locale: 'en' };

  updateLocale = async () => {
    const { locale, children } = this.props;
    await localeStrategy(children?.props.locale || locale).then(localeData => {
      this.setState(
        { localeStrategy: localeData, remountKey: !this.state.remountKey },
        this.setStaticToolbar
      );
    });
  };

  componentDidMount() {
    this.setStaticToolbar();
    this.updateLocale();
  }

  setStaticToolbar = () => {
    if (this.editor) {
      const { MobileToolbar, TextToolbar } = this.editor.getToolbars();
      this.setState({ StaticToolbar: MobileToolbar || TextToolbar });
    }
  };

  componentWillReceiveProps(newProps: RicosEditorProps) {
    if (newProps.locale !== this.props.locale) {
      this.updateLocale();
    }
  }

  onChange = (childOnChange?: (editorState: EditorState) => void) => (editorState: EditorState) => {
    this.dataInstance.refresh(editorState);
    childOnChange?.(editorState);
    this.onBusyChange(editorState.getCurrentContent());
  };

  getToolbarProps = type => this.editor.getToolbarProps(type);

  focus = () => this.editor.focus();

  blur = () => this.editor.blur();

  getToolbars = () => this.editor.getToolbars();

  getContent = (postId?: string, forPublish?: boolean) => {
    const { getContentState } = this.dataInstance;
    if (postId && forPublish) {
      this.editor.publish(postId); //async
    }
    return getContentState();
  };

  getContentPromise = async ({
    publishId,
    flush,
  }: { flush?: boolean; publishId?: string } = {}) => {
    const { getContentStatePromise, waitForUpdate } = this.dataInstance;
    if (flush) {
      waitForUpdate();
      this.blur();
    }
    const res = await getContentStatePromise();
    if (publishId) {
      this.editor.publish(publishId);
    }
    return res;
  };

  onBusyChange = (contentState: ContentState) => {
    const { onBusyChange, onChange } = this.props;
    const isBusy = hasActiveUploads(contentState);
    if (this.isBusy !== isBusy) {
      this.isBusy = isBusy;
      onBusyChange?.(isBusy);
      onChange?.(convertToRaw(contentState));
    }
  };

  render() {
    const { children, toolbarSettings, draftEditorSettings = {}, ...props } = this.props;
    const { StaticToolbar, localeStrategy, remountKey } = this.state;

    const supportedDraftEditorSettings = filterDraftEditorSettings(draftEditorSettings);

    const child: RichContentChild =
      children && shouldRenderChild('RichContentEditor', children) ? (
        children
      ) : (
        <RichContentEditor />
      );

    return (
      <Fragment key={`${remountKey}`}>
        <StaticToolbarPortal
          StaticToolbar={StaticToolbar}
          textToolbarContainer={toolbarSettings?.textToolbarContainer}
        />
        <RicosEngine
          RicosModal={RicosModal}
          isViewer={false}
          key={'editor'}
          toolbarSettings={toolbarSettings}
          {...props}
        >
          {React.cloneElement(child, {
            onChange: this.onChange(child.props.onChange),
            ref: ref => (this.editor = ref),
            editorKey: 'editor',
            ...supportedDraftEditorSettings,
            ...localeStrategy,
          })}
        </RicosEngine>
      </Fragment>
    );
  }
}

const StaticToolbarPortal: FunctionComponent<{
  StaticToolbar?: ElementType;
  textToolbarContainer?: HTMLElement;
}> = ({ StaticToolbar, textToolbarContainer }) => {
  if (!StaticToolbar) return null;

  if (textToolbarContainer) {
    return ReactDOM.createPortal(<StaticToolbar />, textToolbarContainer);
  }
  return <StaticToolbar />;
};
