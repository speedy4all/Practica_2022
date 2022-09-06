import React, { useCallback, useEffect, useState } from "react";
import { Button, Menu, Select, Table } from "antd";
import { columns } from "./columns";
import { useNavigate } from "react-router-dom";
import { fetchUsersApi } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchUsersFailed, fetchUsersSuccess } from "./actions";

const { Option } = Select;

export default function Users() {
  const [tableColumns, setTableColumns] = useState(columns);

  const dispatch = useDispatch();
  const state = useSelector((store) => store.users);
  const lastLoadedUser = useSelector((store) => store.user.user);
  const { data, isLoading, error } = state;

  const handleColumnChange = useCallback(
    (selection) => {
      const newColumns = columns.filter(({ title }) =>
        selection.includes(title.toLowerCase())
      );
      setTableColumns(newColumns);
    },
    [tableColumns]
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const navigate = useNavigate();
  const onRowClick = (row) => {
    const path = `/users/${row.id}`;
    navigate(path);
  };

  return (
    <>
      <div>Last selected user name: {lastLoadedUser?.name}</div>
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
      <Table
        columns={tableColumns}
        dataSource={data}
        onRow={(record) => ({
          onDoubleClick: () => onRowClick(record),
        })}
      />
    </>
  );
}
