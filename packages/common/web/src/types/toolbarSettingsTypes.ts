/* eslint-disable @typescript-eslint/no-explicit-any */
import { EditorState } from 'draft-js';
import { ComponentType } from 'react';
import { ToolbarType, InsertButton, ToolbarButtonProps } from '.';

interface PlatformSettings<T> {
  desktop?: T;
  mobile?: {
    ios?: T;
    android?: T;
  };
}

export interface ToolbarSettingsFunctions {
  name: ToolbarType;
  shouldCreate?: () => PlatformSettings<boolean>;
  getVisibilityFn?: () => PlatformSettings<(editorState: EditorState) => boolean>;
  getPositionOffset?: () => PlatformSettings<{ x: number; y: number }>;
  getButtons?: () => PlatformSettings<any[]>;
  getTextPluginButtons?: () => PlatformSettings<{ [key: string]: ComponentType }>;
  getInstance?: (config: any) => any;
  getDisplayOptions?: () => PlatformSettings<any>;
  getToolbarDecorationFn?: () => PlatformSettings<any>;
  addPluginMenuConfig?: {
    showSearch?: boolean;
    splitToSections?: boolean;
    tablePluginMenu?: boolean;
    horizontalMenuLayout?: boolean;
  };
  footerToolbarConfig?: {
    morePluginsMenu?: {
      splitToSections: boolean;
      showSearch: boolean;
    };
    pluginsToDisplayInToolbar?: string[];
  };
}

export type TextButtons = {
  desktop: string[];
  mobile: string[];
};

export type PluginButton = {
  buttonSettings: InsertButton;
  component: ComponentType;
  blockType: string;
};

export type PluginTextButtons = { [key: string]: ComponentType };

export type GetToolbarSettings = ({
  textButtons,
  pluginButtons,
  pluginButtonNames,
  pluginTextButtons,
  pluginButtonProps,
  tablePluginMenu,
}: {
  textButtons: TextButtons;
  pluginButtons: PluginButton[];
  pluginButtonNames: string[];
  pluginTextButtons: PluginTextButtons;
  pluginButtonProps: ToolbarButtonProps[];
  tablePluginMenu?: boolean;
}) => ToolbarSettingsFunctions[];
