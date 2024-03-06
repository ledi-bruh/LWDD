import { FC } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import appRoutes from 'routes';

const App: FC = () => {
  const element = useRoutes([
    {
      path: '/',
      element: (
        <>
          <header>
            <Header />
          </header>
          <main>
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      ),
      children: appRoutes
    }
  ]);

  return element;
};

export default App;
