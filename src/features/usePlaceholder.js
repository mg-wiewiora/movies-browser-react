import { useLocation } from "react-router-dom";
import { toPeople } from "../routes";

export const usePlaceholder = () => {
  const { hash } = useLocation();
  const path = hash.slice(1);

  return path === toPeople() || path.startsWith("/person")
    ? "Search for people..."
    : "Search for movies...";
};
