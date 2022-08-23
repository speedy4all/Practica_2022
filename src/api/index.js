import axios from "axios";

const API_URL = "http://localhost:3001";

const fetchUsersApi = async () => {
  try {
    const resp = await axios.get(`${API_URL}/users`);
    return resp.data;
  } catch (e) {
    throw new Error(
      `Your request failed.
    Reason: ${e}`
    );
  }
};

const fetchClientsApi = async () => {
  const resp = await axios.get(`${API_URL}/clients`);

  const clients = resp.data.map((client) => {
    const names = client.name.split(" ");
    return { ...client, firstName: names[0], lastName: names[1] };
  });

  return clients;
};

const fetchUserApi = async (id) => {
  const resp = await axios.get(`${API_URL}/users/${id}`);
  return resp.data;
};

const saveUserApi = async (values, fakeFail) => {
  if (fakeFail) {
    throw new Error("500 Service unavailable");
  }

  const resp = await axios.post(`${API_URL}/users`, values);
  return resp.data;
};

export { fetchUsersApi, fetchUserApi, saveUserApi, fetchClientsApi };
