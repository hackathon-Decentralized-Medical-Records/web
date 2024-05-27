"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Payment() {
  const leftCard = (
    <Card className="ml-4 w-[1300px]">
      <CardHeader>
        <CardTitle>基本信息</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">姓名</Label>
            <Input id="name" placeholder="请输入文本" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">性别</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="选择" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="male">男</SelectItem>
                <SelectItem value="female">女</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mb-4 grid w-full grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">年龄</Label>
            <Input id="name" placeholder="请输入" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">国籍</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="选择" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="male">中国</SelectItem>
                <SelectItem value="female">美国</SelectItem>
                <SelectItem value="female">英国</SelectItem>
                <SelectItem value="female">加拿大</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="ml-4 w-[1300px]">初步诊断</CardTitle>
        </CardHeader>
        <div className="mb-4 grid w-full grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">主诉</Label>
            <Input id="name" placeholder="请输入文本" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">现病史</Label>
            <Input id="name" placeholder="请输入文本" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">既往史</Label>
            <Input id="name" placeholder="请输入文本" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">过敏史</Label>
            <Input id="name" placeholder="请输入文本" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">家族史</Label>
            <Input id="name" placeholder="请输入文本" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">体格检查结果</Label>
            <Input id="name" placeholder="请输入文本" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">健康指导及指导意见</Label>
            <Input id="name" placeholder="请输入文本" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between ">
        <Button variant="outline">提交</Button>
      </CardFooter>
    </Card>
  );

  return <div className="flex justify-between space-x-4">{leftCard}</div>;
}
