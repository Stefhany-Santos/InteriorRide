
import React from 'react';
import { PrimaryButton } from './PrimaryButton';
import { ArrowLeftIcon } from './ArrowLeftIcon';

interface LoginWithPhoneScreenProps {
  onBackClick: () => void;
}

export const LoginWithPhoneScreen: React.FC<LoginWithPhoneScreenProps> = ({ onBackClick }) => {
  return (
    <div className="p-6 flex flex-col justify-start min-h-screen">
        <header className="w-full max-w-sm mx-auto flex items-center mb-8">
            <button onClick={onBackClick} className="p-2 -ml-2 text-zinc-600 hover:text-zinc-900 rounded-full hover:bg-zinc-100 transition-colors">
                <ArrowLeftIcon className="w-6 h-6" />
            </button>
        </header>

        <main className="w-full max-w-sm mx-auto flex-grow flex flex-col">
            <div className="text-left mb-8">
                <h1 className="text-3xl font-bold text-zinc-800">Entrar com telefone</h1>
                <p className="text-zinc-500 mt-2">Digite seu número de celular para receber um código de acesso por SMS.</p>
            </div>

            <form className="space-y-5 flex-grow flex flex-col">
                <div>
                    <label htmlFor="phone-number" className="block text-sm font-medium text-zinc-700 text-left mb-2">
                        Número de Celular
                    </label>
                    <div className="flex items-center bg-zinc-100 border-2 border-zinc-200 rounded-xl focus-within:ring-2 focus-within:ring-brand-green-500 focus-within:border-transparent transition">
                        <span className="px-4 text-zinc-500 border-r-2 border-zinc-200">+55</span>
                        <input
                            type="tel"
                            id="phone-number"
                            placeholder="(XX) XXXXX-XXXX"
                            className="w-full px-4 py-3 bg-transparent focus:outline-none"
                        />
                    </div>
                </div>
                
                <div className="mt-auto pt-4">
                     <PrimaryButton type="submit">
                        Enviar código
                    </PrimaryButton>
                </div>
            </form>
            
             <div className="text-center py-4">
                <p className="text-xs text-zinc-400">
                    Custos de SMS podem ser aplicados.
                </p>
            </div>
        </main>
    </div>
  );
};
