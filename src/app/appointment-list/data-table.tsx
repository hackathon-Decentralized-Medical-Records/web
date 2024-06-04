"use client";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useUserStore } from "@/store/user";
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { getRecordByPatient, getRecordByMedic, updateRecordStatus } from "./actions";
import { format } from "date-fns";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const statusMap = {
  0: "Scheduled",
  1: "InProgress",
  2: "Completed",
  3: "Completed",
};

export interface Appointment {
  ID: number;
  medic: Record<string, any>;
  patient: Record<string, any>;
  status: keyof typeof statusMap;
  registerDate: string;
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  // data: TData[];
}

export function DataTable<TData, TValue>({}: DataTableProps<TData, TValue>) {
  const { toast } = useToast();

  const user = useUserStore();
  const [data, setData] = useState([]);
  const [columns] = useState<ColumnDef<Appointment>[]>([
    // {
    //   accessorKey: "medic.name",
    //   header: "Medic Name",
    // },
    // {
    //   accessorKey: "medic.profession",
    //   header: "Medic Profession",
    // },
    // {
    //   accessorKey: "medic.department.name",
    //   header: "Medic Department",
    // },
    // {
    //   accessorFn: (row) => `${format(row.medic.workTime, "HH:mm")} - ${format(row.medic.endTime, "HH:mm")}`,
    //   header: "Working Hours",
    // },
    // {
    //   accessorKey: "status",
    //   header: "Status",
    //   cell: ({ row }) => statusMap[row.getValue("status") as keyof typeof statusMap],
    // },
    // {
    //   accessorKey: "registerDate",
    //   header: "Register Date",
    //   cell: ({ row }) => format(row.getValue("registerDate"), "yyyy-MM-dd"),
    // },
    // ---Patient---
    {
      accessorKey: "patient.name",
      header: "Patient Name",
    },
    {
      accessorKey: "registerDate",
      header: "Register Date",
      cell: ({ row }) => format(row.getValue("registerDate"), "yyyy-MM-dd"),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => statusMap[row.getValue("status") as keyof typeof statusMap],
    },
    {
      id: "actions",
      header: "operation",
      cell: ({ row }) => {
        return (
          <div className="space-x-2">
            <Button variant="secondary" asChild>
              <Link href={`/historical-case?name=${row.original.patient.name}`}>view history record</Link>
            </Button>
            {row.original.status === 0 && (
              <Button
                onClick={async () => {
                  await updateRecordStatus({ id: row.original.ID, status: 1 });
                  await getList();
                  toast({ title: "Success" });
                }}
              >
                Start
              </Button>
            )}
            {row.original.status === 1 && (
              <Button
                onClick={async () => {
                  await updateRecordStatus({ id: row.original.ID, status: 2 });
                  await getList();
                  toast({ title: "Success" });
                }}
              >
                Done
              </Button>
            )}
            {row.original.status === 2 && (
              <>
                <Button asChild>
                  <Label htmlFor="picture">Upload</Label>
                </Button>
                <Input
                  className="hidden"
                  id="picture"
                  type="file"
                  onChange={async () => {
                    await updateRecordStatus({ id: row.original.ID, status: 3 });
                    await getList();
                    toast({ title: "Success" });
                  }}
                />
              </>
            )}
          </div>
        );
      },
    },
  ]);

  async function getList() {
    const res = await getRecordByMedic(`${user.ID}`);
    console.log(res);
    setData(res.data);
  }

  useEffect(() => {
    user.ID && getList();
  }, [user.ID]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <div className="round-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-center">
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-center">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* <div className="item-center flex justify-end space-x-2 py-4">
        <Button variant="outline" size="sm" disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>
          Previous
        </Button>
        <Button variant="outline" size="sm" disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>
          Next
        </Button>
      </div> */}
    </div>
  );
}
