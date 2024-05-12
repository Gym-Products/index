import { createBrowserRouter } from "react-router-dom";

import { DietPage } from "@pages";

export default createBrowserRouter([
  {
    path: "/index",
    element: <DietPage />,
  },
]);
