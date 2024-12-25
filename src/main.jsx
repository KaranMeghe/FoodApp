import { createRoot } from 'react-dom/client';
import './index.css';
import AppLayout from './AppLayout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Contact, Cart } from './pages';
import { Body, Error, RestPage } from './components';
import { menuLoader } from './components/Restaurant/RestPage';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/contact', element: <Contact /> },
      { path: '/cart', element: <Cart /> },
      { path: `/restaurants/:resId`, element: <RestPage />, loader: menuLoader }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
);
