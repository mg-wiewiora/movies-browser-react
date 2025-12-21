import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQueryParameter, useReplaceQueryParameter } from "../features/queryParameters";

export const useHeaderSearch = () => {
  const location = useLocation();
  const query = useQueryParameter("query") || "";
  const replaceQuery = useReplaceQueryParameter();

  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  useEffect(() => {
    if (!location.pathname.startsWith("/movies") && inputValue !== "") {
      setInputValue("");
    }
  }, [location.pathname, inputValue]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query !== inputValue) {
        replaceQuery({ key: "query", value: inputValue });
      }
    }, 500);
    return () => clearTimeout(handler);
  }, [inputValue, query, replaceQuery]);

  return { inputValue, setInputValue };
};
