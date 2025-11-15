
import React, { useState } from 'react';
import { PrimaryButton } from './PrimaryButton';
import { ArrowLeftIcon } from './ArrowLeftIcon';
import { CarIcon } from './CarIcon';
import { MotorcycleIcon } from './MotorcycleIcon';
import { SecondaryButton } from './SecondaryButton';

interface DriverRegistrationStep2ScreenProps {
  onBackClick: () => void;
  onContinueClick: () => void;
}

const InputField = ({ label, type, placeholder, id }: { label: string, type: string, placeholder: string, id: string }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-zinc-700 text-left mb-2">
            {label}
        </label>
        <div className="relative">
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className="w-full px-4 py-3 bg-zinc-100 border-2 border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent transition"
                autoComplete="off"
            />
        </div>
    </div>
);

export const DriverRegistrationStep2Screen: React.FC<DriverRegistrationStep2ScreenProps> = ({ onBackClick, onContinueClick }) => {
    const [vehicleType, setVehicleType] = useState<'car' | 'moto' | null>(null);

    const commonButtonClasses = "w-full flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ease-in-out";
    const selectedButtonClasses = "bg-green-100 border-brand-green-600 text-brand-green-700";
    const unselectedButtonClasses = "bg-zinc-100 border-zinc-200 text-zinc-600 hover:bg-zinc-200 hover:border-zinc-300";

    return (
        <div className="p-6 flex flex-col justify-start min-h-screen">
            <header className="w-full max-w-sm mx-auto flex items-center mb-6">
                <button onClick={onBackClick} className="p-2 -ml-2 text-zinc-600 hover:text-zinc-900 rounded-full hover:bg-zinc-100 transition-colors" aria-label="Voltar">
                    <ArrowLeftIcon className="w-6 h-6" />
                </button>
            </header>

            <main className="w-full max-w-sm mx-auto flex-grow flex flex-col">
                <div className="text-left mb-6">
                    <h1 className="text-3xl font-bold text-zinc-800">Cadastre-se como Motorista</h1>
                </div>
                
                <div className="mb-6">
                    <p className="text-sm font-semibold text-zinc-600 text-left">PASSO 2 DE 3</p>
                    <div className="w-full bg-zinc-200 rounded-full h-2 mt-1">
                        <div className="bg-brand-green-600 h-2 rounded-full" style={{ width: '66.66%' }}></div>
                    </div>
                </div>

                <p className="text-zinc-500 mt-2 mb-6 text-left">Ótimo! Agora, fale sobre seu veículo.</p>

                <form className="space-y-4 flex-grow flex flex-col">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 text-left mb-2">
                            Qual o tipo do seu veículo?
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <button type="button" onClick={() => setVehicleType('car')} className={`${commonButtonClasses} ${vehicleType === 'car' ? selectedButtonClasses : unselectedButtonClasses}`}>
                                <CarIcon className="w-8 h-8" />
                                <span className="font-semibold">Carro</span>
                                <span className="text-xs text-center">(corridas e encomendas)</span>
                            </button>
                             <button type="button" onClick={() => setVehicleType('moto')} className={`${commonButtonClasses} ${vehicleType === 'moto' ? selectedButtonClasses : unselectedButtonClasses}`}>
                                <MotorcycleIcon className="w-8 h-8" />
                                <span className="font-semibold">Moto</span>
                                <span className="text-xs text-center">(moto-entrega e encomendas)</span>
                            </button>
                        </div>
                    </div>

                    <InputField id="plate" label="Placa do Veículo" type="text" placeholder="ABC1D23" />
                    <InputField id="model" label="Modelo" type="text" placeholder="Ex: Fiat Uno" />
                    <InputField id="color" label="Cor" type="text" placeholder="Ex: Branco" />
                    <InputField id="year" label="Ano de Fabricação" type="number" placeholder="Ex: 2019" />
                    
                    <div className="mt-auto pt-4 flex gap-4">
                        <div className="w-1/2">
                            <SecondaryButton type="button" onClick={onBackClick}>Voltar</SecondaryButton>
                        </div>
                        <div className="w-1/2">
                           <PrimaryButton type="button" onClick={onContinueClick}>
                                Continuar
                            </PrimaryButton>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
};
