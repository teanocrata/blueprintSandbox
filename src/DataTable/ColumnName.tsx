import * as React from "react";
import {
  EditableText,
  Menu,
  MenuItem,
  Button,
  Popover,
  ControlGroup,
  Icon
} from "@blueprintjs/core";
import { Table } from "@blueprintjs/table";
import {
  ColumnI,
  FIRST_LEVEL_SEMANTICS,
  SEMANTIC_ICONS,
  LIST_ELEMENT_SEMANTICS
} from "./DataTable";

export const ColumnName = ({
  name,
  columnIndex,
  columns,
  onColumnsReordered,
  menuRenderer
}: {
  name: string;
  columnIndex: number;
  columns: Array<ColumnI>;
  onColumnsReordered: Table["props"]["onColumnsReordered"];
  menuRenderer?: (columnIndex: number) => string | JSX.Element | undefined;
}) => {
  const pinnedColumnsAccount = columns.filter((column) => column.pinInTable)
    .length;
  const column = columns[columnIndex];
  return (
    <ControlGroup className="centerItems" fill vertical={false}>
      {column.semantic && (
        <Popover
          className="dontGrowNorSrink"
          disabled={!column.castAs}
          content={
            <Menu>
              {[...FIRST_LEVEL_SEMANTICS].sort().map((firsLevetSemantic) =>
                firsLevetSemantic !== "list" ? (
                  <MenuItem
                    {...{
                      key: firsLevetSemantic,
                      id: firsLevetSemantic,
                      text: firsLevetSemantic,
                      icon: SEMANTIC_ICONS[firsLevetSemantic],
                      onClick: () =>
                        column.castAs &&
                        column.castAs({ type: firsLevetSemantic })
                    }}
                  />
                ) : (
                  [...LIST_ELEMENT_SEMANTICS]
                    .sort()
                    .map((listElementSemantic) => (
                      <MenuItem
                        {...{
                          key: listElementSemantic,
                          id: listElementSemantic,
                          text: listElementSemantic,
                          icon: SEMANTIC_ICONS[listElementSemantic],
                          onClick: () =>
                            column.castAs &&
                            column.castAs({
                              type: listElementSemantic
                            })
                        }}
                      />
                    ))
                )
              )}
            </Menu>
          }
        >
          <Icon
            icon={SEMANTIC_ICONS[column.semantic?.type || ""]}
            intent={column.castAs ? "primary" : "none"}
          />
        </Popover>
      )}
      <h3 className="allowSrinkWithMinWidth">
        <EditableText
          disabled={!column.setLabel}
          onChange={column.setLabel}
          value={name}
        />
      </h3>
      {column.pinnedInTable && (
        <Button
          className="dontGrowNorSrink"
          minimal
          icon="pin"
          onClick={
            column.unpinInTable
              ? () => {
                  if (onColumnsReordered) {
                    onColumnsReordered(columnIndex, pinnedColumnsAccount, 1);
                  } else {
                    column.unpinInTable!();
                  }
                }
              : undefined
          }
          disabled={!column.unpinInTable}
          intent={column.unpinInTable ? "primary" : "none"}
          data-trackingid="tr-details-unpinColumn"
        />
      )}
      {column.isVisibleInTable === false && (
        <Button
          className="dontGrowNorSrink"
          minimal
          icon="eye-off"
          onClick={
            column.setTableVisibility
              ? () => {
                  column.setTableVisibility!(true);
                }
              : undefined
          }
          disabled={!column.setTableVisibility}
          intent={column.setTableVisibility ? "primary" : "none"}
          data-trackingid="tr-details-unpinColumn"
        />
      )}
      {column.sorted && (
        <Button
          className="dontGrowNorSrink"
          minimal
          icon={column.sorted === "ASC" ? "sort-asc" : "sort-desc"}
          onClick={
            column.sort
              ? () => column.sort!(column.sorted === "ASC" ? "DESC" : "ASC")
              : undefined
          }
          disabled={!column.sort}
          intent={column.sort ? "primary" : "none"}
        />
      )}
      {menuRenderer && (
        <Popover
          className="dontGrowNorSrink"
          content={menuRenderer(columnIndex)}
        >
          <Icon className="dontGrowNorSrink" icon="more" intent="primary" />
        </Popover>
      )}
    </ControlGroup>
  );
};
