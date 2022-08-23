import React, { useEffect, useState } from "react";
import { fetchClientsApi } from "../../api";
import ClientsView from "../../components/ClientsView";

export default function Clients() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    fetchClientsApi().then((resp) => {
      setClients(resp);
    });
  }, []);

  return <ClientsView dataSource={clients} />;
}
