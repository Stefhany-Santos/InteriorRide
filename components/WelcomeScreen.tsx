
import React from 'react';
import { CarMotoIllustration } from './CarMotoIllustration';
import { PhoneIcon } from './PhoneIcon';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import { DriverIcon } from './DriverIcon';

interface WelcomeScreenProps {
  onLoginClick: () => void;
  onCreateAccountClick: () => void;
  onLoginWithPhoneClick: () => void;
  onDriverLoginClick: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onLoginClick, onCreateAccountClick, onLoginWithPhoneClick, onDriverLoginClick }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <main className="w-full max-w-sm flex flex-col items-center text-center">
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-brand-green-600">
            InteriorRide
          </h1>
          <p className="text-zinc-500 mt-2">Sua viagem, do nosso jeito.</p>
        </header>

        <div className="w-full max-w-xs mb-12 h-40 flex items-center justify-center">
           <CarMotoIllustration />
        </div>

        <div className="w-full space-y-4">
          <PrimaryButton onClick={onLoginClick}>
            Entrar
          </PrimaryButton>
          <SecondaryButton onClick={onCreateAccountClick}>
            Criar conta
          </SecondaryButton>
        </div>

        <div className="mt-8">
          <button onClick={onLoginWithPhoneClick} className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors duration-200">
            <PhoneIcon className="w-5 h-5" />
            <span className="font-semibold">Entrar com telefone</span>
          </button>
        </div>
        
        <div className="w-full mt-16 pt-8 border-t border-zinc-200">
           <button onClick={onDriverLoginClick} className="w-full flex items-center justify-center gap-3 bg-zinc-100 text-zinc-700 font-bold text-md py-4 px-6 rounded-xl hover:bg-zinc-200 focus:outline-none focus:ring-4 focus:ring-zinc-500/50 transform active:scale-95 transition-all duration-150 ease-in-out">
            <DriverIcon className="w-6 h-6" />
            <span>Área do Motorista</span>
          </button>
        </div>
        
      </main>
    </div>
  );
}
