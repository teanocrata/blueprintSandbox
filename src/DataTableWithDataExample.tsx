import * as React from "react";

import { Example } from "@blueprintjs/docs-theme";
import { DataTable, ColumnI } from "./DataTable";
import { DatasetTable } from "./DatasetTable";
import { NumericInput, Switch } from "@blueprintjs/core";
import { Utils } from "@blueprintjs/table";
import { columns } from "./columns";

interface DataTableExampleState {
  columns: Array<ColumnI>;
  numRows?: number;
  disableColumnInteractionBar: boolean;
  showHidden: boolean;
  useBlueprintsMenu: boolean;
}

export class DataTableWithDataExample extends React.PureComponent<
  {},
  DataTableExampleState
> {
  tableRef: DataTable | null = null;
  public state = {
    columns,
    numRows: 10000,
    disableColumnInteractionBar: false,
    showHidden: false,
    useBlueprintsMenu: false
  };

  public render() {
    const options = (
      <>
        <Switch
          checked={this.state.disableColumnInteractionBar}
          label="Disable column interaction bar"
          onChange={() => this.toggle("disableColumnInteractionBar")}
        />
        <Switch
          checked={this.state.showHidden}
          label="Show hidden columns"
          onChange={() => this.toggle("showHidden")}
        />
        <Switch
          checked={this.state.useBlueprintsMenu}
          label="Use blueprints menu"
          onChange={() => this.toggle("useBlueprintsMenu")}
        />
        <NumericInput
          value={this.state.numRows}
          placeholder="Number of rows"
          onValueChange={this.setNumRows}
        />
      </>
    );
    return (
      <Example options={options} id={"DataTable"}>
        <h3>DataTable:</h3>
        <div className="dataTableContainer">
          <DatasetTable
            columns={this.state.columns.map((column) => ({
              ...column,
              setLabel: (label) => this.setLabel(column.field, label),
              setDescription: (description) =>
                this.setDescription(column.field, description),
              pinInTable: () => this.setPinInTable(column.field, true),
              unpinInTable: () => this.setPinInTable(column.field, false),
              sort: (direction) => this.setSort(column.field, direction),
              setTableVisibility: (visible) =>
                this.setIsVisibleInTable(column.field, visible),
              castAs: (castAs) => this.castAs(column.field, castAs)
            }))}
            numRows={this.state.numRows}
            onColumnsReordered={this.handleColumnsReordered}
            {...(this.state.disableColumnInteractionBar
              ? {
                  enableColumnInteractionBar: false
                }
              : {})}
            // showHidden={this.state.showHidden}
            // useBlueprintsMenu={this.state.useBlueprintsMenu}
            // getCellContent={this.getCellContent}
          />
        </div>
      </Example>
    );
  }

  private toggle = (
    option: "disableColumnInteractionBar" | "showHidden" | "useBlueprintsMenu"
  ) =>
    this.setState((state) => ({
      ...state,
      [option]: !state[option]
    }));

  private setNumRows = (valueAsNumber: number, valueAsString: string) => {
    this.setState({ numRows: valueAsNumber });
  };

  private setLabel = (field: string, label: string) => {
    this.setState((state) => ({
      columns: state.columns.map((column) => ({
        ...column,
        label: column.field === field ? label : column.label
      }))
    }));
  };

  private setDescription = (field: string, description: string) => {
    this.setState((state) => ({
      columns: state.columns.map((column) => ({
        ...column,
        description: column.field === field ? description : column.description
      }))
    }));
  };

  private setPinInTable = (field: string, pinInTable?: boolean) => {
    this.setState((state) => ({
      columns: state.columns.map((column) => ({
        ...column,
        pinnedInTable:
          column.field === field ? pinInTable : column.pinnedInTable
      }))
    }));
  };

  private setSort = (field: string, sortDirection: "ASC" | "DESC") => {
    this.setState((state) => ({
      columns: state.columns.map((column) => ({
        ...column,
        sorted: column.field === field ? sortDirection : undefined
      }))
    }));
  };

  private setIsVisibleInTable = (field: string, isVisibleInTable: boolean) => {
    this.setState((state) => ({
      columns: state.columns.map((column) => ({
        ...column,
        isVisibleInTable:
          column.field === field ? isVisibleInTable : column.isVisibleInTable
      }))
    }));
  };

  private handleColumnsReordered = (
    oldIndex: number,
    newIndex: number,
    length: number
  ) => {
    if (oldIndex === newIndex) {
      return;
    }

    this.setState((state) => {
      let pinnedColumnsAccount = state.columns.filter(
        (column) => column.pinnedInTable
      ).length;
      const nextChildren = Utils.reorderArray(
        state.columns,
        oldIndex,
        newIndex,
        length
      );
      if (
        oldIndex < pinnedColumnsAccount &&
        newIndex + length > pinnedColumnsAccount
      ) {
        pinnedColumnsAccount =
          pinnedColumnsAccount -
          (Math.min(oldIndex + length, pinnedColumnsAccount) - oldIndex);
      } else if (
        nextChildren.findIndex((column) => !column.pinnedInTable) <
        pinnedColumnsAccount
      ) {
        pinnedColumnsAccount = pinnedColumnsAccount + length;
      }
      return {
        columns: nextChildren.map((column, index) => ({
          ...column,
          pinnedInTable: index < pinnedColumnsAccount
        }))
      };
    });
  };

  private castAs = (field: string, castAs: { type: string }) => {
    this.setState((state) => {
      const originalColumn = state.columns.findIndex(
        (column) => column.field === field
      );
      return {
        columns: Utils.reorderArray(
          [
            ...state.columns,
            {
              field: `${field} as ${castAs.type}`,
              semantic: castAs,
              isPreview: true
            }
          ],
          state.columns.length,
          originalColumn + 1,
          1
        )
      };
    });
  };
}
