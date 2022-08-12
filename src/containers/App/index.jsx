import { useContext } from "react";
import Content from "../../components/Content";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Layout } from "antd";
import routes from "../../routes";
import { useAppContext } from "./context";

const renderRoutes = (path) => {
  if (path === "/suppliers") {
    return { ...routes, "/suppliers": "No acces for you" };
  }

  return routes(path);
};

function App() {

  const { path } = useAppContext();

  return (
    <Layout className="app-layout">
      <Header />
      <Layout>
        <Sidebar />
        <Content>{renderRoutes(path)}</Content>
      </Layout>
    </Layout>
  );
}

export default App;
