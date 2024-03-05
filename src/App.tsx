import { FC } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import Header from 'components/Header';
import appRoutes from 'routes';

const App: FC = () => {
  const element = useRoutes([
    {
      path: '/',
      element: (
        <>
          <Header />
          <Outlet />
          <div>footer</div>
        </>
      ),
      children: appRoutes
    }
  ]);

  return element;
};

export default App;
