import { createBrowserRouter } from 'react-router-dom';

import Welcome from '../components/pages/Welcome.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
    // errorElement: ,
  },
  {
    path: '/sign-in',
    element: <Welcome />,
  },
  {
    path: '/sign-up',
    element: <Welcome />,
  },
  {
    path: '/graphiQL',
    element: <Welcome />,
  },
]);
