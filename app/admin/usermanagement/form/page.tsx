import {
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  MailIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="grid grid-cols-1">
      <Card className="p-6 grid grid-cols-1 gap-4">
        {/* Header Section */}
        <div className="grid grid-cols-1">
          <h1 className="text-2xl font-bold mb-1">Form</h1>
          <p className="text-muted-foreground text-sm">
            Manage your Form.
          </p>
        </div>

        {/* Form Grid Section (Mengubah max-w-lg menjadi w-full agar full) */}
        <div className="grid w-full grid-cols-1 gap-6 mt-2">
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon className="w-4 h-4" />
            </InputGroupAddon>
          </InputGroup>

          <InputGroup>
            <InputGroupInput type="email" placeholder="Enter your email" />
            <InputGroupAddon>
              <MailIcon className="w-4 h-4" />
            </InputGroupAddon>
          </InputGroup>

          <InputGroup>
            <InputGroupInput placeholder="Card number" />
            <InputGroupAddon>
              <CreditCardIcon className="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <CheckIcon className="w-4 h-4" />
            </InputGroupAddon>
          </InputGroup>

          <InputGroup>
            <InputGroupInput placeholder="Card number" />
            <InputGroupAddon align="inline-end" className="gap-2">
              <StarIcon className="w-4 h-4" />
              <InfoIcon className="w-4 h-4" />
            </InputGroupAddon>
          </InputGroup>

          <div>
            <Button>Save</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}