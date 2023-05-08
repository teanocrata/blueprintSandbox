import * as React from "react";

import { DataTableWithDataExample } from "./DataTableWithDataExample";

import "./app.css";

export class App extends React.PureComponent {
  public render() {
    return (
      <div
        style={{
          background: "#313641",
          height: "100vh",
          width: "100vw"
        }}
        className="bp3-dark"
      >
        <DataTableWithDataExample />
      </div>
    );
  }
}
