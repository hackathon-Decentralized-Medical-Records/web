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
        <CardTitle className="mb-4">My reservation</CardTitle>
        <CardDescription>Please fill in personal information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 grid w-full grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Please enter text" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">Gender</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="male">male</SelectItem>
                <SelectItem value="female">female</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mb-4 grid w-full grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Date of Birth:</Label>
            <Input id="name" placeholder="Please enter the date" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">nationality</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="male">China</SelectItem>
                <SelectItem value="female">America</SelectItem>
                <SelectItem value="female">Britain</SelectItem>
                <SelectItem value="female">Canada</SelectItem>
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
            Ensure that the patient's name is the same as that on the government issued ID card/passport to avoid any
            mistakes
          </label>
        </div>
        <div className="mb-4 grid w-full grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-1.5 ">
            <Label htmlFor="name">ID card</Label>
            <Input id="name" placeholder="Please enter" />
          </div>
        </div>
        <div className="mb-4 grid w-full grid-cols-2 items-center gap-4">
          <div className="mb-4 flex flex-col space-y-1.5">
            <Label htmlFor="name">Validity period of ID card</Label>
            <Input id="name" placeholder="Please enter the date" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">ID card type</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="male">Resident ID card</SelectItem>
                <SelectItem value="female">passport</SelectItem>
                <SelectItem value="female">Temporary Resident Identity Card</SelectItem>
                <SelectItem value="female">Foreigner's Residence Permit </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mb-4">Contact Details </div>
        <div className="mb-4 grid w-full grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Please enter text" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">Gender</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="male">male</SelectItem>
                <SelectItem value="female">female</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mb-4 flex flex-col space-y-1.5">
          <Label htmlFor="name">Email</Label>
          <Input id="name" placeholder="Please enter the address" />
        </div>
        <div className=" lex mb-4 flex-col space-y-1.5">
          <Label htmlFor="name">phone number</Label>
          <Input id="name" placeholder="Please enter" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between ">
        <Button variant="outline">Submit</Button>
      </CardFooter>
    </Card>
  );

  const rightCards = (
    <div className="flex flex-col items-end justify-end">
      <Card className="mb-4 h-auto w-96">
        <Card>
          <CardHeader>
            <CardTitle>Price details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <p>Basic price</p>
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
          <CardTitle>Case details</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Electronic Medical Record Company</p>
        </CardContent>
        <CardContent>
          <div className="flex items-center justify-between">
            <p>Outpatient Internal Medicine Department</p>
            <span>February 9, 2024</span>
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
            <p>$ Refundable</p>
          </div>
        </CardContent>
        <p className="mb-4">Reschedule time</p>
        <Separator className="my-4" />
        <CardContent>
          <p>Electronic Medical Record Company</p>
        </CardContent>
        <CardContent>
          <div className="flex items-center justify-between">
            <p>General Surgery Department</p>
            <span>February 10, 2024</span>
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
            <p>$ Refundable</p>
          </div>
        </CardContent>
        <p className="mb-4">Reschedule time</p>
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
