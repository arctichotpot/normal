import Link from "next/link";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { UserNav } from "./user-nav";
import { ThemeSheet } from "../theme-sheet";
import { ModeToggle } from "../mode-toggle";
import { LangToggle } from "../lang-toggle";


export const MainNav = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <nav className={cn("flex items-center space-x-4 lg:space-x-6 mx-6 ")}>
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Overview
          </Link>
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Customers
          </Link>
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Products
          </Link>
          <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Settings
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <div>
            <Input
              type="search"
              placeholder="Search..."
              className="md:w-[100px] lg:w-[300px]"
            />
          </div>
          <ThemeSheet  />
          <ModeToggle />
          <LangToggle />
          <UserNav />
        </div>
      </div>
    </div>
  );
};
