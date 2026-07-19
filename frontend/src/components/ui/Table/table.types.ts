import type {
    ColumnDef,
    RowSelectionState,
  } from "@tanstack/react-table";
  
  export interface DataTableProps<T> {
    data: T[];
    columns: ColumnDef<T>[];
  
    loading?: boolean;
  
    pageIndex?: number;
  
    pageSize?: number;
  
    pageCount?: number;
  
    rowSelection?: RowSelectionState;
  
    onRowSelectionChange?: (
      rowSelection: RowSelectionState
    ) => void;
  }