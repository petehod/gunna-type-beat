import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";

import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants/socials";

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {NAV_LINKS.map((link) => {
          const isExternal = link.href.startsWith("https");
          const isActive = !isExternal && pathname.includes(link.href);

          return (
            <NavigationMenuItem key={link.text}>
              <Link
                href={link.href}
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
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
