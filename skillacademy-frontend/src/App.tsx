
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import Header from "./components/Header";
import Register from "./pages/Register";
import SingleCourse from "./pages/SingleCourse";
import { Profile } from "./pages/Profile";
import { Toaster } from 'react-hot-toast';
const router = createBrowserRouter([
  {
    path:"/",
    element: <Header/>,
    children:[
      {
        path:"",
        element: <Home/>
      },
      {
        path:"courses",
        children:[
              {
                path:"",
                        element: <Courses/>,
              },
              {
                path:":id",
                element:<SingleCourse/>
              }
        ]
      },
      {
        path:"profile",
        element: <Profile/>
      },
    ]
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/register",
    element: <Register/>
  },
])
function App() {
  return (
    <><RouterProvider router={router} /><Toaster /></>
  )
}

export default App
