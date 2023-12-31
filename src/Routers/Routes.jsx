import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/login/login";
import Dashboard from "../pages/dashboard/dashboard";
import PrivateRoute from "../components/layouts/PrivateRoute";
import Error from "../pages/Home/Error";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<Error></Error>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: 'dashboard',
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> 
        },
      ]
    },
    {
      
        path:"register",
        element:<Register/>
    },
    {
      path: 'login',
      element: <Login></Login>
    }
  ]);
