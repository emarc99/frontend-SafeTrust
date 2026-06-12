// frontend-SafeTrust/src/app/dashboard/page.tsx

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

const DashboardPage = () => {
  const [address, setAddress] = useState<string>("");

  // CHANGED: local mock connect/disconnect — no wallet SDK needed
  const handleConnect = () => {
    setAddress("GABC...MOCKADDRESS123");
  };

  const handleDisconnect = () => {
    setAddress("");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Welcome to SafeTrust — your escrow management hub.
        </p>
      </div>

      <div className="rounded-md border p-4 bg-muted text-foreground">
        {address ? (
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold">Connected Wallet:</p>
            <p className="font-mono text-sm break-all">{address}</p>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDisconnect}
              className="w-fit"
            >
              Disconnect
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">No wallet connected</p>
            <Button onClick={handleConnect} className="w-fit">
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          </div>
        )}
      </div>

      <div className="rounded-md border p-4 text-sm text-muted-foreground">
        Quick Actions — coming soon
      </div>
      <div className="rounded-md border p-4 text-sm text-muted-foreground">
        Escrow Overview — coming soon
      </div>
      <div className="rounded-md border p-4 text-sm text-muted-foreground">
        Recent Escrow Transactions — coming soon
      </div>
    </div>
  );
};

export default DashboardPage;