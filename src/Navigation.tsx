import * as React from "react";
import {
  Alignment,
  AnchorButton,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button
} from "@blueprintjs/core";

export interface NavigationProps {
  darkTheme?: boolean;
  toggleDarkTheme?: () => void;
}

export class Navigation extends React.PureComponent<NavigationProps> {
  public render() {
    return (
      <Navbar className={Classes.DARK}>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Blueprint Sandbox</NavbarHeading>
          <NavbarDivider />
          <AnchorButton
            href="http://blueprintjs.com/docs/v2/"
            text="Docs"
            target="_blank"
            minimal
            rightIcon="share"
          />
          <AnchorButton
            href="http://github.com/palantir/blueprint"
            text="Github"
            target="_blank"
            minimal
            rightIcon="code"
          />
          <NavbarDivider />
          <Button
            icon={this.props.darkTheme ? "moon" : "flash"}
            onClick={this.props.toggleDarkTheme}
            disabled={!this.props.toggleDarkTheme}
          />
        </NavbarGroup>
      </Navbar>
    );
  }
}
