import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Payment() {
  return (
    <div className="flex">
      <Card className="m-auto w-[20rem]">
        <CardHeader>
          <CardTitle>价格详情</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <span>基本价格</span>
            <span>$150</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>Included</span>
          </div>
          <div className="flex justify-between">
            <span>Save</span>
            <span>-$1.5</span>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-1 justify-between">
            <span>Total</span>
            <span>$148.5</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
