import { useState, useEffect } from "react";
import { useReplaceQueryParameter, useQueryParameter } from "../features/queryParameters";

export const useHeaderSearch = () => {
  const query = useQueryParameter("query") || "";
  const replaceQuery = useReplaceQueryParameter();

  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      replaceQuery({ key: "query", value: inputValue.trim() || undefined });
    }, 500);

    return () => clearTimeout(handler);
  }, [inputValue, replaceQuery]);

  return { inputValue, setInputValue };
};
