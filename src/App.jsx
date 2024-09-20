import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen/SplashScreen';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading && <SplashScreen setIsLoading={setIsLoading} />}
      <div className={`app-content ${isLoading ? 'hidden' : ''}`}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
