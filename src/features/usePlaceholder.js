import { useLocation } from "react-router-dom";
import { toPeople } from "../routes";

export const usePlaceholder = () => {
  const { pathname } = useLocation();

  if (pathname === toPeople() || pathname.startsWith("/person/")) {
    return "Search for people...";
  }

  return "Search for movies...";
};
