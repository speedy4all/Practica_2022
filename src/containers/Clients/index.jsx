import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClientsApi } from "../../api";
import ClientsView from "../../components/ClientsView";
import { FETCH_CLIENTS_REQUEST } from "./reducer";

export default function Clients() {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.clients);

  const { data, error } = state;

  useEffect(() => {
    dispatch({ type: FETCH_CLIENTS_REQUEST });
  }, []);

  return <ClientsView dataSource={data} />;
}
