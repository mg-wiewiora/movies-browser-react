import { useState, useEffect } from "react";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../features/queryParameters";
import { useHistory, useLocation } from "react-router-dom";
import { toMovies, toPeople } from "../routes";

export const useHeader = () => {
  const query = useQueryParameter("query") || "";
  const replaceQuery = useReplaceQueryParameter();
  const history = useHistory();
  const location = useLocation();

  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query !== inputValue) {
        replaceQuery({ key: "query", value: inputValue });
      }

      if (inputValue.trim() === "") return;

      const searchParams = new URLSearchParams(location.search);
      searchParams.set("query", inputValue);

      const isPeoplePath =
        location.pathname === toPeople() ||
        location.pathname.startsWith("/person/");
      const targetPath = isPeoplePath ? toPeople() : toMovies();
      const newSearch = searchParams.toString();

      if (
        location.search !== `?${newSearch}` ||
        location.pathname !== targetPath
      ) {
        history.push({ pathname: targetPath, search: newSearch });
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [inputValue, query, replaceQuery, history, location]);

  const resetSearch = () => setInputValue("");

  return { inputValue, setInputValue, resetSearch };
};
