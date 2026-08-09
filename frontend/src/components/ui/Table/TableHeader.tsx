import { flexRender } from "@tanstack/react-table";
import type { Table } from "@tanstack/react-table";

interface TableHeaderProps<TData> {
  table: Table<TData>;
}

function TableHeader<TData>({ table }: TableHeaderProps<TData>) {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr
          key={headerGroup.id}
          className="border-b border-slate-200 bg-slate-50"
        >
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-600"
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