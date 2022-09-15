import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ProductView from "../../components/ProductView";
import useInitialFetch from "../../hooks/useInitialFetch";
import { fetchUser, saveUser } from "./actions";

export default function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const state = useInitialFetch(fetchUser, {
    payload: id,
    stateSelector: "user",
  });

  const { user, isLoading, error } = state;

  const onSave = useCallback((values) => {
    dispatch(saveUser({ ...values, id }));
  }, [id]);

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return `Something went wrong: ${error}`;
  }

  return (
    <ProductView product={user} onSave={onSave} onCancel={() => navigate(-1)} />
  );
}
