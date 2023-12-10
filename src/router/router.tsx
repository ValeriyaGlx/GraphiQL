import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/widgets/Layout/Layout.tsx';
import { SignUp, SingIn, Welcome } from '../components/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: ,
    children: [
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: '/sign-in',
        element: <SingIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/graphiQL',
        element: <Welcome />,
      },
    ],
  },
]);
