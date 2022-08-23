import Content from "../../components/Content";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Dashboard from "../../containers/Dashboard";
import Products from "../../containers/Products";
import Product from "../../containers/Product";
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
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
