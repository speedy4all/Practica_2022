import React, { useEffect } from "react";
import { Table } from "antd";
import { columns } from "./columns";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUsers } from "./actions";
import withDynamicColumnsHOC from "../../components/Table/withDynamicColumnsHOC";
import useInitialFetch from "../../hooks/useInitialFetch";

const DynamicTable = withDynamicColumnsHOC(Table);

export default function Users() {
  const { id } = useParams();

  const state = useInitialFetch(fetchUsers, {
    payload: id,
    stateSelector: "users",
  });

  const { data } = state;

  const navigate = useNavigate();
  const onRowClick = (row) => {
    const path = `/users/${row.id}`;
    navigate(path);
  };

  return (
    <>
      <DynamicTable
        columns={columns}
        dataSource={data}
        onRow={(record) => ({
          onDoubleClick: () => onRowClick(record),
        })}
      />
    </>
  );
}
