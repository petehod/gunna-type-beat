"use client";

import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function Nav() {
  return (
    <>
      <DesktopMenu />

      <MobileMenu />
    </>
  );
}
