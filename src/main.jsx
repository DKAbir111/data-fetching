import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Post from './components/Post';
import Todo from './components/Todo';
import Users from './components/Users';
import Comment from './components/Comment';
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
  },
  {
    path: '/comment',
    element: <Comment />
  }
]);
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>

  </StrictMode>,
)
