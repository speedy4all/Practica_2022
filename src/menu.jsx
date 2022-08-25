import {
  DashboardOutlined,
  DropboxOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export default [
  {
    label: "Dashboard",
    path: "/",
    key: "/dashboard",
    icon: <DashboardOutlined />,
  },
  {
    label: "Users",
    path: "/users",
    key: "/users",
    icon: <DropboxOutlined />,
  },
  {
    label: "Clients",
    path: "/clients",
    key: "/clients",
    icon: <TeamOutlined />,
  },
  {
    label: "Suppliers",
    path: "/suppliers",
    key: "/suppliers",
    icon: <TeamOutlined />,
  },
];
