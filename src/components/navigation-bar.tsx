"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationBar() {
  return (
    <NavigationMenu className="max-w-full flex bg-white justify-between dark:bg-black pr-16 pl-4">
      <NavigationMenuList className="space-x-4 ">
        <NavigationMenuItem>
          <Image
            src="/logo-white.png"
            width={50}
            height={50}
            alt="logo of hobby buddy"
          />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/plans" legacyBehavior passHref>
            <NavigationMenuLink className="text-white">
              Subscription Plans
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="space-x-4">
        <NavigationMenuItem>
          <Link href="/signup" legacyBehavior passHref>
            <NavigationMenuLink className="text-white">
              Register
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/login" legacyBehavior passHref>
            <NavigationMenuLink className="text-white">
              Login
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
