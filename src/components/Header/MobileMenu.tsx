import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { NAV_LINKS, SOCIALS } from "@/constants/socials";

export default function MobileMenu() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open mobile menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav className="mt-6 space-y-4 px-3">
          {NAV_LINKS.map((link) => {
            const isExternal = link.href.startsWith("https");
            const isActive = !isExternal && pathname.includes(link.href);

            return (
              <Link
                key={link.text}
                href={link.href}
                className={cn(
                  "flex w-full items-center rounded-md py-2 px-2   text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none",
                  isActive && "bg-accent text-accent-foreground"
                )}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                {link.text}
              </Link>
            );
          })}
          <div className="flex mt-24 gap-4 px-2">
            {SOCIALS.map((social) => (
              <Link target="__blank" key={social.href} href={social.href}>
                {social.icon}
              </Link>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
