"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

enum Status {}

export interface Appointment {
  ID: number;
  medic: Record<string, any>;
  status: Status;
  registerDate: string;
}

export const columns: ColumnDef<Appointment>[] = [
  {
    accessorKey: "medic.name",
    header: "Medic Name",
  },
  {
    accessorKey: "medic.profession",
    header: "Medic Profession",
  },
  {
    accessorKey: "medic.department.name",
    header: "Medic Department",
  },
  {
    accessorFn: (row) => `${format(row.medic.workTime, "HH:mm")} - ${format(row.medic.endTime, "HH:mm")}`,
    header: "Working Hours",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => row.getValue("status"),
  },
  {
    accessorKey: "registerDate",
    header: "Register Date",
    cell: ({ row }) => format(row.getValue("registerDate"), "yyyy-MM-dd"),
  },
];
