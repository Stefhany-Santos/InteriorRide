
import React, { useState } from 'react';
import { PrimaryButton } from './PrimaryButton';
import { ArrowLeftIcon } from './ArrowLeftIcon';
import { EyeIcon } from './EyeIcon';
import { EyeSlashIcon } from './EyeSlashIcon';

interface CreateAccountScreenProps {
  onBackClick: () => void;
  onLoginClick: () => void;
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

export const CreateAccountScreen: React.FC<CreateAccountScreenProps> = ({ onBackClick, onLoginClick }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="p-6 flex flex-col justify-start min-h-screen">
        <header className="w-full max-w-sm mx-auto flex items-center mb-6">
            <button onClick={onBackClick} className="p-2 -ml-2 text-zinc-600 hover:text-zinc-900 rounded-full hover:bg-zinc-100 transition-colors">
                <ArrowLeftIcon className="w-6 h-6" />
            </button>
        </header>

        <main className="w-full max-w-sm mx-auto flex-grow flex flex-col">
            <div className="text-left mb-6">
                <h1 className="text-3xl font-bold text-zinc-800">Criar sua conta</h1>
                <p className="text-zinc-500 mt-2">É rápido e fácil!</p>
            </div>

            <form className="space-y-4">
                <InputField
                    id="full-name"
                    label="Nome Completo"
                    type="text"
                    placeholder="Seu nome completo"
                />
                <InputField
                    id="email"
                    label="E-mail"
                    type="email"
                    placeholder="seuemail@exemplo.com"
                />
                <InputField
                    id="phone"
                    label="Telefone Celular"
                    type="tel"
                    placeholder="(XX) XXXXX-XXXX"
                />
                <InputField
                    id="create-password"
                    label="Criar Senha"
                    type={showPassword ? "text" : "password"}
                    placeholder="Crie uma senha forte"
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
                <InputField
                    id="confirm-password"
                    label="Confirmar Senha"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirme sua senha"
                >
                     <button 
                        type="button" 
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="text-zinc-500 hover:text-zinc-700"
                        aria-label={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}
                    >
                        {showConfirmPassword ? <EyeSlashIcon className="h-6 w-6" /> : <EyeIcon className="h-6 w-6" />}
                    </button>
                </InputField>
                
                <div className="flex items-start pt-2">
                    <input id="terms" type="checkbox" className="h-4 w-4 text-brand-green-600 border-zinc-300 rounded focus:ring-brand-green-500 mt-1" />
                    <label htmlFor="terms" className="ml-3 text-sm text-zinc-600">
                        Li e aceito os <a href="#" className="font-semibold text-brand-green-600 hover:underline">Termos de Uso</a> e <a href="#" className="font-semibold text-brand-green-600 hover:underline">Política de Privacidade</a>.
                    </label>
                </div>
                
                <div className="pt-4">
                    <PrimaryButton type="submit">
                        Criar Conta
                    </PrimaryButton>
                </div>
            </form>
            
            <div className="mt-auto text-center py-4">
                <p className="text-zinc-600">
                    Já tem conta?{' '}
                    <button onClick={onLoginClick} className="font-bold text-brand-green-600 hover:underline">
                        Faça Login
                    </button>
                </p>
            </div>
        </main>
    </div>
  );
};
