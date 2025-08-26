"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/albums", text: "Albums" },
    {
      href: "https://shop.guitarloopgod.com/products/guitar-loop-god?utm_source=gunnatypebeat.com",
      text: "Guitar Loop God",
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((link) => {
          const isExternal = link.href.startsWith("https");
          const isActive = !isExternal && pathname.includes(link.href);

          return (
            <NavigationMenuItem key={link.text}>
              <Link
                href={link.href}
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2  font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  isActive && "bg-accent text-accent-foreground"
                )}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                {link.text}
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
