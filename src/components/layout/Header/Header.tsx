import './admin_header.scss';
import 'primeicons/primeicons.css';

function Cli_header() {
  return (
    <div>Cli Header</div>
  )
}

function Admin_header() {
  return (
    <nav className='admin-nav'>
      <h2 className='admin-nav__title'>DaskBoard</h2>
      <section className='admin-nav__right'>
        <div className='search_box'>
          <span className="pi pi-search"></span>
          <input className='search_box__input' type="text" placeholder='Nhập từ khóa tìm kiếm'/>
        </div>
        <img className='admin-nav__avatar' src="" alt="" />
      </section>
    </nav>
  )
}

export {Cli_header, Admin_header};