import { ContextMenuIcon } from '../../icons';
import { getMultipleCellsContextMenuButtonsProps } from './MultipleCellsContextMenuButtonsProps';
import { getSingleCellContextMenuButtonsProps } from './SingleCellContextMenuButtonsProps';

const getContextMenuButtons = (
  shouldShowContextMenu,
  table,
  innerEditorsRefs,
  selected,
  deleteRow,
  addRow,
  deleteColumn,
  addCol,
  selectRows,
  selectCols
) => {
  return shouldShowContextMenu
    ? [
        ...getMultipleCellsContextMenuButtonsProps(
          table,
          innerEditorsRefs,
          selected,
          deleteRow,
          addRow,
          deleteColumn,
          addCol
        ),
      ]
    : [...getSingleCellContextMenuButtonsProps(table, selected, selectRows, selectCols)];
};

export const getContextMenuButtonsProps = (
  shouldShowContextMenu,
  table,
  innerEditorsRefs,
  selected,
  deleteRow,
  addRow,
  deleteColumn,
  addCol,
  selectRows,
  selectCols
) => {
  return [
    {
      type: 'context-menu',
      getIcon: () => ContextMenuIcon,
      dataHook: 'context-menu',
      buttonList: [
        ...getContextMenuButtons(
          shouldShowContextMenu,
          table,
          innerEditorsRefs,
          selected,
          deleteRow,
          addRow,
          deleteColumn,
          addCol,
          selectRows,
          selectCols
        ),
      ],
    },
  ];
};
