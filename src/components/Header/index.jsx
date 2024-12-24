import { Link, useLocation } from 'react-router-dom';
import './style.scss'
import leanMediaIcon from '../../assets/favicon/leanMediaIcon.png'

function Header () {
  const location = useLocation();
  const items = document.querySelectorAll('ul .item');
  const hadndleClick=(e)=>{
    
    items.forEach(item=>{
      item.classList.remove('selected')
    })
    e.currentTarget.classList.add('selected');
    
  }
  const isActive = (path)=> {
    items.forEach(item=>{
      item.classList.remove('selected')
    })
    return location.pathname === path;
  }
  return (
    <header>
      <nav>
        <div className='company-info'>
          <div className='company-logo-container'>
            <div className='logo'>
              <img className="logo-icon" src={leanMediaIcon} alt="Lean Media Logo" />
            </div>
            <div className='name'>Lean Media</div>
          </div>
        </div>
        <div className='toolbar'>
          <ul>
            <li className={`item ${isActive('/')?'selected' :''}`} onClick={hadndleClick}><Link to="/">Główna</Link></li>
            <li className={`item ${isActive('/service')?'selected' :''}`} onClick={hadndleClick}><Link to="/service">Service</Link></li>
            <li className={`item ${isActive('/shop')?'selected' :''}`} onClick={hadndleClick}><Link to="/shop">Sklep</Link></li>
            <li className={`item ${isActive('/shop')?'selected' :''}`} onClick={hadndleClick}><Link to="/shop">Kontakt</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
 export default Header;