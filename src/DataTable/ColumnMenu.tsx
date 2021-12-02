import * as React from "react";
import { IMenuItemProps, Menu, MenuItem } from "@blueprintjs/core";
import { Table, Regions, RegionCardinality } from "@blueprintjs/table";

import { ColumnI } from "./DataTable";

export const ColumnMenu = ({
  columnIndex,
  columns,
  tableRef,
  onColumnsReordered
}: {
  columnIndex: number;
  columns: Array<
    Pick<
      ColumnI,
      | "pinnedInTable"
      | "pinInTable"
      | "sort"
      | "sorted"
      | "setTableVisibility"
      | "isVisibleInTable"
    >
  >;
  tableRef: Table | null;
  onColumnsReordered: Table["props"]["onColumnsReordered"];
}) => {
  const column = columns[columnIndex];
  const pinnedColumnsAccount = columns.filter((column) => column.pinnedInTable)
    .length;
  const menuOptions: Array<
    IMenuItemProps & { id: string; allowedForMultipleSelection?: boolean }
  > = [
    ...(column.pinInTable && !column.pinnedInTable
      ? [
          {
            id: "pin",
            icon: "pin" as const,
            text: "Pin",
            onClick: () => {
              const selectedRegions = tableRef?.state.selectedRegions;
              if (
                selectedRegions &&
                selectedRegions.some(
                  (selectedRegion) =>
                    Regions.getRegionCardinality(selectedRegion) ===
                    RegionCardinality.FULL_COLUMNS
                )
              ) {
                selectedRegions?.forEach((selectedRegion) => {
                  if (
                    Regions.getRegionCardinality(selectedRegion) ===
                    RegionCardinality.FULL_COLUMNS
                  ) {
                    for (
                      let selectedColumnIndex = selectedRegion.cols![0];
                      selectedColumnIndex <= selectedRegion.cols![1];
                      selectedColumnIndex++
                    ) {
                      columns[selectedColumnIndex].pinInTable!();
                    }
                  }
                });
              } else {
                column.pinInTable!();
              }

              if (onColumnsReordered) {
                const sendfirstColumnRegion = Regions.column(columnIndex);
                const selectedRegionIndex = selectedRegions
                  ? Regions.findContainingRegion(
                      selectedRegions,
                      sendfirstColumnRegion
                    )
                  : -1;
                if (selectedRegions && selectedRegionIndex >= 0) {
                  const selectedRegion = selectedRegions[selectedRegionIndex];
                  if (
                    Regions.getRegionCardinality(selectedRegion) !==
                    RegionCardinality.FULL_COLUMNS
                  ) {
                    // ignore FULL_TABLE selections
                    return;
                  }
                  const selectedRegionStartIndex = selectedRegion.cols![0];
                  const selectedRegionLength =
                    selectedRegion.cols![1] - selectedRegion.cols![0] + 1;
                  onColumnsReordered(
                    selectedRegionStartIndex,
                    pinnedColumnsAccount,
                    selectedRegionLength
                  );
                } else {
                  onColumnsReordered(columnIndex, pinnedColumnsAccount, 1);
                }
              }
            },
            allowedForMultipleSelection: true
          }
        ]
      : []),
    ...(column.sort
      ? [
          {
            icon: "sort-asc" as const,
            id: "sortAscending",
            onClick: () => {
              column.sort!("ASC");
              tableRef?.forceUpdate();
            },
            disabled: column.sorted === "ASC",
            text: "Sort Asc",
            allowedForMultipleSelection: false
          },
          {
            icon: "sort-desc" as const,
            id: "sortDescending",
            onClick: () => {
              column.sort!("DESC");
              tableRef?.forceUpdate();
            },
            disabled: column.sorted === "DESC",
            text: "Sort Desc",
            allowedForMultipleSelection: false
          }
        ]
      : []),
    ...(column.setTableVisibility
      ? [
          {
            icon:
              column.isVisibleInTable === false
                ? ("eye-open" as const)
                : ("eye-off" as const),
            id: "eye-off",
            onClick: () => {
              const selectedRegions = tableRef?.state.selectedRegions;
              if (
                selectedRegions &&
                selectedRegions.some(
                  (selectedRegion) =>
                    Regions.getRegionCardinality(selectedRegion) ===
                    RegionCardinality.FULL_COLUMNS
                )
              ) {
                selectedRegions?.forEach((selectedRegion) => {
                  if (
                    Regions.getRegionCardinality(selectedRegion) ===
                    RegionCardinality.FULL_COLUMNS
                  ) {
                    for (
                      let selectedColumnIndex = selectedRegion.cols![0];
                      selectedColumnIndex <= selectedRegion.cols![1];
                      selectedColumnIndex++
                    ) {
                      columns[selectedColumnIndex].setTableVisibility!(
                        columns[selectedColumnIndex].isVisibleInTable === false
                          ? true
                          : false
                      );
                    }
                  }
                });
              } else {
                column.setTableVisibility!(
                  column.isVisibleInTable === false ? true : false
                );
              }
              tableRef?.forceUpdate();
            },
            text: column.isVisibleInTable === false ? "View" : "Hide",
            allowedForMultipleSelection: true
          }
        ]
      : []),
    ...(onColumnsReordered
      ? [
          {
            icon: "arrow-left" as const,
            id: "sendfirst",
            onClick: () => {
              const selectedRegions = tableRef?.state.selectedRegions;
              const sendfirstColumnRegion = Regions.column(columnIndex);
              const selectedRegionIndex = selectedRegions
                ? Regions.findContainingRegion(
                    selectedRegions,
                    sendfirstColumnRegion
                  )
                : -1;
              if (selectedRegions && selectedRegionIndex >= 0) {
                const selectedRegion = selectedRegions[selectedRegionIndex];
                if (
                  Regions.getRegionCardinality(selectedRegion) !==
                  RegionCardinality.FULL_COLUMNS
                ) {
                  // ignore FULL_TABLE selections
                  return;
                }
                const selectedRegionStartIndex = selectedRegion.cols![0];
                const selectedRegionLength =
                  selectedRegion.cols![1] - selectedRegion.cols![0] + 1;
                onColumnsReordered(
                  selectedRegionStartIndex,
                  pinnedColumnsAccount,
                  selectedRegionLength
                );
              } else {
                onColumnsReordered(columnIndex, pinnedColumnsAccount, 1);
              }
            },
            text: "Send first",
            allowedForMultipleSelection: true
          },
          {
            icon: "arrow-right" as const,
            id: "sendlast",
            onClick: () => {
              const selectedRegions = tableRef?.state.selectedRegions;
              const sendfirstColumnRegion = Regions.column(columnIndex);
              const selectedRegionIndex = selectedRegions
                ? Regions.findContainingRegion(
                    selectedRegions,
                    sendfirstColumnRegion
                  )
                : -1;
              if (selectedRegions && selectedRegionIndex >= 0) {
                const selectedRegion = selectedRegions[selectedRegionIndex];
                if (
                  Regions.getRegionCardinality(selectedRegion) !==
                  RegionCardinality.FULL_COLUMNS
                ) {
                  // ignore FULL_TABLE selections
                  return;
                }
                const selectedRegionStartIndex = selectedRegion.cols![0];
                const selectedRegionLength =
                  selectedRegion.cols![1] - selectedRegion.cols![0] + 1;
                onColumnsReordered(
                  selectedRegionStartIndex,
                  columns.length - selectedRegionLength,
                  selectedRegionLength
                );
              } else {
                onColumnsReordered(columnIndex, columns.length - 1, 1);
              }
            },
            text: "Send last",
            allowedForMultipleSelection: true
          }
        ]
      : [])
  ];
  return (
    <Menu>
      {menuOptions.map(
        ({ allowedForMultipleSelection, disabled, ...option }) => (
          <MenuItem
            key={option.id}
            {...option}
            disabled={
              disabled ||
              (!allowedForMultipleSelection &&
                tableRef?.state.selectedRegions?.some(
                  (region) =>
                    (region.cols && region.cols[0] !== region.cols[1]) ||
                    (region.rows && region.rows[0] !== region.rows[1])
                ))
            }
          />
        )
      )}
    </Menu>
  );
};
