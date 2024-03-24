import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import appRoutes from 'routes';

const App: FC = () => {
  const element = useRoutes(appRoutes);

  return element;
};

export default App;
