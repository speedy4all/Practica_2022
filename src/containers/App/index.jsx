import Content from "../../components/Content";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Dashboard from "../../containers/Dashboard";
import Users from "../Users";
import User from "../User";
import Clients from "../../containers/Clients";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <Layout className="app-layout">
      <Header />
      <Layout>
        <Sidebar />
        <Content>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
