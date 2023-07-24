import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Home from './Components/Home/Home/Home.jsx';
import CollegeDetails from './Components/CollegeDetails/CollegeDetails';
import Admission from './Components/Admission/Admission';
import AdmissionDetails from './Components/AdmissionDetails/AdmissionDetails';
import SignUp from './Signup/Signup';
import Login from './Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyCollege from './Components/My college/MyCollege ';
import ErrorPage from './Errorpage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/collegeDetails/:id",
        element:<PrivateRoute> <CollegeDetails/></PrivateRoute>
      },
      {
        path:"/admission",
        element:<Admission/>
      },
      {
        path:"/admissionDetails/:id",
        element:<PrivateRoute><AdmissionDetails/></PrivateRoute>
      },
      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/login",
        element:<Login/>
      },{
        path:"/mycollege",
        element:<PrivateRoute><MyCollege/></PrivateRoute>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
