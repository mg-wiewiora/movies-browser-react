import { useLocation } from "react-router-dom";

export const usePlaceholder = () => {
  const { hash } = useLocation();
  const hashPath = hash.split("#").pop();

  return hashPath === "/people" || hashPath.startsWith("/person")
    ? "Search for people..."
    : "Search for movies...";
};
