import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Post from './components/Post';
import Todo from './components/Todo';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Post />,
  },
  {
    path: "/todo",
    element: <Todo />,
    loader: async () => await fetch('https://jsonplaceholder.typicode.com/todos')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
