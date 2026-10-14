'use client';

import * as React from "react";
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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AdminTablePage() {
  const router = useRouter();
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);

  return (
    <div className="grid grid-cols-1 gap-6">
      {/* Baris Atas: Tombol Dropdown di sebelah kanan atas */}
      <div className="grid grid-cols-1 justify-items-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuGroup>
              {/* Opsi Form diubah menjadi DropdownMenuItem agar langsung merespons klik untuk pindah halaman */}
              <DropdownMenuItem onClick={() => router.push("/admin/usermanagement/form")}>
                Form
              </DropdownMenuItem>

              <DropdownMenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
              >
                Activity Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                Panel
              </DropdownMenuCheckboxItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Card membungkus judul halaman dan tabel */}
      <Card className="p-6 grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1">
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