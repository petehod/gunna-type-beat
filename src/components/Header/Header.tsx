import Link from "next/link";
import Logo from "../Dumb/Logo/Logo";

export default function Header() {
  const navLinks = [{ href: "albums", text: "Albums" }];
  return (
    <header className="flex w-full justify-center">
      <div className="min-h-[80px] flex items-center justify-between mx-auto w-full max-w-6xl">
        <div>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>

        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={link.text}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
