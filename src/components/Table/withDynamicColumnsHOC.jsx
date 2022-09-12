import React, { useCallback, useState } from "react";
import { Select } from "antd";

const { Option } = Select;

export default function withDynamicColumnsHOC(Component) {
  return function DynamicColumnComponent({ columns, ...rest }) {
    const [tableColumns, setTableColumns] = useState(columns);

    const handleColumnChange = useCallback(
      (selection) => {
        const newColumns = columns.filter(({ title }) =>
          selection.includes(title.toLowerCase())
        );
        setTableColumns(newColumns);
      },
      [tableColumns]
    );

    return (
      <>
        <Select
          mode="multiple"
          style={{ width: "30%" }}
          defaultValue={tableColumns.map(({ title }) => title.toLowerCase())}
          placeholder="Please select columns"
          onChange={handleColumnChange}
        >
          {columns.map((column) => (
            <Option key={column.key} disabled={column.required}>
              {column.title}
            </Option>
          ))}
        </Select>
        <Component columns={tableColumns} {...rest} />
      </>
    );
  };
}
