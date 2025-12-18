import { useLocation } from "react-router-dom";
import { toPeople, toPerson } from "../routes";

export const usePlaceholder = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path === toPeople() || path.startsWith(toPerson())) {
    return "Search for people...";
  }

  return "Search for movies...";
};
