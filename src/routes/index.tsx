import { Navigate, type RouteObject } from 'react-router-dom';
import Characters from 'components/Characters';
import CharacterDetail from 'components/CharacterDetail';
import NotFound from 'components/NotFound';
import Comics from 'components/Comics';

const appRoutes: RouteObject[] = [
  { index: true, element: <Navigate to="characters" /> },
  { path: 'characters', element: <Characters /> },
  { path: 'characters/:id', element: <CharacterDetail /> },
  { path: 'comics', element: <Comics /> },
  { path: '*', element: <NotFound /> }
];

export default appRoutes;
