import Link from "next/link";
import Logo from "../Dumb/Logo/Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex w-full justify-center">
      <div className="min-h-[80px] flex items-center justify-between mx-auto w-full max-w-6xl">
        <div>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>

        <Nav />
      </div>
    </header>
  );
}
