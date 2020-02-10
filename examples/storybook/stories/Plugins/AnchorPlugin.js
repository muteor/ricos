import React from 'react';
import { RichContentViewer } from 'wix-rich-content-viewer';
import { RichContentEditor, convertFromRaw, createWithContent } from 'wix-rich-content-editor';

import { anchorTypeMapper } from 'wix-rich-content-plugin-anchor/dist/module.viewer';
import { createAnchorPlugin } from 'wix-rich-content-plugin-anchor';

import { linkTypeMapper } from 'wix-rich-content-plugin-link/dist/module.viewer';
import { createLinkPlugin } from 'wix-rich-content-plugin-link';

import anchorFixture from '../../../../e2e/tests/fixtures/anchor.json';
import {
  RichContentEditorBox,
  RichContentViewerBox,
  ContentState,
  Section,
  Page,
} from '../Components/StoryParts';
import ThemesExample from '../Components/ThemesExample';

const typeMappers = [linkTypeMapper, anchorTypeMapper];

export default () => {
  const plugins = [createAnchorPlugin, createLinkPlugin];
  return (
    <Page title="Anchor Plugin">
      <Section type={Section.Types.COMPARISON}>
        <RichContentEditorBox preset="blog-preset">
          <RichContentEditor
            plugins={plugins}
            editorState={createWithContent(convertFromRaw(anchorFixture))}
          />
        </RichContentEditorBox>
        <RichContentViewerBox preset="blog-preset">
          <RichContentViewer initialState={anchorFixture} typeMappers={typeMappers} />
        </RichContentViewerBox>
      </Section>
      <Section title="Content State">
        <ContentState json={anchorFixture} />
      </Section>
      <Section title="themeing">
        <ThemesExample>
          <RichContentEditor
            plugins={plugins}
            editorState={createWithContent(convertFromRaw(anchorFixture))}
          />
        </ThemesExample>
      </Section>
    </Page>
  );
};
