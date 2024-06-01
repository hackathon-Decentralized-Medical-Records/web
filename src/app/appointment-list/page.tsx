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
      <DataTable columns={columns} />
    </div>
  );
}
