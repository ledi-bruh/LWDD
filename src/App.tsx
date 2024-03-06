import { FC } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import HeaderInner from 'components/HeaderInner';
import FooterInner from 'components/FooterInner';
import appRoutes from 'routes';

const App: FC = () => {
  const element = useRoutes([
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
      children: appRoutes
    }
  ]);

  return element;
};

export default App;
