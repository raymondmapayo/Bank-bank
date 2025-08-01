import { lazy } from "react";

export const AdminRoutes = [
  {
    path: "Manage/Home", // relative, no /Admin prefix
    component: lazy(() => import("../Pages/Admin/HomeLayout")),
  },
];
