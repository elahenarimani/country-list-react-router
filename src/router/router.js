import {
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import CountryPage from "../pages/countryPage/CountryPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/> ,
    
    
  },
  {
    path :'/countryPage',
    element : <CountryPage/>,
    children : [
      {
      path :'/countryPage/:name'
      }
  ]
    
  }
]);
export {router}