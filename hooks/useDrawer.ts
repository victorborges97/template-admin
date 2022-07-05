export type Menu = {
  icon_name: string;
  name: string;
  rota: string;
};

export const useDrawer = (options: any) => {
  const MENU: Menu[] = [
    {
      icon_name: "",
      name: "Dashboard",
      rota: "/admin/dashboard",
    },
    {
      icon_name: "",
      name: "Produtos",
      rota: "/admin/produtos",
    },
    {
      icon_name: "",
      name: "Departamentos",
      rota: "/admin/departamentos",
    },
  ];

  return {
    MENU,
  };
};
