"use client";

import { Button } from "@/components/ui/button";
import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { updateRecordStatus } from "./actions";

const statusMap = {
  0: "Scheduled",
  1: "InProgress",
  2: "Completed",
};

export interface Appointment {
  ID: number;
  medic: Record<string, any>;
  patient: Record<string, any>;
  status: keyof typeof statusMap;
  registerDate: string;
}

export const columns: ColumnDef<Appointment>[] = [
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
  //   cell: ({ row }) => row.getValue("status"),
  // },
  // {
  //   accessorKey: "registerDate",
  //   header: "Register Date",
  //   cell: ({ row }) => format(row.getValue("registerDate"), "yyyy-MM-dd"),
  // },
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
            <Button onClick={() => updateRecordStatus({ id: row.original.ID, status: 1 })}>Start</Button>
          )}
          {row.original.status === 1 && (
            <Button onClick={() => updateRecordStatus({ id: row.original.ID, status: 2 })}>Done</Button>
          )}
        </div>
      );
    },
  },
];
