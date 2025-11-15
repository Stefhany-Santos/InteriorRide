import React from 'react';
import { Menu, User, Search, Car, Motorcycle, Package } from 'lucide-react';

const PassengerHomeScreen: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center bg-white/80 backdrop-blur-sm">
        <button className="p-2 text-zinc-700 hover:text-zinc-900 rounded-full hover:bg-zinc-100 transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        <button className="p-2 text-zinc-700 hover:text-zinc-900 rounded-full hover:bg-zinc-100 transition-colors">
          <User className="w-6 h-6" />
        </button>
      </header>

      {/* Map Background (Stylized) */}
      <div className="flex-grow bg-gray-100 relative overflow-hidden">
        {/* Simple stylized map elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-green-50 opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gray-200 rounded-full opacity-50"></div>
          <div className="absolute w-1/2 h-1/2 bg-green-100 rounded-full opacity-50"></div>
          <div className="absolute w-4 h-4 bg-brand-green-600 rounded-full animate-pulse"></div> {/* User location dot */}
        </div>
      </div>

      {/* Bottom Sheet Fixed */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg p-6 space-y-6 max-h-[60vh] overflow-y-auto">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Para onde vamos?"
            className="w-full pl-12 pr-4 py-4 bg-zinc-100 border-2 border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent transition text-lg font-medium"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-zinc-500" />
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="flex flex-col items-center justify-center p-4 bg-green-50 border-2 border-brand-green-600 text-brand-green-700 rounded-xl shadow-sm hover:bg-green-100 transition-all duration-200 ease-in-out">
            <Car className="w-10 h-10 mb-2" />
            <span className="font-bold text-base text-center">Solicitar corrida</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 bg-green-50 border-2 border-brand-green-600 text-brand-green-700 rounded-xl shadow-sm hover:bg-green-100 transition-all duration-200 ease-in-out">
            <Motorcycle className="w-10 h-10 mb-2" />
            <span className="font-bold text-base text-center">Moto-entrega</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 bg-green-50 border-2 border-brand-green-600 text-brand-green-700 rounded-xl shadow-sm hover:bg-green-100 transition-all duration-200 ease-in-out">
            <Package className="w-10 h-10 mb-2" />
            <span className="font-bold text-base text-center">Enviar encomenda</span>
          </button>
        </div>

        {/* Motoristas Confiáveis */}
        <div>
          <h2 className="text-lg font-bold text-zinc-800 mb-4 text-left">Motoristas confiáveis</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {/* Example Driver Profiles */}
            {[
              { name: 'Sr. João', avatar: 'https://via.placeholder.com/48/4CAF50/FFFFFF?text=SJ' },
              { name: 'Dona Maria', avatar: 'https://via.placeholder.com/48/4CAF50/FFFFFF?text=DM' },
              { name: 'Pedro', avatar: 'https://via.placeholder.com/48/4CAF50/FFFFFF?text=P' },
              { name: 'Ana', avatar: 'https://via.placeholder.com/48/4CAF50/FFFFFF?text=A' },
              { name: 'Carlos', avatar: 'https://via.placeholder.com/48/4CAF50/FFFFFF?text=C' },
            ].map((driver, index) => (
              <div key={index} className="flex flex-col items-center flex-shrink-0 w-20">
                <img src={driver.avatar} alt={driver.name} className="w-12 h-12 rounded-full object-cover mb-1 border-2 border-brand-green-600" />
                <p className="text-xs text-zinc-700 text-center font-medium">{driver.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerHomeScreen;