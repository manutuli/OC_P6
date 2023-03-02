
import "./styles/index.css";
import "./assets/fonts/static/Montserrat-Light.ttf"
import "./assets/fonts/static/Montserrat-Bold.ttf"
import "./styles/normalize.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import NotFound from "./pages/NotFound";
import Banner from "./components/Banner";
import { createBrowserRouter } from "react-router-dom";
//  
const router = createBrowserRouter([
  {
    element: <Banner/>,
    errorElement: <NotFound />,
    loader: async ()=> {
      const {default: cards} = await import('./assets/cardsData.json');
      return cards;
    },
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFound/>,
      },
      {
        path: "/housing/:houseId",
        element: <Housing />,
        errorElement: <NotFound />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <NotFound />,
      },
    ]
  }
]);
export default router;
