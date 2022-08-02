import { useEffect, useState } from "react";
import Table from "../Table";
import "./style.css";

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ name: Math.random(), age: 25, email: "bogdan@gmail.com", location: {
        address: 'Valea Cetatii', city: 'Brasov'
      } }]);
    }, 2000);
  });
};

const descriptor = [
  {
    label: 'Name',
    accessor: 'name'
  }, 
  {
    label: 'Age',
    accessor: 'age'
  }, 
  {
    label: 'Email',
    accessor: 'email'
  }, 
  {
    label: 'Location',
    render: (item) => {
      return `${item.location?.city}, ${item.location?.address}`
    }
  }
];

function App() {
  const [data, setData] = useState([]);
  const  [count, setCount] = useState(0);

  useEffect(() => {
    fetchData().then((response) => {
      setData(response);
    }).catch((error) => {});
  }, []);

  return (
    <>
      <div className="app-container">Hello from App count: {count}</div>
      <Table data={data} descriptor={descriptor} />
      <button onClick={() => setCount(old => old + 1)}>Increase count</button>
    </>
  );
}

export default App;
