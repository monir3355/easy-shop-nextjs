import ThemeContext from "@/contexts/ThemeContext";
import { useContext } from "react";

const useTheme = () => {
  const theme = useContext(ThemeContext);
  const client = typeof window !== "undefined";
  if (!client && !theme) return {};
  if (!theme) {
    throw new Error(
      "You must wrap your application with ThemeProvider ot use the useTheme"
    );
  }
  return theme;
};

export default useTheme;
