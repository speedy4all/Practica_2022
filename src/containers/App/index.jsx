import { useState } from "react";
import Content from "../../components/Content";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import routes from "../../routes";

const renderRoutes = (route) => {
  if (route === "/suppliers") {
    return { ...routes, "/suppliers": "No acces for you" };
  }

  return routes;
};

function App() {
  const [path, setPath] = useState("/dashboard");

  const onMenuClick = ({ item }) => {
    const _path = item.props?.path;
    console.log(_path);
    setPath(_path);
  };

  return (
    <Layout className="app-layout">
      <Header />
      <Layout>
        <Sidebar onMenuClick={onMenuClick} />
        <Content>{renderRoutes(path)[path]}</Content>
      </Layout>
    </Layout>
  );
}

export default App;
