import Clients from "./containers/Clients";
import Dashboard from "./containers/Dashboard";
import Product from "./containers/Product";
import Products from "./containers/Products";

export default (path) => {
  let id = '';
  if (path.includes("product")) {
    const chunks = path.split('/');
    id = chunks[2];
  }

  switch (path) {
    case "/dashboard":
      return <Dashboard />;
    case "/products":
      return <Products />;
    case `/product/${id}`:
      return <Product productId={id} />;
    case "/clients":
      return <Clients />;
    default: return '404 Not Found';  
  }
};
