"use client";
import React, { ReactNode, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink, SideUserButton } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Plus, ArrowRightFromLine, ArrowLeftFromLine } from "lucide-react";
import { useUser, SignedIn, UserButton  } from "@clerk/nextjs";

interface SideBarProps {
  children: ReactNode
}
export function GnovistarSidebar({children}:SideBarProps) {
  const { isSignedIn, isLoaded, user } = useUser()
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-primary h-5 w-5 flex-shrink-0" />
      ),
    },
    // {
    //   label: "Profile",
    //   href: "#",
    //   icon: (
    //     <IconUserBolt className="text-primary h-5 w-5 flex-shrink-0" />
    //   ),
    // },
    // {
    //   label: "Settings",
    //   href: "#",
    //   icon: (
    //     <IconSettings className="text-primary h-5 w-5 flex-shrink-0" />
    //   ),
    // },
    // {
    //   label: "Logout",
    //   href: "#",
    //   icon: (
    //     <IconArrowLeft className="text-primary h-5 w-5 flex-shrink-0" />
    //   ),
    // },
  ];
  const [open, setOpen] = useState(false);
  const [locked, setLocked] = useState(false)
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row w-full flex-1 w-full mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody locked={locked} setLocked={setLocked} className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? (
              <div className="flex justify-between">
                <Logo />
                <Button title={locked ? "Unlock Sidebar" : "Lock Sidebar"} variant="outline" onClick={() => setLocked(!locked)}>{locked ? <ArrowLeftFromLine/> : <ArrowRightFromLine />}</Button>
              </div>
            )
              : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {open && <Link href="/dashboard/new-book">
                <Button className="w-full mb-4">
                  <Plus className="mr-2 h-4 w-4" /> New Book
                </Button>
              </Link>}
              {links.map((link, idx) => (
                <SidebarLink className="text-primary" key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SideUserButton user={
              <SignedIn>
                <UserButton/>
              </SignedIn>
            } name={user?.fullName}/>
          </div>
        </SidebarBody>
      </Sidebar>
      {children}
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre w-min"
      >
        Gnovistar
      </motion.div>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-primary rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

