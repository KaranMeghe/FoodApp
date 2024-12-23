import { createRoot } from 'react-dom/client';
import './index.css';
import AppLayout from './AppLayout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Contact, Cart } from './pages';
import { Body, Error } from './components';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/contact', element: <Contact /> },
      { path: '/cart', element: <Cart /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
);
