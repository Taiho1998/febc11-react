import router from "@/routes";
import Spinner from "@components/Spinner";
import useThemeStore from "@zustand/themeStore";
import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";

function App() {
  const { isDarkMode } = useThemeStore();
  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  return (
    <HelmetProvider>
      <Suspense fallback={<Spinner.FullScreen />}>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
        <ToastContainer
          position="top-center"
          hideProgressBar={true}
          autoClose={1500}
          closeOnClick={true}
          theme="light"
          transition={Slide}
        />
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
