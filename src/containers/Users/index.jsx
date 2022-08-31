import React, { useCallback, useEffect, useState } from "react";
import { Button, Menu, Table } from "antd";
import { columns } from "./columns";
import { useNavigate } from "react-router-dom";
import { fetchUsersApi } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchUsersFailed, fetchUsersSuccess } from "./actions";

export default function Users() {

  const [tableColumns, setTableColumns] = useState(columns); 
  const [lastIndex, setLastIndex] = useState(columns.length); 

  const dispatch = useDispatch();
  const state = useSelector((store) => store.users);
  const lastLoadedUser = useSelector((store) => store.user.user);
  const { data, isLoading, error } = state;

  const handleColumnChange = useCallback((event) => {
    const menuKey = event.key;
    const newColumns = [...tableColumns];
    const colIndex = newColumns.findIndex(({ key }) => menuKey === key);
    if (colIndex > -1) {
      setLastIndex(colIndex);
      newColumns.splice(colIndex, 1);
    } else {
      const column = columns.find(({key}) => menuKey === key);
      newColumns.splice(lastIndex, 0, column);
      setLastIndex(newColumns.length);
    }

    setTableColumns(newColumns);
  }, [tableColumns]);

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
      <Menu
        onClick={handleColumnChange}
        items={columns.map((column) => ({
          label: column.title,
          key: column.key,
        }))}
      />
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
