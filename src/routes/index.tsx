import { Navigate, type RouteObject } from 'react-router-dom';
import Characters from 'components/Characters';
import CharacterDetail from 'components/CharacterDetail';
import NotFound from 'components/NotFound';

const appRoutes: RouteObject[] = [
  { index: true, element: <Navigate to="characters" /> },
  { path: 'characters', element: <Characters /> },
  { path: 'characters/:id', element: <CharacterDetail /> },
  { path: 'comics', element: <div>Comics</div> },
  { path: '*', element: <NotFound /> }
];

export default appRoutes;
