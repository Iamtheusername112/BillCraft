import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BadgePlus } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex flex-col justify-center h-full text-center gap-5 max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <p>
          <Button className="inline-flex gap-2" variant="ghost">
            <Link className="flex items-center gap-2" href="/invoices/new">
              <BadgePlus className="h-4 w-4 " />
              <span>Create Invoice</span>
            </Link>
          </Button>
        </p>
      </div>
      <Table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="ltr:text-left rtl:text-right">
          <TableRow>
            <TableHead className="w-[100px] p-4">Date</TableHead>
            <TableHead className="p-4">Customer</TableHead>
            <TableHead className="p-4">Email</TableHead>
            <TableHead className="p-4 text-center">Status</TableHead>
            <TableHead className="p-4 text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="p-4 font-medium text-left">
              <span className="font-semibold">10/31/2024</span>
            </TableCell>
            <TableCell className="p-4 text-left">
              <span className="font-semibold">Francis</span>
            </TableCell>
            <TableCell className="p-4 text-left">
              <span>francis@gmail.com</span>
            </TableCell>
            <TableCell className="p-4 text-center">
              <Badge className="rounded-full">Badge</Badge>
            </TableCell>
            <TableCell className="p-4 text-right">
              <span className="font-semibold">$250.00</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
