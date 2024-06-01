"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useUserStore } from "@/store/user";
import { DollarSign } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { getCaseByPatientId } from "./actions";

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
      {[1, 2, 3].map((item) => (
        <Card key={item} className="">
          <CardHeader>
            <Image src="/nft.png" alt="cover" width="325" height="282" />
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">Neon District Statistics One item</p>
            <p className="text-2xl font-semibold">#56382</p>
          </CardContent>
          <CardFooter className="justify-between">
            <div>
              <small className="text-sm font-medium text-muted-foreground">Current bid</small>
              <p className="flex items-center">
                <DollarSign size="16" />
                <span>10.01</span>
              </p>
            </div>
            <Button>Place bid</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
