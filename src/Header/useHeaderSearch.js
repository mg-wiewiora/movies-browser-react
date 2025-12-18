import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toSearch } from "../routes";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../features/queryParameters";

export const useHeaderSearch = () => {
  const history = useHistory();
  const location = useLocation();

  const query = useQueryParameter("query") || "";
  const replaceQuery = useReplaceQueryParameter();

  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      replaceQuery({ key: "query", value: inputValue });

      if (
        inputValue.trim() !== "" &&
        location.pathname !== toSearch()
      ) {
        history.push(toSearch());
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [inputValue, history, replaceQuery, location.pathname]);

  return { inputValue, setInputValue };
};
