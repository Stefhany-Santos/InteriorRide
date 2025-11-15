
import React, { useState } from 'react';
import { PrimaryButton } from './PrimaryButton';
import { ArrowLeftIcon } from './ArrowLeftIcon';
import { EyeIcon } from './EyeIcon';
import { EyeSlashIcon } from './EyeSlashIcon';

interface LoginScreenProps {
  onBackClick: () => void;
  onCreateAccountClick: () => void;
}

interface InputFieldProps {
    label: string;
    type: string;
    placeholder: string;
    id: string;
    children?: React.ReactNode;
}

const InputField = ({ label, type, placeholder, id, children }: InputFieldProps) => (
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
            />
            {children && <div className="absolute inset-y-0 right-0 pr-3 flex items-center">{children}</div>}
        </div>
    </div>
);

export const LoginScreen: React.FC<LoginScreenProps> = ({ onBackClick, onCreateAccountClick }) => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="p-6 flex flex-col justify-start min-h-screen">
        <header className="w-full max-w-sm mx-auto flex items-center mb-8">
            <button onClick={onBackClick} className="p-2 -ml-2 text-zinc-600 hover:text-zinc-900 rounded-full hover:bg-zinc-100 transition-colors">
                <ArrowLeftIcon className="w-6 h-6" />
            </button>
        </header>

        <main className="w-full max-w-sm mx-auto flex-grow flex flex-col">
            <div className="text-left mb-8">
                <h1 className="text-3xl font-bold text-zinc-800">Entrar na sua conta</h1>
                <p className="text-zinc-500 mt-2">Bem-vindo(a) de volta!</p>
            </div>

            <form className="space-y-5">
                <InputField
                    id="email-phone"
                    label="E-mail ou Telefone"
                    type="text"
                    placeholder="seuemail@exemplo.com"
                />
                 <div>
                    <InputField
                        id="password"
                        label="Senha"
                        type={showPassword ? "text" : "password"}
                        placeholder="Sua senha"
                    >
                        <button 
                            type="button" 
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-zinc-500 hover:text-zinc-700"
                            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                        >
                            {showPassword ? <EyeSlashIcon className="h-6 w-6" /> : <EyeIcon className="h-6 w-6" />}
                        </button>
                    </InputField>
                     <a href="#" className="block text-sm font-semibold text-brand-green-600 hover:underline mt-2 text-right">
                        Esqueci minha senha
                    </a>
                </div>
                <div className="pt-4">
                    <PrimaryButton type="submit">
                        Entrar
                    </PrimaryButton>
                </div>
            </form>
            
            <div className="mt-auto text-center py-4">
                <p className="text-zinc-600">
                    Não tem conta?{' '}
                    <button onClick={onCreateAccountClick} className="font-bold text-brand-green-600 hover:underline">
                        Criar conta
                    </button>
                </p>
            </div>
        </main>
    </div>
  );
};
