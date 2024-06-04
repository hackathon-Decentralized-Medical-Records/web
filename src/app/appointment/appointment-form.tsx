"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, formatISO } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registration } from "./actions";
import { Checkbox } from "@/components/ui/checkbox";

const items = [
  {
    id: "2022-12-19",
    label: "2022-12-19",
  },
  {
    id: "2021-02-26",
    label: "2021-02-26",
  },
  {
    id: "2020-08-09",
    label: "2020-08-09",
  },
] as const;

const formSchema = z.object({
  date: z.date(),
  record: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export default function AppointmentForm({ ID, name, profession, department, workTime, price }: Record<string, any>) {
  const user = useUserStore();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      record: ["2020-08-09"],
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    const res = await registration({
      registerDate: formatISO(data.date),
      medicId: ID,
      patientId: user.ID,
      status: 0,
    });
    setOpen(false);
    toast({
      title: res.message,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">appointment</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Appointment Details</DialogTitle>
          <DialogDescription>Please confirm the appointment</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormItem>
              <FormLabel>Medic: {name}</FormLabel>
            </FormItem>
            <FormItem>
              <FormLabel>Title: {profession}</FormLabel>
            </FormItem>
            <FormItem>
              <FormLabel>Department: {department.name}</FormLabel>
            </FormItem>
            <FormItem>
              <FormLabel>Working hours: {workTime}</FormLabel>
            </FormItem>

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Appointment date: </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? format(field.value, "yyyy-MM-dd") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="record"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Medical Record: </FormLabel>
                  </div>
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="record"
                      render={({ field }) => {
                        return (
                          <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(field.value?.filter((value) => value !== item.id));
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item.label}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
                // <FormItem className="flex items-center">
                //   <FormLabel>Medical Record: </FormLabel>
                //   <Select onValueChange={field.onChange} defaultValue={field.value}>
                //     <FormControl>
                //       <SelectTrigger className="w-[180px]">
                //         <SelectValue placeholder="Select a verified email to display" />
                //       </SelectTrigger>
                //     </FormControl>
                //     <SelectContent>
                //       <SelectItem value="2020-12-01">2020-12-01</SelectItem>
                //       <SelectItem value="2020-02-01">2020-08-01</SelectItem>
                //       <SelectItem value="2020-02-10">2020-02-10</SelectItem>
                //     </SelectContent>
                //   </Select>
                // </FormItem>
              )}
            />

            <FormItem>
              <FormLabel>Price: ${price}</FormLabel>
            </FormItem>
            <Button type="submit">Appointment</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
