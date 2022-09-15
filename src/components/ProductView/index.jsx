import { Button, Form, Input } from "antd";
import React, { useCallback, useState } from "react";

export default function ProductView({ product, onCancel, onSave }) {
  const [formValid, setFormValid] = useState(true);

  const validateForm = useCallback((_, values) => {
    let isValid = true;
    if (!values.name) {
      isValid = false;
    }
    if (values?.age > 70) {
      isValid = false;
    }

    setFormValid(isValid);
  }, []);

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={product}
      onFinish={(values) => {
        onSave?.(values);
      }}
      onReset={() => setFormValid(true)}
      onValuesChange={validateForm}
    >
      <Form.Item
        label="Name"
        htmlFor="name"
        name="name"
        rules={[{ required: true, message: "Name is mandatory" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Age"
        name="age"
        htmlFor="age"
        rules={[{ required: true, message: "Age required" }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item label="Address" name="address" htmlFor="address">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" disabled={!formValid}>
          Save
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type="dashed" htmlType="reset">
          Reset
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type="ghost" onClick={onCancel}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
}
