import React from "react";
import { Row, Col, Layout } from "antd";

export default function Dashboard() {
  return (
    <Layout style={{ height: "100%", padding: 16 }}>
      <Row gutter={[16, 16]} style={{ background: "grey", height: '100%' }}>
        <Col span={6} style={{ background: "blue" }} />
        <Col span={6} style={{ background: "blue" }} />
        <Col span={6} style={{ background: "blue" }} />
        <Col span={6} style={{ background: "blue" }} />

        <Col span={6} style={{ background: "blue" }} />
        <Col span={6} style={{ background: "blue" }} />
        <Col span={6} style={{ background: "blue" }} />
        <Col span={6} style={{ background: "blue" }} />
      </Row>
    </Layout>
  );
}
