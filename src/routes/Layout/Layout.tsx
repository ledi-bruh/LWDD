import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <ToastContainer />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
