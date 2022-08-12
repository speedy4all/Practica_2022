import React from "react";
import { Table } from "antd";
import { columns, data } from "./columns";
import { useAppContext } from "../App/context";

export default function Products() {
  const { setPath } = useAppContext();

  const onRowClick = (row) => {
    const path = `/product/${row.key}`;
    console.log(path);
    setPath(path);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      onRow={(record) => ({
        onDoubleClick: () => onRowClick(record),
      })}
    />
  );
}
