import { Link, useLocation, useNavigate} from 'react-router-dom';
import './style.scss'
import leanMediaIcon from '../../assets/favicon/leanMediaIcon.png';
import leanServiceIcon from '../../assets/favicon/leanService-icon.jpg';
import { useEffect, useState } from 'react';
function Header ({scrollToFooter}) {
  const [iconSrc, setIconSrc]= useState(leanMediaIcon);
  const [name, setName] =useState('')
  const [path, setPath] = useState('/');
  const location = useLocation();
  const navigateTo = useNavigate();
  const changeIconAndName = ()=>{
    if (location.pathname === '/service') {
      setIconSrc(leanServiceIcon);
      setName('Lean Service')
    }else{
      setIconSrc(leanMediaIcon);
      setName('')
    }
  }

  useEffect(()=>{
    changeIconAndName();
    setPath(location.pathname)
    console.log(path)

  },[location.pathname])
  console.log(path)

  return (
    <header>
      <nav>
        <div className='company-info'>
          <div className='company-logo-container'>
            <div className='logo' onClick={()=>navigateTo('/')}>
              <img className="logo-icon" src={iconSrc} alt="Lean Media Logo" />
            </div>
            <div className='name'>{name}</div>
          </div>
        </div>
        <div className='toolbar'>
          <ul>
            <li className={`item ${path==='/' ? 'selected': ''}`} ><Link to="/">Główna</Link></li>
            <li className={`item ${path==='/service' ? 'selected': ''}`} ><Link to="/service">Service</Link></li>
            <li className={`item ${path==='/shop' ? 'selected': ''}`} ><Link to="/shop">Sklep</Link></li>
            <li className={`item `} onClick={scrollToFooter}>Kontakt</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
 export default Header;