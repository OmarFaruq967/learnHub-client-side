import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AllInstructor from "../Pages/Instructor/AllInstructor";
import AllClasses from "../Pages/Classes/AllClasses";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Cart/Cart";
import AllUsers from "../Pages/AllUsers/AllUsers";
import PrivateRoute from "./PrivatRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddClasses from "../Pages/AddClasses/AddClasses";
import MyClasses from "../Pages/AddClasses/MyClasses";
import ClassesAll from "../Pages/AllClasses/AproveClass";
import AproveClass from "../Pages/AllClasses/AproveClass";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "login",
          element: <Login/>
        },
        {
          path: "register",
          element: <Register/>
        },
        {
          path: "instructors",
          element: <AllInstructor/>
        },
        {
          path: "classes",
          element: <AllClasses/>
        },


      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      children:[
        {
          path: "cart",
          element: <Cart/>,
        },
        {
          path: "users",
          element: <AllUsers/>,
        },
        {
          path: "addClasses",
          element: <AddClasses/>,
        },
        {
          path: "myClasses",
          element: <MyClasses/>,
        },
        {
          path: "aproveClass",
          element: <AproveClass/>,
        },
      ]
    },
    
  ]);