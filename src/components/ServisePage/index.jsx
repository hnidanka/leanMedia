import bannerImg from '../../assets/images/banner-img.jpg';
import fourIcon from '../../assets/favicon/4-icon.png';
import cooperationIcon from '../../assets/favicon/cooperation-icon.png';
import offersIcon from '../../assets/favicon/offers-icon.png';
import qualityIcon from '../../assets/favicon/quality-icon.png';
import smartphoneIcon from '../../assets/favicon/smartphone.png';
import tabletIcon from '../../assets/favicon/tablet.png';
import smartwatchIcon from '../../assets/favicon/smartwatch.png';
import laptopIcon from '../../assets/favicon/laptop.png';
import controllerIcon from '../../assets/favicon/controller.png';
import computerIcon from '../../assets/favicon/computer.png';
import './style.scss'
import { useEffect, useState } from 'react';
import Card from './Card/indej';


function ServisePage () {
  const devices = [
    {id: 1,src: smartphoneIcon, alt: 'Smartphone', text: 'Smartfony'},
    {id: 2, src: tabletIcon, alt: 'Tablet', text: 'Tablety'},
    {id: 3,src: laptopIcon, alt: 'Laptop', text: 'Laptopy'},
    {id: 4, src: computerIcon, alt: 'Computer', text: 'Komputery'},
    {id: 5, src: smartwatchIcon, alt: 'Smartwatch', text: 'Smartwatche'},
    {id: 6, src: controllerIcon, alt: 'Controller', text: 'Konsole Gamingowe'}
  ];
  const numbers = [89,75];
  const [currIndx, setCurrIndx] = useState([0,0]);
  let intervaiId;
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
  }
  const counter = ()=>{
    setCurrIndx((prev)=>{
      const updatedIndx = [...prev];
      let done = true;
      for(let i = 0; i< updatedIndx.length; i++){
        if(updatedIndx[i]<numbers[i]){
          updatedIndx[i]++;
          done=false;
        }
      }
      if(done){
        clearInterval(intervaiId)
      }
      return updatedIndx;
    })
  }
  const startCounter = (entries, observer)=>{
    entries.forEach(entry => {
      if(entry.isIntersecting){
        intervaiId = setInterval(()=>{
        counter()
      },15);
   observer.disconnect(); 
      }
    });
  }
  const observer = new IntersectionObserver(startCounter,options);

useEffect(()=>{
  const targetSection = document.querySelector('#about-us-numbers');
  observer.observe(targetSection);
},[]) 
    return (
      <main>
      <section id="service-banner">
        <div className="banner-img">
          <img src={bannerImg} alt='lean Service image'></img>
        </div>
        <div className="skills">
        <div className='item-block'>
            <img src={cooperationIcon} alt='cooperation icon' className='item-icon'></img>
            <p className='text'>Współpraca<br></br>B2B</p>
          </div>
          <div className='item-block'>
            <img src={offersIcon} alt='offers icon' className='item-icon'></img>
            <p className='text'>Szeroka oferta<br></br>serwisowa</p>
          </div>
          <div className='item-block'>
            <img src={fourIcon} alt='number of years icon' className='item-icon'></img>
            <p className='text'>Lata<br></br>doświadczenia</p>
          </div>
          <div className='item-block'>
            <img src={qualityIcon} alt='quality icon' className='item-icon'></img>
            <p className='text'>Wysoka<br></br>jakość</p>
          </div>
        </div>
        <button className='call-to-action'>Umów naprawę</button>
        </section>
        <section id="about-us-numbers">
        <div className='divider'></div>
          <h1>O nas w liczbach</h1>
          <div className='content-container'>
            <div className='item-block'>
              <p className='number-text'>&gt;
                <span className='number'>{currIndx[0]}</span>
                %
              </p>
              <p className='descr'>Napraw realizujemy w ciągu 24 godzin</p>
            </div>
            <div className='item-block'>
              <p className='number-text'>&gt;
                <span className='number'>1.5</span>
                K
              </p>
              <p className='descr'>Napraw zrealizowaliśmy</p>
            </div>
            <div className='item-block'>
              <p className='number-text'>&gt;
                <span className='number'>{currIndx[1]}</span>
                %
              </p>
              <p className='descr'>Klientów wraca do nas</p>
            </div>
          </div>
        </section>
        <section id="served-devices">
        <div className='divider'></div>
          <h1>Serwisowane urządzenia</h1>
          <div className='content-container'> 
            {devices.map(((item)=>(
              <div className='item-block' key={item.id}>
                <div className='icon-block'>
                  <img src={item.src} alt={item.alt}></img>
                </div>
                <p className='text'>{item.text}</p>
              </div>
            )))}
          </div>
        </section>
        <section id="how-we-work">
        <div className='divider'></div>
        <h1>Jak pracujemy?</h1>
        <div className='content-container'>
          <Card id="01" text="Przynosisz urządzenie do naszego serwisu."/>
          <Card id="02" text="Przeprowadzamy diagnostykę i uzgadniamy z Tobą plan naprawy."/>
          <Card id="03" text="Naprawiamy usterkę w możliwie najkrótszym czasie i zwracamy urządzenie w idealnym stanie."/>
          </div>
        </section>
      </main>
    );
  }
   export default ServisePage;