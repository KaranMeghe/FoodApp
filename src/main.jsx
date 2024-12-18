import { createRoot } from 'react-dom/client';
import './index.css';
import AppLayout from './AppLayout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Contact, Cart } from './pages';
import { Body } from './components';
import { Provider } from './Context/RestaruntContext';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,

    children: [
      { path: '/', element: <Body /> },
      { path: '/contact', element: <Contact /> },
      { path: '/cart', element: <Cart /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <Provider>
    <RouterProvider router={appRouter} />
  </Provider>
);
