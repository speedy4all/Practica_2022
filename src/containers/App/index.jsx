import { useEffect, useState } from "react";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Table from "../../components/Table";

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          name: Math.random(),
          age: 25,
          email: "bogdan@gmail.com",
          location: {
            address: "Valea Cetatii",
            city: "Brasov",
          },
        },
      ]);
    }, 2000);
  });
};

const descriptor = [
  {
    label: "Name",
    accessor: "name",
  },
  {
    label: "Age",
    accessor: "age",
  },
  {
    label: "Email",
    accessor: "email",
  },
  {
    label: "Location",
    render: (item) => {
      return `${item.location?.city}, ${item.location?.address}`;
    },
  },
];

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <>
      <Header>
        <h2>Practica 2022</h2>
      </Header>
      <Footer>
        @Copyright P5
      </Footer>
      <Sidebar>
        <div>Menu</div>
      </Sidebar>
      <Content>
        <Table descriptor={descriptor} data={data} />
      </Content>
    </>
  );
}

export default App;
