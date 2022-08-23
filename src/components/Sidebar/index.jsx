import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import menu from "../../menu";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();
  const onMenuClick = ({ item }) => {
    const _path = item.props?.path;
    console.log(_path);
    navigate(_path);
  };

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
