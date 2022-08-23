import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { columns } from "./columns";
import { useNavigate } from "react-router-dom";
import { fetchUsersApi } from "../../api";

export default function Products() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsersApi()
      .then((resp) => {
        setUsers(resp);
      })
      .catch((e) => {
        setUsers([]);
        console.log(JSON.stringify(e));
      });
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     fetchUsersApi().then((resp) => {
  //       setUsers(resp);
  //     });
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  const navigate = useNavigate();
  const onRowClick = (row) => {
    const path = `/products/${row.id}`;
    navigate(path);
  };

  return (
    <Table
      columns={columns}
      dataSource={users}
      onRow={(record) => ({
        onDoubleClick: () => onRowClick(record),
      })}
    />
  );
}
