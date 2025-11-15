
import React from 'react';
import { PrimaryButton } from './PrimaryButton';
import { ArrowLeftIcon } from './ArrowLeftIcon';
import { CameraIcon } from './CameraIcon';
import { CreditCardIcon } from './CreditCardIcon';
import { FileTextIcon } from './FileTextIcon';

interface DriverRegistrationStep3ScreenProps {
  onBackClick: () => void;
  onFinishClick: () => void;
}

const UploadButton = ({ icon, title, buttonText, requirement }: { icon: React.ReactNode, title: string, buttonText: string, requirement?: string }) => (
    <div>
        <label className="block text-sm font-medium text-zinc-700 text-left mb-2">
            {title}
        </label>
        <button type="button" className="w-full flex items-center justify-center gap-3 text-zinc-700 font-semibold text-md py-4 px-6 rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50 hover:bg-zinc-100 hover:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand-green-500 transition-all duration-200">
            {icon}
            <span>{buttonText}</span>
        </button>
        {requirement && <p className="text-xs text-zinc-500 mt-2 text-left">{requirement}</p>}
    </div>
);


export const DriverRegistrationStep3Screen: React.FC<DriverRegistrationStep3ScreenProps> = ({ onBackClick, onFinishClick }) => {
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
                    <p className="text-sm font-semibold text-zinc-600 text-left">PASSO 3 DE 3</p>
                    <div className="w-full bg-zinc-200 rounded-full h-2 mt-1">
                        <div className="bg-brand-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                </div>

                <p className="text-zinc-500 mt-2 mb-6 text-left">Estamos quase lá! Precisamos de alguns documentos.</p>

                <div className="space-y-6 flex-grow flex flex-col">
                    <UploadButton 
                        icon={<CameraIcon className="w-6 h-6" />} 
                        title="Sua Foto de Perfil (Selfie)"
                        buttonText="Tirar Foto"
                        requirement="Uma foto nítida, sem boné ou óculos escuros."
                    />
                    <UploadButton 
                        icon={<CreditCardIcon className="w-6 h-6" />} 
                        title="Sua CNH (Frente e Verso)"
                        buttonText="Enviar foto da CNH"
                        requirement="Deve conter a observação 'Exerce Atividade Remunerada' (EAR)."
                    />
                    <UploadButton 
                        icon={<FileTextIcon className="w-6 h-6" />} 
                        title="Documento do Veículo (CRLV)"
                        buttonText="Enviar foto do Documento"
                    />
                    
                    <div className="mt-auto pt-4">
                        <PrimaryButton type="button" onClick={onFinishClick}>
                            Finalizar Cadastro e Enviar para Análise
                        </PrimaryButton>
                    </div>
                </div>
            </main>
        </div>
    );
};
