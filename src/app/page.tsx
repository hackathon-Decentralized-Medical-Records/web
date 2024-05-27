import Image from "next/image";
import { format } from "date-fns";

import { Badge, badgeVariants } from "@/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Ambulance } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const imgUrl = "https://imgapi.cn/bing.php?rand=true";

export default function Home() {
  return (
    <>
      {/* background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%); */}
      <div className="form-[#fccb90]  h-[100vh] text-center">
        <div className="absolute left-0 right-0 top-[50%] translate-y-[-50%]">
          <div className="mb-4 text-lg font-semibold text-primary">Secure & Unified Healthcare Ecosystem</div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">HealthChain Nexus</h1>
          <p className="mb-10 mt-12 text-xl text-muted-foreground">
            Fostering a well-connected, efficient, and secure healthcare environment
          </p>
          <Button size="sm">explore</Button>
        </div>
      </div>
      <div className="px-36 py-16">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <Ambulance />
            <span className="ml-3 text-xl font-bold">医院</span>
          </div>
          <Link href="/" className={badgeVariants()}>
            查看更多
          </Link>
        </div>
        <Image className="my-8 object-cover" src={imgUrl} alt="" width="1200" height="900"></Image>
        <div className="grid grid-cols-2 gap-6">
          {[1, 2].map(() => (
            <Card className="flex">
              <Image className="my-8 object-cover" src={imgUrl} alt="" width="400" height="300"></Image>
              <div>
                <CardHeader>
                  <CardTitle>医院名称</CardTitle>
                  <CardDescription>描述</CardDescription>
                </CardHeader>
                <CardFooter>
                  <span>地址</span>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="px-36 py-16">
        <h1 className="text-center text-5xl font-bold">新闻</h1>
        <div className="my-10 grid grid-cols-3 gap-4">
          {[1, 2, 3].map(() => (
            <Card className="overflow-hidden">
              <Image className="object-cover" src={imgUrl} alt="" width="400" height="300" />
              <CardHeader>
                <CardDescription>Card Description</CardDescription>
                <CardTitle>Card Title</CardTitle>
              </CardHeader>
              <CardFooter className="justify-between">
                <span>{format(Date.now(), "yyyy-MM-dd hh:mm:ss")}</span>
                <Badge variant="secondary">Badge</Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
