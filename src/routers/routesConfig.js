import Cart from "../containers/Cart/Cart";
import Shop from "../containers/Shop/Shop";
import ErrorPage from "../containers/Error/ErrorPage";
import SingleItem from "../components/SingleItem/SingleItem";

const routesConfig = [
  {
    path: "/Shop",
    element: <Shop></Shop>,
  },
  {
    path: "/Cart",
    element: <Cart></Cart>,
  },
  {
    path: "/Shop/Item/:id/:name",
    element: <SingleItem></SingleItem>,
  },
  {
    path: "*", //
    element: <Shop></Shop>,
  },
  {
    path: "/ErrorPage",
    element: <ErrorPage></ErrorPage>,
  },
];

export default routesConfig;
