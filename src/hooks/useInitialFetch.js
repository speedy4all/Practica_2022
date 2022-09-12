import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useInitialFetch(action, { payload, stateSelector }) {
  const state = useSelector((store) => store[stateSelector]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action(payload));
  }, [payload]);

  return state;
}
