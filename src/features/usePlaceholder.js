import { useLocation } from "react-router-dom";

export const usePlaceholder = () => {
  const location = useLocation();
  const hash = location.hash || "";

  if (hash === "#/people" || hash.startsWith("#/person")) {
    return "Search for people...";
  }

  return "Search for movies...";
};
