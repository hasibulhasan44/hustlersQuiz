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
import Routemessage404 from './components/Routemessage404/Routemessage404';
import QuizDetails from './components/QuizDetails/QuizDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path:'home',
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
        {
          path: '/quiz/:id',
          loader: async({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <QuizDetails/>
        }
      ]
    },
    {
      path: '*' ,
      element: <Routemessage404></Routemessage404>
    }
  ])
  return (
    <div>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
