"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { sidebar, SidebarItems } from "@/config/sidebar";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MainSidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 h-full w-56 border-r", className)}>
      <div className="py-4">
        {sidebar.map((item) => {
          return <MainSidebarItem key={item.path} item={item} />;
        })}

        {/* variant="secondary" */}
      </div>
    </div>
  );
}

export const MainSidebarItem = ({ item }: { item: SidebarItems }) => {
  if (item?.children && item?.children?.length > 0) {
    return (
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          {item.name}
        </h2>

        {item.children?.map((child, i) => (
          <MainSidebarItemButton
            key={`${child.name}-${i}`}
            name={child.name}
            path={child.path}
          />
        ))}
      </div>
    );
  } else
    return (
      <div className="px-3 py-2">
        <MainSidebarItemButton name={item.name} path={item.path} />
      </div>
    );
};

export const MainSidebarItemButton = ({
  name,
  path,
}: {
  name: string;
  logo?: string;
  path: string;
}) => {
  const pathname: string = usePathname();

  return (
    <div className="space-y-1 mt-2">
      <Link href={path}>
        <Button
          variant={pathname === path ? "secondary" : "ghost"}
          className="w-full justify-start"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>
          {name}
        </Button>
      </Link>
    </div>
  );
};
