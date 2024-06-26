"use client";

import React from "react";

interface ICartContext {
  items: ICartItem[];
  setItems: React.Dispatch<React.SetStateAction<ICartItem[]>>;
}

export interface ICartItem {
  id: string;
  name: string;
  basePrice: number;
  imagePath: string;
}

const CartContext = React.createContext<ICartContext | null>(null);

export const useCart = () => {
  const cartContext = React.useContext(CartContext);

  if (!cartContext)
    throw new Error(
      "Você provavelmente esqueceu de colocar o useContext dentro do Provider"
    );

  return cartContext;
};

export const CartStorageContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [items, setItems] = React.useState<ICartItem[]>([]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};
