import { Navigate, type RouteObject } from 'react-router-dom';
import Characters from 'routes/Characters';
import CharacterDetail from 'routes/CharacterDetail';
import NotFound from 'routes/NotFound';
import Comics from 'routes/Comics';
import ComicsDetail from 'routes/ComicsDetail';
import HeaderInner from 'components/HeaderInner';
import FooterInner from 'components/FooterInner';
import { Outlet } from 'react-router-dom';

const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <>
        <header>
          <HeaderInner />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <FooterInner />
        </footer>
      </>
    ),
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
