import Header from '../Header';
import Footer from '../Footer';
import { useRef } from 'react';
function Layout({ children }) {
 const footerRef = useRef(null);

const scrollToFooter=()=>{
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  }
    return (
      <>
        <Header scrollToFooter={scrollToFooter}/>
        {children}
        <Footer footerRef={footerRef}/>
      </>
    );
  }

export default Layout;