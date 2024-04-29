import { ReactNode } from "react";
import { MainSidebar } from "@/components/layout/main-sidebar";
import { MainNav } from "@/components/layout/main-nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainNav></MainNav>
      <div className="flex">
        <MainSidebar></MainSidebar>
        <main className="flex-grow p-6">{children}</main>
      </div>
    </>
  );
}
