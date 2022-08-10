import React from "react";
import { Layout, Menu } from "antd";
import menu from "../../menu";

export default function Sidebar({ onMenuClick }) {
  return (
    <Layout.Sider className="app-sidebar">
      <Menu
        defaultSelectedKeys={['/dashboard']}
        theme="dark"
        items={menu}
        onClick={onMenuClick}
      />
    </Layout.Sider>
  );
}
