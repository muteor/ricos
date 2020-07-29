/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import TableViewer from './table-viewer';
import { TABLE_TYPE } from './types';
import { EditorState, convertToRaw } from 'wix-rich-content-editor';
import styles from '../statics/styles/table.scss';
import DragAndDropToolbar from './DragAndDropToolbar';
import { addColumnToComponentData, addRowToComponentData } from './tableUtils';
class TableComponent extends React.Component {
  static type = { TABLE_TYPE };
  constructor(props) {
    super(props);
    this.innerRCECaptionRef = {};
    this.colNum = 1;
    this.rowNum = 1;
    this.state = {};
    this.colDragStyles = {
      cellsContainer: styles.colsController,
      cellController: styles.colController,
      add: styles.add,
    };

    this.rowDragStyles = {
      cellsContainer: styles.rowsController,
      cellController: styles.rowController,
      add: styles.add,
    };
  }

  updateComponentData = (i, j, data) => {
    const { setData } = this.props.blockProps;
    const { componentData } = this.props;
    const componentDataToSave = {
      ...componentData,
      config: {
        ...componentData.config,
        cells: {
          ...componentData.config.cells,
          [i]: { ...componentData.config.cells[i], [j]: data },
        },
      },
    };
    setData(componentDataToSave);
    this.props.store.set('componentData', { ...componentDataToSave }, this.props.block.getKey());
  };

  renderInnerRCE = (i, j) => {
    const { innerRCEOpenModal, innerRCEReadOnly, componentData } = this.props;
    let contentState = componentData.config?.cells[i] && componentData.config.cells[i][j];
    if (!contentState) {
      contentState = convertToRaw(EditorState.createEmpty().getCurrentContent());
      contentState.blocks[0].text = 'blabla';
      this.updateComponentData(i, j, contentState);
    }
    return (
      <>
        <div
          style={{ position: 'inherit', cursor: 'pointer' }}
          onClick={() =>
            innerRCEOpenModal(
              contentState,
              newContentState => this.updateComponentData(i, j, newContentState),
              'table',
              this.innerRCECaptionRef[i][j]
            )
          }
        >
          <div
            ref={ref =>
              (this.innerRCECaptionRef = {
                ...this.innerRCECaptionRef,
                [i]: { ...this.innerRCECaptionRef[i], [j]: ref },
              })
            }
          >
            {innerRCEReadOnly(contentState)}
          </div>
        </div>
      </>
    );
  };

  setDragsVisibility = (i, j) => this.setState({ visibleRow: i, visibleCol: j });

  addRow = (position = 0) => {
    const { setData } = this.props.blockProps;
    const { componentData } = this.props;
    const componentDataToSave = addRowToComponentData(componentData, position);
    setData(componentDataToSave);
    this.props.store.set('componentData', { ...componentDataToSave }, this.props.block.getKey());
    this.rowNum++;
  };

  addColumn = (position = 0) => {
    const { setData } = this.props.blockProps;
    const { componentData } = this.props;
    const componentDataToSave = addColumnToComponentData(componentData, position);

    setData(componentDataToSave);
    this.props.store.set('componentData', { ...componentDataToSave }, this.props.block.getKey());
    this.colNum++;
  };

  cleanSelectedCells = () => this.setState({ selected: undefined, allowEditCell: false });

  selectRow = i =>
    this.setState({ selected: { start: { i, j: 0 }, end: { i, j: this.colNum - 1 } } });

  selectCol = j =>
    this.setState({ selected: { start: { i: 0, j }, end: { i: this.rowNum - 1, j } } });

  render() {
    const { componentData, settings } = this.props;
    const { visibleRow, visibleCol, selected } = this.state;
    return (
      <div className={styles.tableEditorContainer}>
        <DragAndDropToolbar
          visibleDrag={visibleCol}
          styles={this.colDragStyles}
          cellsNum={this.colNum}
          onDragClick={j => this.selectCol(j)}
          onPlusClick={i => this.addColumn(i)}
        />
        <DragAndDropToolbar
          visibleDrag={visibleRow}
          styles={this.rowDragStyles}
          cellsNum={this.rowNum}
          onDragClick={i => this.selectRow(i)}
          onPlusClick={i => this.addRow(i)}
        />
        <div className={styles.rceTable}>
          <TableViewer
            componentData={componentData}
            settings={settings}
            renderInnerRCE={this.renderInnerRCE}
            updateComponentData={this.updateComponentData}
            setDragsVisibility={this.setDragsVisibility}
            addColumn={this.addColumn}
            addRow={this.addRow}
            rowNum={this.rowNum}
            colNum={this.colNum}
            selected={selected}
            cleanSelectedCells={this.cleanSelectedCells}
          />
        </div>
        <div className={styles.addCol} onClick={() => this.addColumn(this.colNum)}>
          +
        </div>
        <div className={styles.addRow} onClick={() => this.addRow(this.rowNum)}>
          + New row
        </div>
      </div>
    );
  }
}

TableComponent.propTypes = {
  blockProps: PropTypes.object.isRequired,
  block: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  componentData: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  innerRCEOpenModal: PropTypes.func,
  innerRCEReadOnly: PropTypes.func,
};

export { TableComponent as Component };
