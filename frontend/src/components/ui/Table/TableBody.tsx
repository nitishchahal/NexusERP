import { flexRender } from "@tanstack/react-table";
import type { Table } from "@tanstack/react-table";

interface TableBodyProps<TData> {
  table: Table<TData>;
  columnsLength: number;
}

function TableBody<TData>({
  table,
  columnsLength,
}: TableBodyProps<TData>) {
  const rows = table.getRowModel().rows;

  return (
    <tbody>
      {rows.length > 0 ? (
        rows.map((row) => (
          <tr
            key={row.id}
            className="border-t border-slate-200 transition-colors hover:bg-slate-50"
          >
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="px-6 py-4 text-sm text-slate-700"
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
            colSpan={columnsLength}
            className="px-6 py-8 text-center text-sm text-slate-500"
          >
            No data available.
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default TableBody;