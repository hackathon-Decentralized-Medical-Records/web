"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useUserStore } from "@/store/user";
import { DollarSign } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { getCaseByPatientId } from "./actions";
import Link from "next/link";

const list = [
  { title: "Common cold", block: "#56382", date: "2022-12-19" },
  { title: "Fever and headache", block: "#34882", date: "2021-02-26" },
  { title: "Viral influenza", block: "#36482", date: "2020-08-09" },
];

export function CardList() {
  const user = useUserStore();

  useEffect(() => {
    const getList = async () => {
      const res = await getCaseByPatientId(`${user.ID}`);
      console.log(res);
    };
    getList();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {list.map((item, index) => (
        <Card key={index} className="">
          <CardHeader>
            <Image src="/nft.png" alt="cover" width="325" height="282" />
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">{item.title}</p>
            <p className="text-2xl font-semibold">{item.block}</p>
          </CardContent>
          <CardFooter className="justify-between">
            {/* <div>
              <small className="text-sm font-medium text-muted-foreground">Current bid</small>
              <p className="flex items-center">
                <DollarSign size="16" />
                <span>10.01</span>
              </p>
            </div> */}
            <Button asChild>
              <Link href={`/historical-case/detail?block=${item.block}`}>View details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
