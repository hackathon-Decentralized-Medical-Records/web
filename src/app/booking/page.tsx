import Image from "next/image";
import { Search } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DatePicker from "@/components/date-picker";

const imgUrl = "https://imgapi.cn/bing.php?rand=true";

export default function Booking() {
  return (
    <div className="px-36">
      <Image className="my-8 object-cover" src={imgUrl} alt="" width="1200" height="900" priority></Image>

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
        <div className="col-span-3 flex justify-between">
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
              <SelectItem value="内科">内科</SelectItem>
              <SelectItem value="外科">外科</SelectItem>
              <SelectItem value="骨科">骨科</SelectItem>
              <SelectItem value="脑科">脑科</SelectItem>
              <SelectItem value="儿科">儿科</SelectItem>
              <SelectItem value="中医科">中医科</SelectItem>
            </SelectContent>
          </Select>
          <DatePicker />
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
