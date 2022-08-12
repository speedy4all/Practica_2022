import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import menu from "../../menu";
import { useAppContext } from "../../containers/App/context";

export default function Sidebar() {

  const { setPath } = useAppContext();

  const onMenuClick = ({ item }) => {
    const _path = item.props?.path;
    console.log(_path);
    setPath(_path);
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
