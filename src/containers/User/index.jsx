import React, { useCallback, useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserApi, saveUserApi } from "../../api";
import ProductView from "../../components/ProductView";
import {
  SHOW_LOADER,
  UPDATE_USER,
  USER_SAVED,
  USER_SAVED_FAILED,
} from "./reducer";

export default function User() {

  const state = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const { user, isLoading, error } = state;

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: SHOW_LOADER });
    fetchUserApi(id).then((resp) => {
      dispatch({ type: UPDATE_USER, payload: resp });
    });
  }, [id]);

  const onSave = useCallback((values) => {
    saveUserApi(values)
      .then((savedUser) => {
        dispatch({ type: USER_SAVED, payload: savedUser });
      })
      .catch((e) => {
        dispatch({ type: USER_SAVED_FAILED, payload: e.message });
      });
  }, []);

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
