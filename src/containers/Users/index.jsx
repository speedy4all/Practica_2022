import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { columns } from "./columns";
import { useNavigate } from "react-router-dom";
import { fetchUsersApi } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchUsersFailed, fetchUsersSuccess } from "./actions";

export default function Users() {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.users);
  const lastLoadedUser = useSelector((store) => store.user.user);
  const { data, isLoading, error } = state;

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
      <Table
        columns={columns}
        dataSource={data}
        onRow={(record) => ({
          onDoubleClick: () => onRowClick(record),
        })}
      />
    </>
  );
}
