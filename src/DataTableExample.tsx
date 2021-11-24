import * as React from "react";

import { Example } from "@blueprintjs/docs-theme";
import { DataTable, ColumnI } from "./DataTable";
import { NumericInput, Switch } from "@blueprintjs/core";
import { Utils } from "@blueprintjs/table";

interface DataTableExampleState {
  columns: Array<ColumnI>;
  numRows?: number;
  allowSetLabel: boolean;
  allowSetDescription: boolean;
  allowPin: boolean;
  columnHasSemantic: boolean;
  allowReorderColumns: boolean;
  columnHasNullsInfo: boolean;
  disableColumnInteractionBar: boolean;
  allowCast: boolean;
  allowSort: boolean;
  allowHide: boolean;
  showHidden: boolean;
  useBlueprintsMenu: boolean;
}

const columns: Array<ColumnI> = [
  { field: "User name", semantic: { type: "category" } },
  { field: "Estimated Salary", semantic: { type: "number" } },
  { field: "Country", semantic: { type: "category" } },
  { field: "User description", semantic: { type: "text" } },
  { field: "Subscription date", semantic: { type: "date" } },
  { field: "Age", semantic: { type: "number " } },
  { field: "Job title", semantic: { type: "category" } },
  { field: "Phone number", semantic: { type: "category" } }
];

export class DataTableExample extends React.PureComponent<
  {},
  DataTableExampleState
> {
  public state = {
    columns,
    numRows: undefined,
    allowSetLabel: false,
    allowSetDescription: false,
    allowPin: false,
    columnHasSemantic: false,
    allowReorderColumns: false,
    columnHasNullsInfo: false,
    disableColumnInteractionBar: false,
    allowCast: false,
    allowSort: false,
    allowHide: false,
    showHidden: false,
    useBlueprintsMenu: false
  };

  public render() {
    const options = (
      <>
        <Switch
          checked={this.state.columnHasSemantic}
          label="Column has semantic"
          onChange={() => this.toggle("columnHasSemantic")}
        />
        <Switch
          checked={this.state.allowSetLabel}
          label="Allow change label"
          onChange={() => this.toggle("allowSetLabel")}
        />
        <Switch
          checked={this.state.allowSetDescription}
          label="Allow change description"
          onChange={() => this.toggle("allowSetDescription")}
        />
        <Switch
          checked={this.state.allowPin}
          label="Allow pin columns"
          onChange={() => this.toggle("allowPin")}
        />
        <Switch
          checked={this.state.allowReorderColumns}
          label="Allow reorder columns"
          onChange={() => this.toggle("allowReorderColumns")}
        />
        <Switch
          checked={this.state.columnHasNullsInfo}
          label="Column has nulls info"
          onChange={() => this.toggle("columnHasNullsInfo")}
        />
        <Switch
          checked={this.state.disableColumnInteractionBar}
          label="Disable column interaction bar"
          onChange={() => this.toggle("disableColumnInteractionBar")}
        />
        <Switch
          checked={this.state.allowSort}
          label="Allow sort column"
          onChange={() => this.toggle("allowSort")}
        />
        <Switch
          checked={this.state.allowCast}
          label="Allow cast column"
          onChange={() => this.toggle("allowCast")}
        />
        <Switch
          checked={this.state.allowHide}
          label="Allow hide column"
          onChange={() => this.toggle("allowHide")}
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
          <DataTable
            columns={this.state.columns.map((column) => ({
              ...column,
              semantic: this.state.columnHasSemantic
                ? column.semantic
                : undefined
            }))}
            numRows={this.state.numRows}
            onColumnsReordered={
              this.state.allowReorderColumns
                ? this.handleColumnsReordered
                : undefined
            }
            {...(this.state.disableColumnInteractionBar
              ? {
                  enableColumnInteractionBar: false
                }
              : {})}
            showHidden={this.state.showHidden}
            useBlueprintsMenu={this.state.useBlueprintsMenu}
          />
        </div>
      </Example>
    );
  }

  private toggle = (
    option:
      | "allowSetLabel"
      | "allowSetDescription"
      | "allowPin"
      | "columnHasSemantic"
      | "allowReorderColumns"
      | "columnHasNullsInfo"
      | "disableColumnInteractionBar"
      | "allowSort"
      | "allowCast"
      | "allowHide"
      | "showHidden"
      | "useBlueprintsMenu"
  ) => {
    if (option === "columnHasNullsInfo") {
      this.setState((state) => ({
        columnHasNullsInfo: !state.columnHasNullsInfo,
        ...(option === "columnHasNullsInfo" &&
        !state.columnHasNullsInfo &&
        !state.numRows
          ? { numRows: 10 }
          : {}),
        columns: state.columns.map((column) => ({
          ...column,
          nullsCount: !state.columnHasNullsInfo
            ? Math.floor(Math.random() * (state.numRows || 10))
            : undefined
        }))
      }));
    } else {
      this.setState(
        (state) =>
          ({
            [option]: !state[option],
            ...(!option.startsWith("allow")
              ? {}
              : {
                  columns: state.columns.map((column) => ({
                    ...column,
                    ...(option === "allowSetLabel"
                      ? {
                          setLabel: !state.allowSetLabel
                            ? (label: string) =>
                                this.setLabel(column.field, label)
                            : undefined
                        }
                      : {}),
                    ...(option === "allowSetDescription"
                      ? {
                          setDescription: !state.allowSetDescription
                            ? (description: string) =>
                                this.setDescription(column.field, description)
                            : undefined
                        }
                      : {}),
                    ...(option === "allowPin"
                      ? {
                          pinInTable: !state.allowPin
                            ? () => this.setPinInTable(column.field, true)
                            : undefined,
                          unpinInTable: !state.allowPin
                            ? () => this.setPinInTable(column.field, undefined)
                            : undefined
                        }
                      : {}),

                    ...(option === "allowSort"
                      ? {
                          sort: !state.allowSort
                            ? (sortDirection: "ASC" | "DESC") =>
                                this.setSort(column.field, sortDirection)
                            : undefined
                        }
                      : {}),
                    ...(option === "allowCast"
                      ? {
                          castAs: !state.allowCast
                            ? (castAs: { type: string }) =>
                                this.castAs(column.field, castAs)
                            : undefined
                        }
                      : {}),
                    ...(option === "allowHide"
                      ? {
                          setTableVisibility: !state.allowHide
                            ? (isVisibleInTable: boolean) =>
                                this.setIsVisibleInTable(
                                  column.field,
                                  isVisibleInTable
                                )
                            : undefined
                        }
                      : {})
                  }))
                })
          } as any)
      );
    }
  };

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
