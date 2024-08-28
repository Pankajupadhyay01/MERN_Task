import React from 'react';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailCard from './Pages/DetailCard';
function App() {
  return (
    <div className="flex flex-col min-h-screen font-nunito">
      <NavBar />
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/card/:data' element={<DetailCard />} />
        </Routes>

      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
