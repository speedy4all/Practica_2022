import {
  DashboardOutlined,
  DropboxOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export default [
  {
    label: "Dashboard",
    path: "/dashboard",
    key: "/dashboard",
    icon: <DashboardOutlined />,
  },
  {
    label: "Products",
    path: "/products",
    key: "/products",
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
