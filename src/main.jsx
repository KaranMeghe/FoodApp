import { createRoot } from 'react-dom/client';
import './index.css';
import AppLayout from './AppLayout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Cart } from './pages';
import { Body, Error, RestPage } from './components';
import { menuLoader } from './components/Restaurant/RestPage';
import { lazy, Suspense } from 'react';

// const Contact = lazy(() => import('./pages/index'));

const Contact = lazy(() =>
  import('./pages').then((module) => ({ default: module.Contact }))
);


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/contact', element: <Suspense fallback={<div>Loading.....</div>}><Contact /></Suspense> },
      { path: '/cart', element: <Cart /> },
      { path: `/restaurants/:resId`, element: <RestPage />, loader: menuLoader }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
);
