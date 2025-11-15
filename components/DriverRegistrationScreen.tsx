
import React, { useState } from 'react';
import { PrimaryButton } from './PrimaryButton';
import { ArrowLeftIcon } from './ArrowLeftIcon';

interface DriverRegistrationScreenProps {
  onBackClick: () => void;
  onContinueClick: () => void;
}

interface InputFieldProps {
    label: string;
    type: string;
    placeholder: string;
    id: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ label, type, placeholder, id, value, onChange }: InputFieldProps) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-zinc-700 text-left mb-2">
            {label}
        </label>
        <div className="relative">
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 bg-zinc-100 border-2 border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent transition"
                autoComplete="off"
            />
        </div>
    </div>
);

export const DriverRegistrationScreen: React.FC<DriverRegistrationScreenProps> = ({ onBackClick, onContinueClick }) => {
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) {
            value = value.substring(0, 11);
        }
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        setCpf(value);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.substring(0, 11);

        if (value.length <= 2) {
            value = `(${value}`;
        } else if (value.length <= 7) {
            value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
        } else if (value.length <= 11) {
            value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`;
        }
        setPhone(value);
    };

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
                <p className="text-zinc-500 mt-2">Vamos começar seu cadastro!</p>
            </div>
            
            <div className="mb-6">
                <p className="text-sm font-semibold text-zinc-600 text-left">PASSO 1 DE 3</p>
                <div className="w-full bg-zinc-200 rounded-full h-2 mt-1">
                    <div className="bg-brand-green-600 h-2 rounded-full" style={{ width: '33.33%' }}></div>
                </div>
            </div>

            <form className="space-y-4 flex-grow flex flex-col">
                <InputField
                    id="full-name"
                    label="Nome Completo"
                    type="text"
                    placeholder="Seu nome completo"
                />
                <InputField
                    id="cpf"
                    label="CPF"
                    type="text"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={handleCpfChange}
                />
                <InputField
                    id="email"
                    label="E-mail"
                    type="email"
                    placeholder="seuemail@exemplo.com"
                />
                 <InputField
                    id="phone-number"
                    label="Telefone Celular"
                    type="tel"
                    placeholder="(XX) XXXXX-XXXX"
                    value={phone}
                    onChange={handlePhoneChange}
                />
                
                <div className="flex items-start pt-2">
                    <input id="terms" type="checkbox" className="h-4 w-4 text-brand-green-600 border-zinc-300 rounded focus:ring-brand-green-500 mt-1" />
                    <label htmlFor="terms" className="ml-3 text-sm text-zinc-600">
                        Li e aceito os <a href="#" className="font-semibold text-brand-green-600 hover:underline">Termos de Parceria</a> e <a href="#" className="font-semibold text-brand-green-600 hover:underline">Política de Privacidade</a>.
                    </label>
                </div>
                
                <div className="mt-auto pt-4">
                    <PrimaryButton type="button" onClick={onContinueClick}>
                        Continuar
                    </PrimaryButton>
                </div>
            </form>
        </main>
    </div>
  );
};
