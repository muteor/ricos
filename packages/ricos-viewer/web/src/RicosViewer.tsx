import React, { Component } from 'react';
import { RicosEngine, shouldRenderChild, localeStrategy } from 'ricos-common';
import { RichContentViewer } from 'wix-rich-content-viewer';
import { TextSelectionToolbar, TwitterButton } from 'wix-rich-content-text-selection-toolbar';
import RicosModal from './modals/RicosModal';
import './styles.css';
import { RicosViewerProps } from './index';

interface State {
  isPreviewExpanded: boolean;
  localeStrategy: { locale?: string; localeResource?: Record<string, string> };
  remountKey: boolean;
}

export class RicosViewer extends Component<RicosViewerProps, State> {
  viewerRef: React.RefObject<HTMLDivElement>;
  constructor(props: RicosViewerProps) {
    super(props);
    this.state = {
      isPreviewExpanded: false,
      localeStrategy: { locale: props.locale },
      remountKey: false,
    };
    this.viewerRef = React.createRef();
  }

  static defaultProps = { locale: 'en' };

  updateLocale = async () => {
    const { locale, children } = this.props;
    await localeStrategy(children?.props.locale || locale).then(localeData => {
      this.setState({ localeStrategy: localeData, remountKey: !this.state.remountKey });
    });
  };

  componentDidMount() {
    this.updateLocale();
  }

  componentWillReceiveProps(newProps: RicosViewerProps) {
    if (newProps.locale !== this.props.locale) {
      this.updateLocale();
    }
  }

  onPreviewExpand = () => this.setState({ isPreviewExpanded: true });

  render() {
    const { children, seoSettings, ...props } = this.props;
    const { isPreviewExpanded, remountKey, localeStrategy } = this.state;
    const child =
      children && shouldRenderChild('RichContentViewer', children) ? (
        children
      ) : (
        <RichContentViewer />
      );
    return (
      <div ref={this.viewerRef}>
        <RicosEngine
          RicosModal={RicosModal}
          isPreviewExpanded={isPreviewExpanded}
          onPreviewExpand={this.onPreviewExpand}
          isViewer
          key={`viewer-${remountKey}`}
          {...props}
        >
          {React.cloneElement(child, {
            seoMode: seoSettings,
            ...localeStrategy,
          })}
        </RicosEngine>
        <TextSelectionToolbar container={this.viewerRef.current}>
          {selectedText => <TwitterButton selectedText={selectedText} />}
        </TextSelectionToolbar>
      </div>
    );
  }
}
