
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";

async function getData() {
  const res = await fetch(
    "http://localhost:6789/api/ApiSearchAdvisory/ListAdvisory2?abrokername=&investingtypecde=&acost=HN&ayearofcertmin=-1&ayearofcertmax=-1&listbrkRand"
  );
  return res.json();
}
async function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  const response = await fetch('/api/submit', {
    method: 'POST',
    body: formData,
  })

  // Handle response if necessary
  const data = await response.json()
  // ...
}
const Dashboard = async () => {

  
  // fetch('https://ezadvisorselect.fpts.com.vn/SearchAdvisorys/getListCVPhanTich', {
  const data = await getData();

  console.log(data.Data.brokerProfiles);
  return (
    <>
      <div className="bg-[#f7f7f7] flex justify-center">
        <div className="w-[1200px]">
          <p className="text-xl text-[#024d93]">Chuyên viên tư vấn của tôi</p>
          <Table>
            <TableCaption className="text-xl">
              {" "}
              Lịch sử đăng ký Chuyên viên tư vấn
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex justify-center">
        <Tabs defaultValue="account" className="w-[1200px]">
          <p className="text-xl text-[#024d93] py-5">
            Tìm kiếm chuyên viên tư vấn
          </p>
          <TabsList className="w-[1200px]">
            <TabsTrigger value="account" className="w-[600px]">
              CHUYÊN VIÊN TƯ VẤN ĐẦU TƯ
            </TabsTrigger>
            <TabsTrigger value="password" className="w-[600px]">
              CHUYÊN VIÊN PHÂN TÍCH
            </TabsTrigger>
          </TabsList>
          <div className="bg-[#ccc] mt-5">
            <form  className="grid grid-cols-5 gap-1 p-8">
              <Input placeholder="Tên chuyên viên"></Input>

              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder="Trường phái đầu tư" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Đầu tư giá trị</SelectItem>
                  <SelectItem value="2">Đầu tư tăng trưởng</SelectItem>
                  <SelectItem value="3">Đầu tư theo đà tăng trưởng</SelectItem>
                  <SelectItem value="4">
                    Đầu tư theo phân tích kỹ thuật
                  </SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="">
                  <SelectValue  placeholder="Năm kinh nghiệm" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">1 đến 2 năm</SelectItem>
                  <SelectItem value="1">3 đến 5 năm</SelectItem>
                  <SelectItem value="2">6 đến 10 năm</SelectItem>
                  <SelectItem value="3">Trên 10 năm</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder="Chi nhánh" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="HN">Hà Nội</SelectItem>
                  <SelectItem value="HCM">Hồ Chí Minh</SelectItem>
                  <SelectItem value="DN">Đà Nẵng</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit" className="bg-[#de6f20]">Tìm kiếm</Button>
            </form>
          </div>
          <TabsContent value="account" className="w-[1200px]">
            <p className="text-lg flex justify-center text-[#024d93] py-3">
              Danh sách chuyên viên đề xuất{" "}
              <span className="text-[#de6f20] font-bold pl-1">
                ({data.Data.brokerProfiles.length})
              </span>
            </p>
            <div className="grid gap-3 grid-cols-5 grid-rows-4">
              {data.Data.brokerProfiles.map((broker: any) => (
                <Card key={broker.APROFILEID} className="bg-[#f7f7f7] my-1">
                  <CardHeader>
                    <CardTitle className="flex justify-center">
                      {" "}
                      <Avatar className="h-[100px] w-[100px]">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </CardTitle>
                    <CardTitle className="flex justify-center text-base">
                      {broker.ABROKERNAME}
                    </CardTitle>
                    <CardDescription>Chuyên viên Tư vấn đầu tư</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Trường phái đầu tư:{" "}
                      <span className="c-color--text">
                        {broker.investingtypename_VN}
                      </span>
                    </p>
                    <p>
                      Chi Nhánh:{" "}
                      <span className="c-color--text">Đang cập nhật</span>
                    </p>
                    <p>
                      Năm kinh nghiệm:{" "}
                      <span className="c-color--text">
                        {broker.AYEAROFCERT}
                      </span>
                    </p>
                    <p>
                      Điểm đánh giá CVTV:{" "}
                      <span className="c-color--text">{broker.ARATEPOINT}</span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Dashboard;

// interface BrokerProfile {
//   APROFILEID: string;
//   ABROKERCDE: string;
//   ABROKERNAME: string;
//   ATITLE?: string | null;
//   AYEAROFBIRTH?: string | null;
//   AYEAROFCERT: string;
//   AINVESTINGTYPE?: string | null;
//   ASKYPE?: string | null;
//   APROFILEIMAGE?: string | null;
//   ADESC?: string | null;
//   ACREATEBY?: string | null;
//   ACREATEDTE?: string | null;
//   AMODIFIEDBY?: string | null;
//   AMODIFIEDDTE?: string | null;
//   aemail?: string | null;
//   aphone?: string | null;
//   ACOSTCENTER?: string | null;
//   ARATEPOINT: string;
//   investingtypename?: string | null;
//   investingtypenameen?: string | null;
//   ATITLEREPORT?: string | null;
//   AREPORTID?: string | null;
//   RatingNumber?: string | null;
//   ARATECMT?: string | null;
//   ACREATEDATE?: string | null;
//   ARATEPOINTNumber?: string | null;
//   ARATEPOINTBC?: string | null;
//   ATITLELINK?: string | null;
//   aaddress?: string | null;
//   strAddress?: string | null;
//   ATITLE_VN?: string | null;
//   ATITLE_EN?: string | null;
//   TYPECDE?: string | null;
//   atitle_CD: string;
//   ImageRedisLib?: string | null;
//   aratecmt?: string | null;
//   acreatedate?: string | null;
//   investingtypename_VN?: string | null;
//   investingtypename_EN?: string | null;
//   acustaccount?: string | null;
//   aratepoint_number?: string | null;
//   p_count?: string | null;
//   p_pageIndex?: string | null;
//   p_pageSize?: string | null;
//   astockcode?: string | null;
//   asector?: string | null;
//   asectoren?: string | null;
//   ATYPEACCOUNT?: string | null;
//   INVESTINGTYPECDE: string;
//   ASECTORFPA_EN?: string | null;
//   ASECTORFPA?: string | null;
// }

// interface AdvisoryListProps {
//   brokerProfiles: BrokerProfile[];
// }
