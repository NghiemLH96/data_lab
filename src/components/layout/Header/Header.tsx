import './private_header.scss';
import './public_header.scss'
import 'primeicons/primeicons.css';


function Cli_header() {
  return (
    <div className='public-nav'>
      <section className='public-nav__container'>
        <h1 className='public-nav__logo'>logo</h1>
        <button className='public-nav__login-btn'>Login</button>
      </section>
      <hr />
    </div>
  )
}

function Private_header() {
  return (
    <nav className='private-nav'>
      <section className='private-nav__container'>
        <h2 className='private-nav__title'>DaskBoard</h2>
        <section className='private-nav__right'>
          <div className='search_box'>
            <span className="pi pi-search"></span>
            <input className='search_box__input' type="text" placeholder='Nhập từ khóa tìm kiếm'/>
          </div>
          <img className='private-nav__avatar' src="\src\assets\avatar.jpg" alt="" />
        </section>
      </section>
      <hr />
    </nav>
  )
}

export {Cli_header, Private_header};