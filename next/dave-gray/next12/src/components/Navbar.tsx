import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 border-b bg-background px-4 md:px-6">
      <div className="container h-16 flex items-center gap-4">
        <nav className="flex-1">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Image
              src={"/images/favicon.ico"}
              alt="logo"
              width={30}
              height={30}
              priority
            />
          </Link>
        </nav>

        <ModeToggle />
      </div>
    </header>
  );
};
export default Navbar;
