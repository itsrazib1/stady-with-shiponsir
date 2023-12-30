import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/login/login";
import Dashboard from "../pages/dashboard/dashboard";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: 'dashboard',
          element: <Dashboard></Dashboard>
        },
      ]
    },
    {
      
        path:"/register",
        element:<Register/>
    },
    {
      path: 'login',
      element: <Login></Login>
    }
  ]);
