import Clients from "./containers/Clients";
import Dashboard from "./containers/Dashboard";
import Products from "./containers/Products";

export default {
  "/dashboard": <Dashboard />,
  "/products": <Products />,
  "/clients": <Clients />,
  "/suppliers": "Suppliers",
};
