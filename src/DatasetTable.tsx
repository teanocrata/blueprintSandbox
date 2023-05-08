import * as React from "react";

import { ColumnI, DataTable } from "./DataTable";

interface Row {
  [key: string]: number | string | Array<number> | Array<string> | null;
}

export class DatasetTable extends React.Component<{
  columns: Array<
    ColumnI & {
      getRandomData: () =>
        | number
        | string
        | Array<number>
        | Array<string>
        | null
        | Date;
    }
  >;
  numRows: number;
  onColumnsReordered: any;
}> {
  dataTableRef: DataTable | null = null;
  paginatedRows: {
    range: [number, number];
    rows: Array<Row>;
    cacheKey: number;
    totalRows: number;
    sortBy?: string | undefined;
    sortMode?: "ASC" | "DESC";
  } = {
    range: [0, 0],
    rows: [] as Array<Row>,
    cacheKey: 0,
    totalRows: 0,
    sortBy: undefined,
    sortMode: undefined
  };
  fetching: boolean = false;

  componentDidMount() {
    this.getRows(0);
  }

  timeoutID: NodeJS.Timeout;

  getRows = (baseRow: number) => {
    const baseI = Math.max(baseRow - 50, 0);
    const columns = this.props
      .columns; /*.filter(c => !('loading' in c) || !c.loading)*/

    this.fetching = true;

    clearTimeout(this.timeoutID);

    this.timeoutID = setTimeout(() => {
      const rows: Array<Row> = [];
      for (let index = 0; index < 100; index++) {
        rows[index] = columns.reduce(
          (row, column) => ({
            ...row,
            [column.field]: column.getRandomData()
          }),
          {}
        );
      }
      this.paginatedRows = {
        ...this.paginatedRows,
        range: [baseI, baseI + rows.length],
        rows: rows,
        cacheKey: (this.paginatedRows.cacheKey + 1) % Number.MAX_SAFE_INTEGER,
        totalRows: this.props.numRows
        // sortBy: this.sortByColumn?.field,
        // sortMode: this.sortDirection
      };
      this.fetching = false;
      this.dataTableRef?.forceUpdate();
    }, 200);
  };

  getRow = (i: number): Row => {
    const { range, rows /*, sortBy, sortMode*/ } = this.paginatedRows;
    if (
      i < range[0] ||
      i >=
        range[1] /*|| this.sortByColumn?.field !== sortBy || this.sortDirection !== sortMode */
    ) {
      if (!this.fetching) {
        this.getRows(i);
      }
      return {};
    } else {
      return rows[i - range[0]];
    }
  };

  getCellContent = (rowIndex: number, columnIndex: number) => {
    console.log(rowIndex, "-", columnIndex);
    const column = this.props.columns[columnIndex];
    return this.getRow(rowIndex)[column.field];
  };

  render() {
    return (
      <DataTable
        ref={(dataTableRef) => (this.dataTableRef = dataTableRef)}
        columns={this.props.columns}
        numRows={this.props.numRows}
        onColumnsReordered={this.props.onColumnsReordered}
        getCellContent={this.getCellContent}
      />
    );
  }
}
