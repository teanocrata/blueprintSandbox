import * as React from "react";

import {
  EditableText,
  IconName,
  ProgressBar,
  Icon,
  Divider
} from "@blueprintjs/core";
import {
  Cell,
  Column,
  ColumnHeaderCell,
  ICellRenderer,
  IColumnHeaderRenderer,
  ITableProps,
  RenderMode,
  Table,
  Regions
} from "@blueprintjs/table";
import { ColumnMenu } from "./ColumnMenu";
import { ColumnName } from "./ColumnName";
import { Summary } from "./Summary";
import { Chart } from "./Chart";

const COLUMN_WIDTH = 170;
const ROW_HEIGHT = 64;
export const FIRST_LEVEL_SEMANTICS = [
  "list",
  "boolean",
  "category",
  "currency",
  "date",
  "number",
  "sex",
  "text",
  "url"
] as const;
export const LIST_ELEMENT_SEMANTICS = [
  "list[boolean]",
  "list[date]",
  "list[number]",
  "list[url]",
  "list[category]"
];
export const SEMANTIC_ICONS: {
  [key in
    | typeof FIRST_LEVEL_SEMANTICS[number]
    | typeof LIST_ELEMENT_SEMANTICS[number]]: IconName;
} = new Proxy(
  {
    list: "list",
    boolean: "segmented-control",
    category: "key",
    currency: "euro",
    date: "calendar",
    number: "numerical",
    sex: "person",
    text: "label",
    url: "link",
    "list[boolean]": "segmented-control",
    "list[date]": "calendar",
    "list[number]": "numerical",
    "list[url]": "link",
    "list[category]": "key"
  },
  {
    get: (semanticIconsObject, semanticShortForm) =>
      semanticShortForm in semanticIconsObject
        ? semanticIconsObject[semanticShortForm]
        : "blank"
  }
);

export interface ColumnI {
  field: string;
  label?: string;
  description?: string;
  semantic?: {
    type: string;
  };
  pinInTable?: () => void;
  unpinInTable?: () => void;
  pinnedInTable?: boolean;
  setLabel?: (label: string) => void;
  setDescription?: (description: string) => void;
  castAs?: (as: { type: string }) => void;
  nullsCount?: number;
  sorted?: "ASC" | "DESC";
  sort?: (direction: "ASC" | "DESC") => void;
  isVisibleInTable?: boolean;
  setTableVisibility?: (isVisibleInTable: boolean) => void;
  isPreview?: boolean;
}

interface Props extends ITableProps {
  columns: Array<ColumnI>;
  showHidden?: boolean;
  useBlueprintsMenu?: boolean;
}

export class DataTable extends React.Component<Props> {
  tableRef: Table | null = null;
  menuRenderer = (columnIndex: number) => (
    <ColumnMenu
      columnIndex={columnIndex}
      columns={this.props.columns}
      tableRef={this.tableRef}
      onColumnsReordered={this.props.onColumnsReordered}
    />
  );

  nameRenderer = (name: string, columnIndex: number) => (
    <ColumnName
      name={name}
      columnIndex={columnIndex}
      columns={this.props.columns}
      onColumnsReordered={this.props.onColumnsReordered}
      menuRenderer={
        this.props.useBlueprintsMenu ? undefined : this.menuRenderer
      }
    />
  );

  columnHeaderCellRenderer: IColumnHeaderRenderer = (columnIndex) => {
    const { numRows = 0, columns } = this.props;
    const column = columns[columnIndex];

    return (
      <ColumnHeaderCell
        className={column.isVisibleInTable === false ? "shouldHide" : undefined}
        index={columnIndex}
        menuIcon={
          <Icon
            icon="more"
            style={
              this.props.useBlueprintsMenu ? undefined : { display: "none" }
            }
          />
        }
        name={column.label || column.field}
        nameRenderer={this.nameRenderer}
        menuRenderer={this.menuRenderer}
      >
        <>
          {column.nullsCount != null && (
            <ProgressBar
              animate={false}
              intent="primary"
              stripes={false}
              value={(numRows - column.nullsCount) / (numRows || 1)}
            />
          )}
          {(column.setDescription || column.description) && (
            <EditableText
              disabled={!column.setDescription}
              onChange={column.setDescription}
              value={column.description}
              multiline
            />
          )}
          {column.nullsCount != null && column.semantic && <Divider />}
          {column.nullsCount != null &&
            column.semantic &&
            (column.semantic?.type === "number" ||
            column.semantic?.type === "currency" ? (
              <Chart />
            ) : (
              <Summary />
            ))}
        </>
      </ColumnHeaderCell>
    );
  };
  cellRenderer: ICellRenderer = (rowIndex: number, columnIndex: number) => {
    return (
      <Cell
        columnIndex={columnIndex}
        rowIndex={rowIndex}
        loading={this.props.columns[columnIndex].nullsCount == null}
      />
    );
  };
  render() {
    const { columns = [], showHidden, ...tableProps } = this.props;
    return (
      <Table
        className={
          showHidden ? "bp3-table-striped" : "bp3-table-striped hideHideable"
        }
        ref={(tableRef) => (this.tableRef = tableRef)}
        numFrozenColumns={
          columns.filter((column) => column.pinnedInTable).length
        }
        columnWidths={
          showHidden != null
            ? columns.map((column) =>
                column.isVisibleInTable === false && !showHidden
                  ? 1
                  : COLUMN_WIDTH
              )
            : undefined
        }
        defaultRowHeight={ROW_HEIGHT}
        defaultColumnWidth={COLUMN_WIDTH}
        enableColumnReordering={this.props.onColumnsReordered != null}
        enableColumnInteractionBar
        renderMode={RenderMode.NONE}
        styledRegionGroups={columns.map((column, index) =>
          column.isVisibleInTable === false
            ? {
                className: "isHidden",
                regions: [Regions.column(index)]
              }
            : column.isPreview
            ? { className: "isPreview", regions: [Regions.column(index)] }
            : { regions: [] }
        )}
        {...tableProps}
      >
        {columns.map((column) => (
          <Column
            key={column.field}
            columnHeaderCellRenderer={this.columnHeaderCellRenderer}
            cellRenderer={this.cellRenderer}
          />
        ))}
      </Table>
    );
  }
}

export default DataTable;
