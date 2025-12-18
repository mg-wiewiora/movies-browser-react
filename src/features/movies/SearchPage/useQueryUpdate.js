import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const useQueryUpdate = (key, value) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    if (value === undefined || value === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    history.replace({ search: searchParams.toString() });
  }, [key, value, history, location.search]);
};
