
import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { LoginScreen } from './components/LoginScreen';
import { CreateAccountScreen } from './components/CreateAccountScreen';
import { LoginWithPhoneScreen } from './components/LoginWithPhoneScreen';
import { DriverLoginScreen } from './components/DriverLoginScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  const navigateToLogin = () => {
    setCurrentScreen('login');
  };

  const navigateToWelcome = () => {
    setCurrentScreen('welcome');
  };

  const navigateToCreateAccount = () => {
    setCurrentScreen('createAccount');
  };

  const navigateToLoginWithPhone = () => {
    setCurrentScreen('loginWithPhone');
  };

  const navigateToDriverLogin = () => {
    setCurrentScreen('driverLogin');
  };

  return (
    <div className="bg-white min-h-screen font-sans text-zinc-800">
      {currentScreen === 'welcome' && <WelcomeScreen onLoginClick={navigateToLogin} onCreateAccountClick={navigateToCreateAccount} onLoginWithPhoneClick={navigateToLoginWithPhone} onDriverLoginClick={navigateToDriverLogin} />}
      {currentScreen === 'login' && <LoginScreen onBackClick={navigateToWelcome} onCreateAccountClick={navigateToCreateAccount} />}
      {currentScreen === 'createAccount' && <CreateAccountScreen onBackClick={navigateToWelcome} onLoginClick={navigateToLogin} />}
      {currentScreen === 'loginWithPhone' && <LoginWithPhoneScreen onBackClick={navigateToWelcome} />}
      {currentScreen === 'driverLogin' && <DriverLoginScreen onBackClick={navigateToWelcome} onRegisterClick={navigateToCreateAccount} />}
    </div>
  );
}

export default App;
