"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useGlobalAuthenticationStore } from "@/core/store/data";
import { useWallet } from "@/components/tw-blocks/wallet-kit/useWallet";

export function LogoutButton() {
  const router = useRouter();
  const clearAuth = useGlobalAuthenticationStore((state) => state.clearAuth);
  const { disconnectWallet } = useWallet();

  const handleLogout = async () => {
    await disconnectWallet();
    await signOut(auth);
    clearAuth();
    router.push("/login");
  };

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="flex items-center gap-2 w-full text-destructive hover:text-destructive cursor-pointer"
    >
      <LogOut className="w-4 h-4 shrink-0" />
      <span className="md:hidden lg:block">Log out</span>
    </Button>
  );
}
