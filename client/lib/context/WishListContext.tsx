'use client'
import React, { createContext, useContext, useState } from "react";
import { CartItemsContext } from "./CartContext";

interface WishItem { 
  id: number;
  name: string;
  price: number;
  image: string;
  itemQuantity: number;
}

interface WishItemsContextType { 
  items: WishItem[];
  addItem: (item: WishItem) => void;
  removeItem: (item: WishItem) => void;
  addToCart: (item: WishItem) => void;
}

const WishItemsContext = createContext<WishItemsContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  addToCart: () => {},
});

const WishItemsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishItems, setWishItems] = useState<WishItem[]>([]);
  const cartItems = useContext(CartItemsContext);

  const addToWishHandler = (item: WishItem) => {
    setWishItems((prevItems) => [
      ...prevItems,
      { ...item, itemQuantity: 1 }, 
    ]);
  };

  const removeFromWishHandler = (item: WishItem) => { 
    setWishItems(wishItems.filter((prevItem) => prevItem.id !== item.id));
  };

  const addToCartHandler = (item: WishItem) => {
    cartItems.addItem(item, 1); 
    removeFromWishHandler(item);
  };

  const wishItemsCtx = {
    items: wishItems,
    addItem: addToWishHandler,
    removeItem: removeFromWishHandler,
    addToCart: addToCartHandler,
  };

  return (
    <WishItemsContext.Provider value={wishItemsCtx}>
      {children}
    </WishItemsContext.Provider>
  );
};

const useWishItems = () => {
  const context = useContext(WishItemsContext);
  if (!context) {
    throw new Error('useWishItems must be used within a WishItemsProvider');
  }
  return context;
};

export { WishItemsProvider, useWishItems };