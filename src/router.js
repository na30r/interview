import { useRoutes } from "react-router-dom";
import Home from "./home";
import ContactUs from "./contact-us";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
  ]);
}
