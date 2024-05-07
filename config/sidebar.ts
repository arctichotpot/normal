export type SidebarItems = {
  path: string;
  name: string;
  logo?: string;
  children?: SidebarItems[];
};

export const sidebar: SidebarItems[] = [
  {
    path: "/home",
    name: "Home",
    logo: "",
  },
  {
    path: "/form",
    name: "Form",
    children: [
      {
        path: "/login",
        name: "Login",
        logo: "",
      },
      {
        path: "/register",
        name: "Register",
        logo: "",
      },
    ],
  },
  {
    path: "/",
    name: "Test",
    children: [],
  },
];
