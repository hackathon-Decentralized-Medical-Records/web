import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { getDepartmentList, getMeidcList } from "./actions";
import AppointmentForm from "./appointment-form";

export default async function Booking() {
  const { data: departmentList } = await getDepartmentList();
  const { data: meidcList } = await getMeidcList();

  return (
    <div className="container">
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Medic Name</TableHead>
            <TableHead className="text-center">Medic Profession</TableHead>
            <TableHead className="text-center">Medic Department</TableHead>
            <TableHead className="text-center">Working Hours</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">operation</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {meidcList.length ? (
            meidcList.map((item: Record<string, any>) => (
              <TableRow key={item.ID}>
                <TableCell className="text-center">{item.name}</TableCell>
                <TableCell className="text-center">{item.profession}</TableCell>
                <TableCell className="text-center">{item.department.name}</TableCell>
                <TableCell className="text-center">{`${format(new Date(item.workTime), "HH:mm")} - ${format(new Date(item.endTime), "HH:mm")}`}</TableCell>
                <TableCell className="text-center">${item.price}</TableCell>
                <TableCell className="text-center">
                  <AppointmentForm {...item} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="h-24 text-center">No results.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
