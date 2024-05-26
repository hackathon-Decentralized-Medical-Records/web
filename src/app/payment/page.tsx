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
    <Card className="ml-12 w-[1300px]">
      <CardHeader>
        <CardTitle className="mb-4">我的预订</CardTitle>
        <CardDescription>请填写个人信息</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 grid w-full grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">名字</Label>
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
            <Label htmlFor="name">出生日期</Label>
            <Input id="name" placeholder="请输入日期" />
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
        <div className="mb-12 flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            确保病人的姓名与政府签发的身份证/护照上所写的一模一样 避免任何错误
          </label>
        </div>
        <div className="mb-4 grid w-full grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-1.5 ">
            <Label htmlFor="name">身份证</Label>
            <Input id="name" placeholder="请输入" />
          </div>
        </div>
        <div className="mb-4 grid w-full grid-cols-2 items-center gap-4">
          <div className="mb-4 flex flex-col space-y-1.5">
            <Label htmlFor="name">身份证有效期</Label>
            <Input id="name" placeholder="请输入日期" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">身份证类型</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="选择" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="male">居民身份证</SelectItem>
                <SelectItem value="female">护照</SelectItem>
                <SelectItem value="female">临时居民身份证</SelectItem>
                <SelectItem value="female">外国人居留证 </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mb-4">联系人详细信息</div>
        <div className="mb-4 grid w-full grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">名字</Label>
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
        <div className="mb-4 flex flex-col space-y-1.5">
          <Label htmlFor="name">电子邮件</Label>
          <Input id="name" placeholder="请输入地址" />
        </div>
        <div className=" lex mb-4 flex-col space-y-1.5">
          <Label htmlFor="name">联系电话</Label>
          <Input id="name" placeholder="请输入" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between ">
        <Button variant="outline">提交</Button>
      </CardFooter>
    </Card>
  );

  const rightCards = (
    <div className="flex flex-col items-end justify-end">
      <Card className="mb-4 h-auto w-96">
        <Card>
          <CardHeader>
            <CardTitle>价格详情</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p>基本价格</p>
              <span>$150</span>
            </div>
          </CardContent>
          <CardContent>
            <div className="flex items-center justify-between">
              <p>Tax</p>
              <span>Included</span>
            </div>
          </CardContent>
          <CardContent>
            <div className="flex items-center justify-between">
              <p>Save</p>
              <span>-$1.5</span>
            </div>
          </CardContent>
          <CardContent>
            <div className="flex items-center justify-between">
              <p>Total</p>
              <span>$148.5</span>
            </div>
          </CardContent>
        </Card>
      </Card>
      <Card className="h-auto w-96">
        <CardHeader>
          <CardTitle>病例详情</CardTitle>
        </CardHeader>
        <CardContent>
          <p>电子病历公司</p>
        </CardContent>
        <CardContent>
          <div className="flex items-center justify-between">
            <p>门诊内科</p>
            <span>2024年2月9日</span>
          </div>
        </CardContent>
        <CardContent>
          <div className="flex items-center justify-between">
            <p>23:15-1:25</p>
          </div>
        </CardContent>
        <CardContent>
          <div className="flex items-center justify-between">
            <p>2h10m</p>
          </div>
        </CardContent>
        <CardContent>
          <div className="flex items-center justify-between">
            <p>$ 可退还</p>
          </div>
        </CardContent>
        <p className="mb-4">重新安排时间</p>
        <Separator className="my-4" />
        <CardContent>
          <p>电子病历公司</p>
        </CardContent>
        <CardContent>
          <div className="flex items-center justify-between">
            <p>普外科</p>
            <span>2024年2月10日</span>
          </div>
        </CardContent>
        <CardContent>
          <div className="flex items-center justify-between">
            <p>2:25-7:40</p>
          </div>
        </CardContent>
        <CardContent>
          <div className="flex items-center justify-between">
            <p>5h15m</p>
          </div>
        </CardContent>
        <CardContent>
          <div className="flex items-center justify-between">
            <p>$ 可退还</p>
          </div>
        </CardContent>
        <p className="mb-4">重新安排时间</p>
      </Card>
    </div>
  );

  return (
    <div className="flex justify-between space-x-4">
      {leftCard}
      {rightCards}
    </div>
  );
}
