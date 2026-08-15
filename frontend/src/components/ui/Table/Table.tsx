import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import type {
  ColumnDef,
  RowSelectionState,
  SortingState,
} from "@tanstack/react-table";

import { useState } from "react";
import type { DataTableProps } from "./table.types";

function Table<T>({
  data,
  columns,
}: DataTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] =
    useState<RowSelectionState>({});

  const table = useReactTable({
    data,
    columns,

    state: {
      sorting,
      rowSelection,
    },

    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,

    enableSorting: true,
    enableRowSelection: true,

    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const rows = table.getRowModel().rows;

  return (
    <div className="w-full space-y-4">
      {/* Table container */}
      <div
        className="
          overflow-hidden
          rounded-2xl
          border border-slate-200
          bg-white
          shadow-sm
          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        {/* Responsive wrapper */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            {/* Header */}
            <thead
              className="
                sticky top-0 z-10
                bg-slate-50/95
                backdrop-blur
                dark:bg-slate-900/95
              "
            >
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="
                    border-b border-slate-200
                    dark:border-slate-700
                  "
                >
                  {headerGroup.headers.map((header) => {
                    const canSort =
                      header.column.getCanSort();

                    const sortDirection =
                      header.column.getIsSorted();

                    return (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        className="
                          whitespace-nowrap
                          px-6 py-4
                          text-left
                          text-xs
                          font-semibold
                          uppercase
                          tracking-wider
                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        {header.isPlaceholder ? null : (
                          <div
                            onClick={
                              canSort
                                ? header.column.getToggleSortingHandler()
                                : undefined
                            }
                            className={`
                              flex items-center gap-2
                              ${
                                canSort
                                  ? "cursor-pointer select-none"
                                  : ""
                              }
                            `}
                          >
                            <span>
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                            </span>

                            {canSort && (
                              <span
                                className="
                                  text-xs
                                  text-indigo-500
                                "
                              >
                                {sortDirection === "asc"
                                  ? "↑"
                                  : sortDirection === "desc"
                                  ? "↓"
                                  : "↕"}
                              </span>
                            )}
                          </div>
                        )}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>

            {/* Body */}
            <tbody>
              {rows.length > 0 ? (
                rows.map((row) => (
                  <tr
                    key={row.id}
                    data-selected={row.getIsSelected()}
                    className="
                      border-b
                      border-slate-100
                      transition-colors
                      duration-150

                      hover:bg-slate-50

                      data-[selected=true]:bg-indigo-50

                      dark:border-slate-800
                      dark:hover:bg-slate-800/60
                      dark:data-[selected=true]:bg-indigo-500/10
                    "
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="
                          whitespace-nowrap
                          px-6 py-4
                          text-sm
                          text-slate-700
                          dark:text-slate-300
                        "
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="
                      px-6 py-12
                      text-center
                      text-sm
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className="
                          flex h-10 w-10
                          items-center justify-center
                          rounded-full
                          bg-slate-100
                          text-slate-400
                          dark:bg-slate-800
                        "
                      >
                        —
                      </div>

                      <span className="font-medium">
                        No data available
                      </span>

                      <span className="text-xs text-slate-400">
                        There are no records to display.
                      </span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {table.getPageCount() > 1 && (
        <div
          className="
            flex items-center
            justify-between
            rounded-xl
            border border-slate-200
            bg-white
            px-4 py-3
            dark:border-slate-700
            dark:bg-slate-900
          "
        >
          <p className="text-sm text-slate-500">
            Page{" "}
            <span className="font-medium text-slate-700 dark:text-slate-200">
              {table.getState().pagination.pageIndex + 1}
            </span>{" "}
            of{" "}
            <span className="font-medium text-slate-700 dark:text-slate-200">
              {table.getPageCount()}
            </span>
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="
                rounded-lg
                border border-slate-200
                px-3 py-2
                text-sm font-medium
                text-slate-600
                transition-colors
                hover:bg-slate-50
                disabled:cursor-not-allowed
                disabled:opacity-40

                dark:border-slate-700
                dark:text-slate-300
                dark:hover:bg-slate-800
              "
            >
              Previous
            </button>

            <button
              type="button"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="
                rounded-lg
                border border-slate-200
                px-3 py-2
                text-sm font-medium
                text-slate-600
                transition-colors
                hover:bg-slate-50
                disabled:cursor-not-allowed
                disabled:opacity-40

                dark:border-slate-700
                dark:text-slate-300
                dark:hover:bg-slate-800
              "
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Selected rows */}
      {Object.keys(rowSelection).length > 0 && (
        <p className="text-xs text-slate-400">
          {Object.keys(rowSelection).length} row
          {Object.keys(rowSelection).length !== 1
            ? "s"
            : ""}{" "}
          selected
        </p>
      )}
    </div>
  );
}

export default Table;