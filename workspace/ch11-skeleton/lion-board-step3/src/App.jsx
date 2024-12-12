import router from "@/routes";
import useThemeStore from "@zustand/themeStore";
import { RouterProvider } from "react-router-dom";

function App() {
  const { isDarkMode } = useThemeStore();
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
