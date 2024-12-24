import './style.scss';
import serviceBg from '../../assets/images/service-bg.jpg';
import shopBg from '../../assets/images/shop-bg.jpg';
import { useNavigate } from 'react-router-dom';
function HomePage() {
  const navigateTo = useNavigate();
 const handleNavigation = (path)=>{
  if(path){
    navigateTo(`${path}`)
  }
 }

 
  return (
    <main>
      <div className="content">
      <div className='offer-block left'>
        <div className='offer-content'>
          <h1 className='title'>
          Usługi <br></br>serwisowe
          </h1>
          <div className='descr'>
          <p className='info'>Nasz serwis specjalizuje się w naprawie telefonów i komputerów o dowolnym stopniu skomplikowania. Oferujemy szybką diagnostykę, wysokiej jakości naprawy, instalację oprogramowania oraz wymianę podzespołów, a na każdą usługę udzielamy gwarancji.Profesjonalni specjaliści i przystępne ceny to gwarancja Państwa zadowolenia.</p>
          <ul className='skills-list'>
            <li>Szybka diagnoza</li>
            <li>Bezpieczna naprawa</li>
            <li>Szybka realizacja</li>
            <li>Przejrzysta wycena</li>
          </ul>
          <button className='action'>
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.3251 8.70711C21.7156 8.31658 21.7156 7.68342 21.3251 7.29289L14.9611 0.928932C14.5706 0.538408 13.9375 0.538408 13.5469 0.928932C13.1564 1.31946 13.1564 1.95262 13.5469 2.34315L19.2038 8L13.5469 13.6569C13.1564 14.0474 13.1564 14.6805 13.5469 15.0711C13.9375 15.4616 14.5706 15.4616 14.9611 15.0711L21.3251 8.70711ZM0.96582 9H20.618V7H0.96582V9Z" fill="white"/>
        </svg>

         <span className='action-text' onClick={()=>handleNavigation('service')}>Zobacz</span>
         </button>
          </div>

        </div>
        <img src={serviceBg} alt="Sewis"></img>
      </div>
      <div className='divider'></div>
      <div className='offer-block right'>
      <div className='offer-content'>
          <h1 className='title'>
          Dystrybucja <br></br>części serwisowych
          </h1>
          <div className='descr'>
          <p className='info'>Nasz sklep oferuje szeroki asortyment części zamiennych do telefonów i komputerów. Tylko wysokiej jakości podzespoły, których sami używamy.
          Szybka dostawa i konsultacje pomogą Ci znaleźć wszystko, co potrzebne do naprawy sprzętu.
          Masz 14 dni na odstąpienie od umowy. Sprzedawca odpowiada za wadliwy towar przez 2 lata od momentu jego wydania.</p>
          <ul className='skills-list'>
            <li>Wysokiej jakości części zamienne</li>
            <li>Szybka dostawa</li> 
            <li>Profesjonalne konsultacje</li>
            <li>2 lata gwarancji na produkt</li>
          </ul>
          <button className='action'>
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.3251 8.70711C21.7156 8.31658 21.7156 7.68342 21.3251 7.29289L14.9611 0.928932C14.5706 0.538408 13.9375 0.538408 13.5469 0.928932C13.1564 1.31946 13.1564 1.95262 13.5469 2.34315L19.2038 8L13.5469 13.6569C13.1564 14.0474 13.1564 14.6805 13.5469 15.0711C13.9375 15.4616 14.5706 15.4616 14.9611 15.0711L21.3251 8.70711ZM0.96582 9H20.618V7H0.96582V9Z" fill="white"/>
        </svg>

         <span className='action-text'onClick={()=>handleNavigation('shop')}>Zobacz</span>
         </button>
          </div>
        </div>
        <img src={shopBg} alt="Sklep"></img>
      </div>
      </div>
      
    </main>
  )
}

export default HomePage;
