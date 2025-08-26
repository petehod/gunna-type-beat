import Link from "next/link";
import Logo from "../Dumb/Logo/Logo";
import { SOCIALS, NAV_LINKS } from "../../constants/socials";
import { GUITAR_LOOP_GOD_SHOP } from "@/constants/links.constants";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Subheading Column */}
          <div className="space-y-4 flex flex-col items-start">
            <Link href={"/"}>
              <Logo imageStyles="object-contain w-auto" />
            </Link>

            <p className="text-sm text-muted-foreground max-w-xs">
              Write Placement-Ready Guitar Melodies{" "}
            </p>

            <p className="text-sm text-muted-foreground max-w-xs">
              A{" "}
              <Link
                href={`${GUITAR_LOOP_GOD_SHOP}?utm_source=gunnatypebeat`}
                className="underline"
              >
                Guitar Loop God{" "}
              </Link>
              resource
            </p>
          </div>

          {/* Social Links Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <div className="flex space-x-4">
              {SOCIALS.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Additional Info Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>For collaborations and inquiries:</p>
              <Link href={"mailto:yayadean38@gmail.com"}>
                yayadean38@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Meloroids LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
