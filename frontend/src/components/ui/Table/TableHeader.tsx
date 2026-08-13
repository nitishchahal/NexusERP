import { flexRender } from "@tanstack/react-table";
import type { Table } from "@tanstack/react-table";

interface TableHeaderProps<TData> {
  table: Table<TData>;
}

function TableHeader<TData>({ table }: TableHeaderProps<TData>) {
  return (
    <thead className="bg-slate-50/80">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr
          key={headerGroup.id}
          className="border-b border-slate-300"
        >
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              className={`
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
              `}
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}

export default TableHeader;