import { Navigate, type RouteObject } from 'react-router-dom';
import Characters from 'components/Characters';
import CharacterDetail from 'components/CharacterDetail';
import NotFound from 'components/NotFound';
import Comics from 'components/Comics';
import ComicsDetail from 'components/ComicsDetail';
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
