import { Navigate, type RouteObject } from 'react-router-dom';
import Characters from 'components/Characters';

const appRoutes: RouteObject[] = [
  { index: true, element: <Navigate to="characters" /> },
  { path: 'characters', element: <Characters /> },
  { path: 'characters/:id', element: <div>you are here</div> },
  { path: 'comics', element: <div>Comics</div> },
  { path: '*', element: <div>Not found</div> }
];

export default appRoutes;
