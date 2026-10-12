'use client';

import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LayerArrowDown } from "lucide-react";

export default function AdminTablePage() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      {/* Tombol Add User di luar card, diletakkan di sebelah kanan atas */}
      <div className="flex justify-end">
        <Button onClick={() => router.push("/admin/usermanagement/form")}>
          <LayerArrowDown className="w-4 h-4 mr-2" /> form
        </Button>
      </div>

      {/* Card membungkus judul halaman dan tabel */}
      <Card className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">Artikel</h1>
          <p className="text-muted-foreground text-sm">Welcome to the Artikel!</p>
        </div>

        <Table>
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
      </Card>
    </div>
  );
}