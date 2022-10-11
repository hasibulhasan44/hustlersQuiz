import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"; 
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/Statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'/Blogs',
          element:<Blogs></Blogs>
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
