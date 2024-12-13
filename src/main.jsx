import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Post from './components/Post';
import Todo from './components/Todo';
import Users from './components/Users';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Post />,
  },
  {
    path: "/todo",
    element: <Todo />,
    loader: async () => await fetch('https://jsonplaceholder.typicode.com/todos')
  },
  {
    path: '/user',
    element: <Users />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
