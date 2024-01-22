import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React from "react";

export function SwitchDemo() {
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="airplane-mode"
        className={`h-4 w-4 bg-white ${
          checked ? "bg-green-400" : "bg-gray-200"
        }`}
        onClick={() => setChecked(!checked)}
      />
      <Label htmlFor="airplane-mode">Do you need accommodation?</Label>
    </div>
  );
}
