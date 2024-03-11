import { Navigate, type RouteObject } from 'react-router-dom';
import Layout from './Layout';
import Characters from 'routes/Characters';
import CharacterDetail from 'routes/CharacterDetail';
import NotFound from 'routes/NotFound';
import Comics from 'routes/Comics';
import ComicsDetail from 'routes/ComicsDetail';

const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="characters" /> },
      { path: 'characters', element: <Characters /> },
      { path: 'characters/:id', element: <CharacterDetail /> },
      { path: 'comics', element: <Comics /> },
      { path: 'comics/:id', element: <ComicsDetail /> },
      { path: '*', element: <NotFound /> }
    ]
  }
];

export default appRoutes;
