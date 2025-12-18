import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toSearch } from "../routes";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../features/queryParameters";

export const useHeaderSearch = () => {
  const query = useQueryParameter("query") || "";
  const replaceQuery = useReplaceQueryParameter();
  const history = useHistory();
  const location = useLocation();

  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    if (inputValue === query) return;

    const handler = setTimeout(() => {
      replaceQuery({ key: "query", value: inputValue });

      if (inputValue.trim()) {
        history.push(toSearch());
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [inputValue, query, replaceQuery, history, location.search]);

  return { inputValue, setInputValue };
};
