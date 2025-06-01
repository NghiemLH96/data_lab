import { Outlet } from 'react-router-dom';
import { Private_header } from '../components/layout/Header/Header';
import SideBar from '../components/layout/SideBar/SideBar';
import './scss/privateRoute.scss';

export default function PrivateRoutes() {
  return (
    <>
      <section className='private-routes'>
        <SideBar />
        <div className='private-routes__content'>
          <Private_header />
          <Outlet />
        </div>
        </section>
    </>
  )
}
