
import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { LoginScreen } from './components/LoginScreen';
import { CreateAccountScreen } from './components/CreateAccountScreen';
import { LoginWithPhoneScreen } from './components/LoginWithPhoneScreen';

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

  return (
    <div className="bg-white min-h-screen font-sans text-zinc-800">
      {currentScreen === 'welcome' && <WelcomeScreen onLoginClick={navigateToLogin} onCreateAccountClick={navigateToCreateAccount} onLoginWithPhoneClick={navigateToLoginWithPhone} />}
      {currentScreen === 'login' && <LoginScreen onBackClick={navigateToWelcome} onCreateAccountClick={navigateToCreateAccount} />}
      {currentScreen === 'createAccount' && <CreateAccountScreen onBackClick={navigateToWelcome} onLoginClick={navigateToLogin} />}
      {currentScreen === 'loginWithPhone' && <LoginWithPhoneScreen onBackClick={navigateToWelcome} />}
    </div>
  );
}

export default App;
