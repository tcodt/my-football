import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index/Index";
import News from "./pages/News/News";

const routes = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/news", element: <News /> },
]);

export default routes;
