import React from "react";
import { Layout, Typography } from "antd";

export default function Header() {
  return (
    <Layout.Header className="app-header">
      <Typography.Text style={{ color: "white" }}>
        Practica ReactJS Pentalog 2022
      </Typography.Text>
    </Layout.Header>
  );
}
