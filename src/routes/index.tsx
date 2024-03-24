import { Navigate, type RouteObject } from 'react-router-dom';
import Layout from './Layout';
import Characters from './Characters';
import CharacterDetail from './CharacterDetail';
import NotFound from './NotFound';
import Comics from './Comics';
import ComicsDetail from './ComicsDetail';

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
