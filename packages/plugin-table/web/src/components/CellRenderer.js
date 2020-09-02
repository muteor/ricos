import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from '../../statics/styles/cell.scss';
import classNames from 'classnames';
import Resizers from './Resizers';

export default class Cell extends PureComponent {
  componentDidUpdate(prevProps) {
    if (!prevProps.editing && this.props.editing) {
      this.editorRef.focus();
    }
  }

  shouldComponentUpdate(nextProps) {
    const { editing, selected } = this.props;
    return editing || nextProps.editing || selected !== nextProps.selected;
  }

  setEditorRef = ref => (this.editorRef = ref);

  render() {
    const {
      row,
      col,
      style,
      onMouseDown,
      onMouseOver,
      onDoubleClick,
      editing,
      onContextMenu,
      children,
      highlightColResizer,
      highlightRowResizer,
      selected,
      cell,
      attributesRenderer,
    } = this.props;

    const { table = {}, cellData = {}, onResize } = attributesRenderer?.(cell, row, col) || {};
    const { style: additionalStyles, merge = {} } = cellData;
    const { colSpan = 1, rowSpan = 1, child } = merge;

    return child ? null : (
      //eslint-disable-next-line
      <td
        className={classNames(selected && styles.selected, editing && styles.editing, styles.cell)}
        onMouseDown={onMouseDown}
        onMouseOver={onMouseOver}
        onDoubleClick={onDoubleClick}
        onTouchEnd={onDoubleClick}
        onContextMenu={onContextMenu}
        colSpan={colSpan}
        rowSpan={rowSpan}
        style={{ ...style, ...(additionalStyles || {}) }}
        data-row={row}
        data-col={col}
      >
        <div style={{ height: '100%', padding: 10 }}>
          {React.cloneElement(children, { readOnly: !editing, ref: this.setEditorRef })}
        </div>
        <Resizers
          row={row}
          col={col}
          table={table}
          onResize={onResize}
          highlightColResizer={highlightColResizer}
          highlightRowResizer={highlightRowResizer}
        />
      </td>
    );
  }
}

Cell.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  selected: PropTypes.bool,
  editing: PropTypes.bool,
  updated: PropTypes.bool,
  attributesRenderer: PropTypes.func,
  onMouseDown: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired,
  onContextMenu: PropTypes.func.isRequired,
  style: PropTypes.object,
  cell: PropTypes.object,
  children: PropTypes.any,
  setDragsVisibility: PropTypes.func,
  highlightColResizer: PropTypes.number || PropTypes.bool,
  highlightRowResizer: PropTypes.number || PropTypes.bool,
};