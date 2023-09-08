import { useEffect } from "react";
import { useReducer } from "react";
import { useRef } from "react";

const useFetchClients = (alias, idCharacter) => {
  const cancelRequest = useRef(false);
  //   const { bankAccounts } = payload.data;
  const initialState = {
    error: undefined,
    data: undefined,
  };

  const fetchReducer = (state, action) => {
    switch (action.type) {
      case "loading":
        return { ...initialState };
      case "fetched":
        return { ...initialState, data: action.payload };
      case "error":
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (idCharacter === undefined) return;
    const fetchData = async () => {
      dispatch({ type: "loading" });
      try {
        if (idCharacter === 1) {
          const response = await fetch(alias);
          const finalResponse = await response.json();
          dispatch({ type: "fetched", payload: finalResponse });
        }
        if (idCharacter !== 1) {
          const response = await fetch(alias + idCharacter);
          const finalResponse = await response.json();
          dispatch({ type: "fetched", payload: finalResponse });
        }
      } catch (error) {
        dispatch({ type: "error", payload: error });
      }
    };
    cancelRequest.current = false;

    fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, [idCharacter]);

  return state;
};

export default useFetchClients;
