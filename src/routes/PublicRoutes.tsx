import { Outlet } from 'react-router-dom';
import { Cli_header } from '../components/layout/Header/Header';
import { Cli_footer } from '../components/layout/Footer/Footer';
import './scss/publicRoute.scss'
export default function PublicRoutes() {
  return (
        <section className='public-routes'>
          <Cli_header />
          <Outlet/>
          <Cli_footer />
        </section>
  )
}
