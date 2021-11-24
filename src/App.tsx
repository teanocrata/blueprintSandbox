import * as React from "react";

import { Tab, Tabs } from "@blueprintjs/core";
import { Example, IExampleProps } from "@blueprintjs/docs-theme";

import { Navigation } from "./Navigation";
import { CoreExample } from "./CoreExample";
import { TableReorderableExample } from "./TableReorderableExample";
import { TableEditableExample } from "./TableEditableExample";
import { DataTableExample } from "./DataTableExample";
import { SelectExample } from "./SelectExample";

import "./app.css";

export interface IAppState {
  darkTheme?: boolean;
  example:
    | "tableReorderable"
    | "tableEditable"
    | "dataTable"
    | "core"
    | "select";
}

export class App extends React.PureComponent<IExampleProps, IAppState> {
  public state: IAppState = {
    darkTheme: true,
    example: "dataTable"
  };

  private toggleDarkTheme = () => {
    this.setState({ darkTheme: !this.state.darkTheme });
  };

  private handleExampleChange = (tabId: IAppState["example"]) =>
    this.setState({ example: tabId });

  public render() {
    const { darkTheme } = this.state;
    const options = false;
    return (
      <div
        style={{
          background: this.state.darkTheme ? "#313641" : "transparent",
          height: "100vh",
          width: "100vw"
        }}
        className={this.state.darkTheme ? "bp3-dark" : ""}
      >
        <Example
          options={options}
          showOptionsBelowExample={true}
          {...this.props}
        >
          <Navigation
            darkTheme={darkTheme}
            toggleDarkTheme={this.toggleDarkTheme}
          />
          <Tabs
            vertical
            id="tabs"
            onChange={this.handleExampleChange}
            renderActiveTabPanelOnly
          >
            <Tab
              id="dataTable"
              title="Data table"
              panel={<DataTableExample />}
              panelClassName={"hidden-overflow"}
            />
            <Tab
              id="tableReorderable"
              title="Table reorderable"
              panel={<TableReorderableExample id="tableReorderable" />}
            />
            <Tab
              id="tableEditable"
              title="Table editable"
              panel={<TableEditableExample id="tableEditable" />}
            />
            <Tab id="core" title="Core" panel={<CoreExample />} />
            <Tab id="select" title="Select" panel={<SelectExample />} />
          </Tabs>
        </Example>
      </div>
    );
  }
}
