import { flexRender } from "@tanstack/react-table";
import type { Table } from "@tanstack/react-table";

interface TableHeaderProps<TData> {
  table: Table<TData>;
}

function TableHeader<TData>({ table }: TableHeaderProps<TData>) {
  return (
    <thead
      className="
        sticky top-0 z-20
        bg-slate-50/95
        backdrop-blur-md
        dark:bg-slate-900/95
      "
    >
      {table.getHeaderGroups().map((headerGroup) => (
        <tr
          key={headerGroup.id}
          className="
            border-b border-slate-500
            dark:border-slate-700
          "
        >
          {headerGroup.headers.map((header) => {
            const canSort = header.column.getCanSort();
            const sortDirection = header.column.getIsSorted();

            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                aria-sort={
                  sortDirection === "asc"
                    ? "ascending"
                    : sortDirection === "desc"
                    ? "descending"
                    : "none"
                }
                className="
                  group
                  relative
                  whitespace-nowrap
                  px-6 py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                  transition-colors
                  duration-200

                  first:rounded-tl-xl
                  last:rounded-tr-xl

                  hover:bg-slate-100/80
                  dark:text-slate-400
                  dark:hover:bg-slate-800/80
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
                      ${canSort ? "cursor-pointer select-none" : ""}
                    `}
                  >
                    <span className="truncate">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </span>

                    {/* Sort indicator */}
                    {canSort && (
                      <span
                        className="
                          flex h-5 w-5
                          items-center justify-center
                          rounded-md
                          text-[10px]
                          transition-all
                          duration-200
                        "
                      >
                        {sortDirection === "asc" && (
                          <span className="font-bold text-blue-600 dark:text-blue-400">
                            ↑
                          </span>
                        )}

                        {sortDirection === "desc" && (
                          <span className="font-bold text-blue-600 dark:text-blue-400">
                            ↓
                          </span>
                        )}

                        {!sortDirection && (
                          <span
                            className="
                              opacity-0
                              transition-opacity
                              group-hover:opacity-100
                              text-slate-400
                            "
                          >
                            ↕
                          </span>
                        )}
                      </span>
                    )}
                  </div>
                )}

                {/* Column resize handle */}
                {header.column.getCanResize() && (
                  <div
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    onClick={(event) => event.stopPropagation()}
                    className="
                      absolute
                      right-0
                      top-0
                      h-full
                      w-1
                      cursor-col-resize
                      touch-none
                      select-none
                      bg-transparent
                      transition-colors
                      hover:bg-blue-500
                    "
                  />
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
}

export default TableHeader;