import Cart from "../containers/Cart/Cart";
import Shop from "../containers/Shop/Shop";
import Main from "../containers/Main/Main";
import SingleItem from "../components/SingleItem/SingleItem";


const routesConfig = [
    {
      path: '/Shop',
      element: <Shop></Shop>
    },
    {
      path: '/Main',
      element: <Main></Main>
    },
    {
      path: '/Cart',
      element: <Cart></Cart>
    },
    {
      path: '/Shop/Item/:id/:name',
      element: <SingleItem></SingleItem>
    },
    // {
    //   path: '*',
    //   element: <ErrorPage></ErrorPage>
    // },
  ];
  
  export default routesConfig