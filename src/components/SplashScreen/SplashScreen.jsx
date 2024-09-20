import React, { useEffect, useState } from 'react';
import './SplashScreen.css';
import SplashLogo from '/images/Logo Splash Screen.png';

const SplashScreen = ({ setIsLoading }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Wait for the content to fully load
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true); // Start the fade-out animation
        setTimeout(() => setIsLoading(false), 1000); // Hide the splash screen after the animation
      }, 500); // Add slight delay to ensure a smooth transition
    };

    // Ensure the handler runs after the page content has loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, [setIsLoading]);

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="logo-container">
        <img src={SplashLogo} alt="logo" className="w-24" />
      </div>
    </div>
  );
};

export default SplashScreen;
