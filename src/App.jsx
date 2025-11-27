import React from 'react';
import Menu from './Menu';
import Cart from './Cart';

export default function CoffeeShopApp() {
  return (
    <div className="min-h-screen bg-[#f5f3ea] text-[#4b2e05] p-10">
      <h1 className="text-4xl font-bold mb-6">☕ Coffee Shop</h1>
      <div className="flex flex-row gap-10">
        <Menu />
        <Cart />
      </div>
    </div>
  );
}