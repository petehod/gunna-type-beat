import { Instagram, Youtube } from "lucide-react";

export const SOCIALS = [
  {
    icon: <Instagram />,
    href: "https://www.instagram.com/_yayadean",
  },
  {
    icon: <Youtube />,
    href: "https://www.youtube.com/@yayadean38",
  },
];

export const NAV_LINKS = [
  { href: "/albums", text: "Albums" },
  {
    href: "https://shop.guitarloopgod.com/products/guitar-loop-god?utm_source=gunnatypebeat.com",
    text: "Guitar Loop God",
  },
];
export type NavLink = {
  href: string;
  text: string;
};
