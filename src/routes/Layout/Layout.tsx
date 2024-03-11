import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderInner from 'components/HeaderInner';
import FooterInner from 'components/FooterInner';

const Layout: FC = () => {
  return (
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
  );
};

export default Layout;
