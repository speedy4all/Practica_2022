import { Button, Form, Input } from 'antd';
import React from 'react';

export default function ProductView({ product, onCancel, onSave }) {
  return (
    <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={product}
        onFinish={(values) => {
          onSave?.(values);
        }}
      >
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Age" name="age">
          <Input />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit'>Save</Button>
        </Form.Item>
        <Form.Item>
          <Button type='ghost' onClick={onCancel}>Cancel</Button>
        </Form.Item>
      </Form>
  );
}
