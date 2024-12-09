import router from "@/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
