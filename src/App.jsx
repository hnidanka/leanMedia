import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './components/HomePage'
import Servise from './components/ServisePage';
import Shop from './components/ShopPage';
import Layout from './components/Layout';
import './styles/main.scss'

function App() {

  return (
    <div className='main-grid-container'>
      <Router>
       <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Servise />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Layout>
    </Router>
  </div>
  )
}

export default App
