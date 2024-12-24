import './style.scss';
import './modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';



function Footer () {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const formStatus = {
    loading: "Ładowanie",
    success: "Skontaktujemy si z tobą",
    failure: "Ooops coś poszło nie tak..."
  }
  
  const openModal =(message)=>{
    setModalIsOpen(true);
    setModalContent(message);
  }
  const closeModal =()=>{
    setModalIsOpen(false);
  }

  Modal.setAppElement('#root');

  const handleSubmit = (e)=>{
    e.preventDefault();
    openModal(formStatus.loading);
    emailjs.init(import.meta.env.VITE_EMAILJS_KEY);
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    emailjs.sendForm(serviceId, templateId, e.target)
                .then(() => {
                    openModal(formStatus.success);
                    e.target.reset(); 
                }, (error) => {
                  openModal(formStatus.failure);
                })
                .finally(()=>{
                  setTimeout(()=>{
                    closeModal();
                  },5000)
                })
              }
    
  return (
    <footer>
              <div className='divider'></div>

      <div className='content'>
        <div className="descr-contact">
          <h2>Kontaktuj się z nami bez obaw</h2>
          <p>Masz pytania dotyczące naprawy komputerów, telefonów, czy innych urządzeń? 
              Wypełnij formularz kontaktowy lub skorzystaj z opcji telefonicznej, a nasz zespół doświadczonych 
              specjalistów postara się pomóc Ci najszybciej, jak to możliwe.
          </p>
          </div>
          <div className="map-container">
            <iframe
              src="https://snazzymaps.com/embed/668616"
              width="600px"
              height="350px"
              style={{ border: "none" }}
              title="Custom Map"
              allow="fullscreen"
            />
        </div>
      </div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
        <input type="text" id="name" name="name" required="" placeholder='Imie'/>
        <input type="text" id="surname" name="surname" required="" placeholder='Nazwisko'/>
        <input type="email" id="email" name="email" required="" placeholder='E-mail'/>
        <input type="phone" id="phone-number" name="phone" required="" placeholder='Numer kontaktowy'/>
        <textarea name="message" id="textarea" rows="10" cols="50" required="" placeholder='Podaj szczegóły'></textarea>
        <button className="call-to-action form-submit-btn" type="submit">Umów naprawę</button>
      </form>
    </div>
    
      <div className='contact-data-container'>
        <div className='divider'></div>
        <div className='content'>
        <div className='adress'>
          <h3>Nasz adres</h3>
          <p>20-105 Lublin<br></br>Zamojska 16</p>
        </div>
        <div className='type-of-contact'>
          <h3>Kontakt</h3>
          <p>gsgsg@gmail.com<br></br>+48 622 610 923</p>
        </div>
        <div className='social-media'>
          <svg className='facebook' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 16.098C32 7.2071 24.8369 0 16.002 0C7.1631 0.00199975 0 7.2071 0 16.1C0 24.133 5.85127 30.7922 13.4983 32V20.7514H9.43882V16.1H13.5023V12.5504C13.5023 8.51694 15.892 6.28921 19.5456 6.28921C21.2973 6.28921 23.1271 6.60318 23.1271 6.60318V10.5627H21.1094C19.1236 10.5627 18.5037 11.8045 18.5037 13.0784V16.098H22.9391L22.2312 20.7494H18.5017V31.998C26.1487 30.7902 32 24.131 32 16.098Z" fill="white" fillOpacity="0.8"/>
          </svg>
          <Link to="https://www.instagram.com/leanservicepl?igsh=ejQxdXBkMGJpaG54">
          <svg className='instagram' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C11.658 0 11.112 0.02 9.406 0.096C7.7 0.176 6.538 0.444 5.52 0.84C4.45169 1.24065 3.48428 1.8708 2.686 2.686C1.8708 3.48428 1.24065 4.45169 0.84 5.52C0.444 6.536 0.174 7.7 0.096 9.4C0.02 11.11 0 11.654 0 16.002C0 20.346 0.02 20.89 0.096 22.596C0.176 24.3 0.444 25.462 0.84 26.48C1.25 27.532 1.796 28.424 2.686 29.314C3.574 30.204 4.466 30.752 5.518 31.16C6.538 31.556 7.698 31.826 9.402 31.904C11.11 31.98 11.654 32 16 32C20.346 32 20.888 31.98 22.596 31.904C24.298 31.824 25.464 31.556 26.482 31.16C27.5496 30.7591 28.5163 30.129 29.314 29.314C30.204 28.424 30.75 27.532 31.16 26.48C31.554 25.462 31.824 24.3 31.904 22.596C31.98 20.89 32 20.346 32 16C32 11.654 31.98 11.11 31.904 9.402C31.824 7.7 31.554 6.536 31.16 5.52C30.7593 4.45169 30.1292 3.48428 29.314 2.686C28.5157 1.8708 27.5483 1.24065 26.48 0.84C25.46 0.444 24.296 0.174 22.594 0.096C20.886 0.02 20.344 0 15.996 0H16ZM14.566 2.884H16.002C20.274 2.884 20.78 2.898 22.466 2.976C24.026 3.046 24.874 3.308 25.438 3.526C26.184 3.816 26.718 4.164 27.278 4.724C27.838 5.284 28.184 5.816 28.474 6.564C28.694 7.126 28.954 7.974 29.024 9.534C29.102 11.22 29.118 11.726 29.118 15.996C29.118 20.266 29.102 20.774 29.024 22.46C28.954 24.02 28.692 24.866 28.474 25.43C28.2157 26.1238 27.8065 26.7516 27.276 27.268C26.716 27.828 26.184 28.174 25.436 28.464C24.876 28.684 24.028 28.944 22.466 29.016C20.78 29.092 20.274 29.11 16.002 29.11C11.73 29.11 11.222 29.092 9.536 29.016C7.976 28.944 7.13 28.684 6.566 28.464C5.87167 28.2065 5.2432 27.798 4.726 27.268C4.19455 26.7512 3.78466 26.1227 3.526 25.428C3.308 24.866 3.046 24.018 2.976 22.458C2.9 20.772 2.884 20.266 2.884 15.992C2.884 11.718 2.9 11.216 2.976 9.53C3.048 7.97 3.308 7.122 3.528 6.558C3.818 5.812 4.166 5.278 4.726 4.718C5.286 4.158 5.818 3.812 6.566 3.522C7.13 3.302 7.976 3.042 9.536 2.97C11.012 2.902 11.584 2.882 14.566 2.88V2.884ZM24.542 5.54C24.2899 5.54 24.0402 5.58966 23.8072 5.68615C23.5743 5.78264 23.3626 5.92407 23.1844 6.10236C23.0061 6.28064 22.8646 6.4923 22.7682 6.72525C22.6717 6.95819 22.622 7.20786 22.622 7.46C22.622 7.71214 22.6717 7.96181 22.7682 8.19475C22.8646 8.4277 23.0061 8.63936 23.1844 8.81765C23.3626 8.99593 23.5743 9.13736 23.8072 9.23385C24.0402 9.33034 24.2899 9.38 24.542 9.38C25.0512 9.38 25.5396 9.17772 25.8996 8.81765C26.2597 8.45757 26.462 7.96922 26.462 7.46C26.462 6.95078 26.2597 6.46242 25.8996 6.10236C25.5396 5.74229 25.0512 5.54 24.542 5.54ZM16.002 7.784C14.9121 7.767 13.8298 7.96697 12.818 8.37228C11.8061 8.77759 10.885 9.38014 10.1083 10.1448C9.33157 10.9096 8.71473 11.8211 8.29368 12.8265C7.87264 13.8319 7.6558 14.911 7.6558 16.001C7.6558 17.091 7.87264 18.1701 8.29368 19.1755C8.71473 20.1809 9.33157 21.0924 10.1083 21.8572C10.885 22.6219 11.8061 23.2244 12.818 23.6297C13.8298 24.035 14.9121 24.235 16.002 24.218C18.1591 24.1843 20.2164 23.3038 21.73 21.7665C23.2435 20.2292 24.0918 18.1583 24.0918 16.001C24.0918 13.8437 23.2435 11.7728 21.73 10.2355C20.2164 8.69817 18.1591 7.81765 16.002 7.784ZM16.002 10.666C16.7025 10.666 17.3961 10.804 18.0432 11.072C18.6904 11.3401 19.2784 11.733 19.7737 12.2283C20.269 12.7236 20.6619 13.3116 20.93 13.9588C21.198 14.6059 21.336 15.2995 21.336 16C21.336 16.7005 21.198 17.3941 20.93 18.0412C20.6619 18.6884 20.269 19.2764 19.7737 19.7717C19.2784 20.267 18.6904 20.6599 18.0432 20.928C17.3961 21.196 16.7025 21.334 16.002 21.334C14.5873 21.334 13.2306 20.772 12.2303 19.7717C11.23 18.7714 10.668 17.4147 10.668 16C10.668 14.5853 11.23 13.2286 12.2303 12.2283C13.2306 11.228 14.5873 10.666 16.002 10.666Z" fill="white" fillOpacity="0.8"/>
          </svg>
          </Link>
          <svg className='cart' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1.06667C0 0.783769 0.112384 0.512458 0.312429 0.312419C0.512474 0.112381 0.783793 0 1.0667 0H4.2668C4.50474 6.57312e-05 4.73583 0.0796815 4.92331 0.226186C5.1108 0.372691 5.24392 0.577672 5.3015 0.808533L6.16552 4.26667H30.9343C31.0909 4.26681 31.2456 4.30145 31.3873 4.36811C31.5291 4.43477 31.6544 4.53183 31.7544 4.65238C31.8543 4.77294 31.9266 4.91403 31.9659 5.06564C32.0052 5.21725 32.0106 5.37565 31.9818 5.5296L28.7817 22.5963C28.7359 22.8407 28.6062 23.0615 28.4149 23.2204C28.2237 23.3793 27.9829 23.4664 27.7342 23.4667H8.5336C8.28491 23.4664 8.04412 23.3793 7.85285 23.2204C7.66158 23.0615 7.53186 22.8407 7.4861 22.5963L4.28813 5.5616L3.43477 2.13333H1.0667C0.783793 2.13333 0.512474 2.02095 0.312429 1.82091C0.112384 1.62088 0 1.34956 0 1.06667ZM10.667 23.4667C9.53537 23.4667 8.45009 23.9162 7.64991 24.7163C6.84973 25.5165 6.4002 26.6017 6.4002 27.7333C6.4002 28.8649 6.84973 29.9502 7.64991 30.7503C8.45009 31.5505 9.53537 32 10.667 32C11.7986 32 12.8839 31.5505 13.6841 30.7503C14.4843 29.9502 14.9338 28.8649 14.9338 27.7333C14.9338 26.6017 14.4843 25.5165 13.6841 24.7163C12.8839 23.9162 11.7986 23.4667 10.667 23.4667ZM25.6008 23.4667C24.4692 23.4667 23.3839 23.9162 22.5837 24.7163C21.7835 25.5165 21.334 26.6017 21.334 27.7333C21.334 28.8649 21.7835 29.9502 22.5837 30.7503C23.3839 31.5505 24.4692 32 25.6008 32C26.7324 32 27.8177 31.5505 28.6179 30.7503C29.4181 29.9502 29.8676 28.8649 29.8676 27.7333C29.8676 26.6017 29.4181 25.5165 28.6179 24.7163C27.8177 23.9162 26.7324 23.4667 25.6008 23.4667ZM10.667 25.6C11.2328 25.6 11.7754 25.8248 12.1755 26.2248C12.5756 26.6249 12.8004 27.1675 12.8004 27.7333C12.8004 28.2991 12.5756 28.8418 12.1755 29.2418C11.7754 29.6419 11.2328 29.8667 10.667 29.8667C10.1012 29.8667 9.55855 29.6419 9.15846 29.2418C8.75837 28.8418 8.5336 28.2991 8.5336 27.7333C8.5336 27.1675 8.75837 26.6249 9.15846 26.2248C9.55855 25.8248 10.1012 25.6 10.667 25.6ZM25.6008 25.6C26.1666 25.6 26.7092 25.8248 27.1093 26.2248C27.5094 26.6249 27.7342 27.1675 27.7342 27.7333C27.7342 28.2991 27.5094 28.8418 27.1093 29.2418C26.7092 29.6419 26.1666 29.8667 25.6008 29.8667C25.035 29.8667 24.4923 29.6419 24.0923 29.2418C23.6922 28.8418 23.4674 28.2991 23.4674 27.7333C23.4674 27.1675 23.6922 26.6249 24.0923 26.2248C24.4923 25.8248 25.035 25.6 25.6008 25.6Z" fill="white" fillOpacity="0.8"/>
          </svg>
        </div>
        </div>
        
      </div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Full Screen Modal"
        className="fullscreen-modal"
        overlayClassName="fullscreen-modal-overlay"
      >
          {modalContent === formStatus.loading ?(
            <div className='content'>
            <div className="loader">
            <span className="loader-text">{modalContent}</span>
              <span className="load"></span>
          </div>
          </div>
          ):(
            <div className='content'>
              <div className='message'>
              {modalContent}
              </div>
            <div className='close-modal' onClick={closeModal}>
            <FontAwesomeIcon icon={faCircleXmark} size="2x" color='white'/>
            </div>
            </div>
          )}
      </Modal>
       </footer>
  );
}
 export default Footer;
