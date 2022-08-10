import React from "react";
import { Layout } from "antd";

export default function Content({ children }) {
  return <Layout.Content className="main-content">{children}</Layout.Content>;
}
