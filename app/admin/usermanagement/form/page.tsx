"use client";

import { useState } from "react";
import {
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  MailIcon,
  SearchIcon,
  StarIcon,
  BuildingIcon,
} from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Card } from "@radix-ui/themes/dist/cjs/components/index.js";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  // State untuk menampung data form
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    cardNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Company profile updated successfully!");
  };

  return (
    <Card className="p-6 max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-2">Welcome to From</h1>
      <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet..</p>

      {/* Dibungkus dengan tag form */}
      <form onSubmit={handleSubmit} className="grid w-full gap-6">
        
        {/* Input Nama Perusahaan */}
        <InputGroup>
          <InputGroupInput
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />
          <InputGroupAddon>
            <BuildingIcon className="w-4 h-4 text-gray-400" />
          </InputGroupAddon>
        </InputGroup>

        {/* Input Email */}
        <InputGroup>
          <InputGroupInput
            type="email"
            name="email"
            placeholder="Enter your company email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputGroupAddon>
            <MailIcon className="w-4 h-4 text-gray-400" />
          </InputGroupAddon>
        </InputGroup>

        {/* Input Card Number dengan Validasi Icon di ujung */}
        <InputGroup>
          <InputGroupInput
            name="cardNumber"
            placeholder="Card number"
            value={formData.cardNumber}
            onChange={handleChange}
          />
          <InputGroupAddon>
            <CreditCardIcon className="w-4 h-4 text-gray-400" />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <CheckIcon className="w-4 h-4 text-green-500" />
          </InputGroupAddon>
        </InputGroup>

        {/* Info Tambahan / Catatan */}
        <InputGroup>
          <InputGroupInput placeholder="Additional Information (Optional)" disabled />
          <InputGroupAddon align="inline-end">
            <StarIcon className="w-4 h-4 text-yellow-500" />
            <InfoIcon className="w-4 h-4 text-blue-500 ml-1" />
          </InputGroupAddon>
        </InputGroup>

        {/* Tombol Submit */}
        <Button type="submit" className="w-full mt-2">
          Save Changes
        </Button>
      </form>
    </Card>
  );
}