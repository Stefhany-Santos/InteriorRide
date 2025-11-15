
import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { LoginScreen } from './components/LoginScreen';
import { CreateAccountScreen } from './components/CreateAccountScreen';
import { LoginWithPhoneScreen } from './components/LoginWithPhoneScreen';
import { DriverLoginScreen } from './components/DriverLoginScreen';
import { DriverRegistrationScreen } from './components/DriverRegistrationScreen';
import { DriverRegistrationStep2Screen } from './components/DriverRegistrationStep2Screen';
import { DriverRegistrationStep3Screen } from './components/DriverRegistrationStep3Screen';

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

  const navigateToDriverRegistration = () => {
    setCurrentScreen('driverRegistration');
  };

  const navigateToDriverRegistrationStep2 = () => {
    setCurrentScreen('driverRegistrationStep2');
  };

  const navigateToDriverRegistrationStep3 = () => {
    setCurrentScreen('driverRegistrationStep3');
  };

  const handleFinishRegistration = () => {
    // Here you would typically submit all collected data.
    // For now, we navigate back to the welcome screen.
    setCurrentScreen('welcome');
  };

  return (
    <div className="bg-white min-h-screen font-sans text-zinc-800">
      {currentScreen === 'welcome' && <WelcomeScreen onLoginClick={navigateToLogin} onCreateAccountClick={navigateToCreateAccount} onLoginWithPhoneClick={navigateToLoginWithPhone} onDriverLoginClick={navigateToDriverLogin} />}
      {currentScreen === 'login' && <LoginScreen onBackClick={navigateToWelcome} onCreateAccountClick={navigateToCreateAccount} />}
      {currentScreen === 'createAccount' && <CreateAccountScreen onBackClick={navigateToWelcome} onLoginClick={navigateToLogin} />}
      {currentScreen === 'loginWithPhone' && <LoginWithPhoneScreen onBackClick={navigateToWelcome} />}
      {currentScreen === 'driverLogin' && <DriverLoginScreen onBackClick={navigateToWelcome} onRegisterClick={navigateToDriverRegistration} />}
      {currentScreen === 'driverRegistration' && <DriverRegistrationScreen onBackClick={navigateToDriverLogin} onContinueClick={navigateToDriverRegistrationStep2} />}
      {currentScreen === 'driverRegistrationStep2' && <DriverRegistrationStep2Screen onBackClick={navigateToDriverRegistration} onContinueClick={navigateToDriverRegistrationStep3} />}
      {currentScreen === 'driverRegistrationStep3' && <DriverRegistrationStep3Screen onBackClick={navigateToDriverRegistrationStep2} onFinishClick={handleFinishRegistration} />}
    </div>
  );
}

export default App;
