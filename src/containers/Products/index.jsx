import React from "react";
import { Table } from "antd";
import { columns, data } from "./columns";

export default function Products() {
  return <Table columns={columns} dataSource={data} />;
}
