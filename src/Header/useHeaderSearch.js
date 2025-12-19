import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../features/queryParameters";
import { toMovies } from "../routes";

export const useHeaderSearch = () => {
  const history = useHistory();
  const location = useLocation();

  const query = useQueryParameter("query") || "";
  const replaceQuery = useReplaceQueryParameter();

  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      replaceQuery({ key: "query", value: inputValue });

      if (inputValue.trim() !== "" && location.pathname !== toMovies()) {
        history.push(toMovies());
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [inputValue, history, replaceQuery, location.pathname]);

  const resetSearch = () => {
    setInputValue("");
    replaceQuery({ key: "query", value: "" });
  };

  return {
    inputValue,
    setInputValue,
    resetSearch,
  };
};
