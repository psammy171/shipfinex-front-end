"use client";

import Button from "@/components/ui/button";
import CheckBox from "@/components/ui/checkbox";
import Dropdown from "@/components/ui/dropdown";
import Input from "@/components/ui/input";
import Loader from "@/components/ui/loader";
import PopUp from "@/components/ui/popup";
import Switch from "@/components/ui/switch";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <p className="font-normal">Font normal</p>
      <p className="font-medium">Font medium</p>
      <p className="font-semibold">Font semibold</p>
      <p className="font-bold">Font bold</p>
      <p className="font-extrabold">Font extra bold</p>

      <p>Input field</p>
      <Input placeholder="Enter name" />

      <p>Loader</p>
      <Loader />

      <p>Button</p>
      <div className="flex gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary </Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <p>Check box</p>
      <CheckBox />

      <p>Switch</p>
      <Switch label="Disabled" />

      <Button onClick={() => setOpen(true)}>Show Pop up</Button>
      <PopUp open={open} close={() => setOpen(false)}>
        <p>Something here</p>
      </PopUp>

      <p>Dropdown</p>
      <Dropdown
        options={[
          { id: "1", label: "Anything" },
          { id: "2", label: "Something" },
        ]}
      />
    </div>
  );
}
