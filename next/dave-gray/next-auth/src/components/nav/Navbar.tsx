import Link from "next/link";
import { ThemeToggle } from "../theme/ThemeToggle";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Navbar = async () => {
  const session = await getServerSession(options);

  return (
    <header className="sticky top-0 border-b bg-background px-4 md:px-6 z-10">
      <div className="container h-16 flex items-center gap-4">
        <nav className="flex-1 text-lg flex gap-6">
          <Link
            href="/"
            replace
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/server"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Server
          </Link>
          <Link
            href="/client"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Client
          </Link>
          <Link
            href="/extra"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Extra
          </Link>
        </nav>

        <div className="flex items-center text-lg gap-6">
          {!session ? (
            <Link
              href="/api/auth/signin"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Signin
            </Link>
          ) : (
            <Link
              href="/api/auth/signout"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Signout
            </Link>
          )}

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
