import { Label } from "@/components/ui/label";
import { columns } from "./columns";
import { DataTable } from "./data-table";

// let data: Payment[] = [
//   {
//     id: "728ed52f",
//     amount: 100,
//     status: "pending",
//     email: "m@example.com",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//   },
//   // ...
// ];

interface AppointmentListProps {}

export default async function AppointmentList({}: AppointmentListProps) {
  return (
    <div className="container mx-auto py-10">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">My Appointment</h2>
      <DataTable columns={columns} />
    </div>
  );
}
