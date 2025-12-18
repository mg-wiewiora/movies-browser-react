import { useLocation } from "react-router-dom";

export const usePlaceholder = () => {
  const { hash } = useLocation();
  return hash.includes("/people") || hash.includes("/person")
    ? "Search for people..."
    : "Search for movies...";
};
