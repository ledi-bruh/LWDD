import { Navigate, type RouteObject } from 'react-router-dom';

const appRoutes: RouteObject[] = [
  { index: true, element: <Navigate to="characters" /> },
  { path: 'characters', element: <div>Characters</div> },
  { path: 'comics', element: <div>Comics</div> },
  { path: '*', element: <div>Not found</div> }
];

export default appRoutes;
