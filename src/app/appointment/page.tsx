import { Search } from "lucide-react";
import { format } from "date-fns";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DatePicker from "@/components/date-picker";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getDepartmentList, getMeidcList } from "./actions";

// async function registration() {
//   const res = await fetch("http://119.29.239.184:8888/api/registration", {
//     method: "post",
//     body: JSON.stringify({
//       medicId: "",
//       patientId: "",
//       status: "",
//     }),
//   });
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

export default async function Booking() {
  const { data: departmentList } = await getDepartmentList();

  const { data: meidcList } = await getMeidcList();

  return (
    <div className="px-36">
      {/* <Image className="my-8 object-cover" src={imgUrl} alt="" width="1200" height="900" priority></Image> */}

      <div className="grid grid-cols-4 gap-10">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-between">
                <h2>排序</h2>
                <Button variant="ghost">重置</Button>
              </div>
            </CardTitle>
            <CardContent>
              <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>价格</AccordionTrigger>
                  <AccordionContent>
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">最低价格</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">最高价格</Label>
                      </div>
                    </RadioGroup>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>距离</AccordionTrigger>
                  <AccordionContent>
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">距离最近</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">距离最远</Label>
                      </div>
                    </RadioGroup>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </CardHeader>
        </Card>
        <div className="col-span-3">
          <div className="flex justify-between">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="请选择城市" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="北京">北京</SelectItem>
                <SelectItem value="上海">上海</SelectItem>
                <SelectItem value="天津">天津</SelectItem>
                <SelectItem value="重庆">重庆</SelectItem>
                <SelectItem value="长沙">长沙</SelectItem>
                <SelectItem value="长春">长春</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="请选择科室" />
              </SelectTrigger>
              <SelectContent>
                {departmentList.map((item: Record<string, any>) => (
                  <SelectItem key={item.ID} value={item.ID}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <DatePicker />
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>姓名</TableHead>
                <TableHead>职称</TableHead>
                <TableHead>部门</TableHead>
                <TableHead>工作时间</TableHead>
                <TableHead>价格</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {meidcList.map((item: Record<string, any>) => (
                <TableRow key={item.ID}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.profession}</TableCell>
                  <TableCell>{item.department.name}</TableCell>
                  <TableCell>{`${format(new Date(item.workTime), "HH:mm")} - ${format(new Date(item.endTime), "HH:mm")}`}</TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm">appointment</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>请确认预约</DialogTitle>
                          <DialogDescription>预约详情</DialogDescription>
                        </DialogHeader>
                        <div>
                          <p>医生：{item.name}</p>
                          <p>职称：{item.profession}</p>
                          <p>部门：{item.department.name}</p>
                          <p>
                            工作时间：
                            {`${format(new Date(item.workTime), "HH:mm")} - ${format(new Date(item.endTime), "HH:mm")}`}
                          </p>
                          <p>预约日期：</p>
                          <p>价格：${item.price}</p>
                        </div>
                        <DialogFooter>
                          <Button type="submit">立即预约</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
