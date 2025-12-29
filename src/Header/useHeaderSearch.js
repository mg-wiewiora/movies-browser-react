import { useState, useEffect } from "react";
import { useQueryParameter, useReplaceQueryParameter } from "../features/queryParameters";

export const useHeaderSearch = () => {
  const query = useQueryParameter("query") || "";
  const replaceQuery = useReplaceQueryParameter();

  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

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
