import React, { useMemo } from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Props = {
  data: any[];
};

function Table({ data }: Props) {
  const columnHelper = createColumnHelper<typeof data>();

  const columns = useMemo(
    () => [
      columnHelper.accessor("RPT_MO", {
        header: "RPT_MO",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("uv", {
        header: "uv",
        cell: (info) => info.getValue(),
      }),
    ],
    []
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table className="table-auto border-collapse w-full border">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="border p-2 text-left bg-gray-100">
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
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="border p-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
