import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  itemQuantity: number;
}

interface CartItemsContextType {
  items: CartItem[];
  totalAmount: number;
  addItem: (item: CartItem, quantity: number) => void;
  removeItem: (item: CartItem) => void;
  quantity: (itemId: number, action: 'INC' | 'DEC') => void;
}

const CartItemsContext = createContext<CartItemsContextType>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  quantity: () => {},
});

const CartItemsProvider = ({ children }:{children : React.ReactNode}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalAmountOfItems, setTotalAmountOfItems] = useState<number>(0);

  const addToCartHandler = (item: CartItem, quantity: number) => {
    removeFromCartHandler(item);
    setCartItems((prevItems) => [
      ...prevItems,
      { ...item, itemQuantity: Number(quantity), id: Number(item.id) },
    ]);
  };

  const removeFromCartHandler = (item: CartItem) => {
    setCartItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== Number(item.id)));
  };

  const calculateTotalAmount = (currentCartItems: CartItem[]) => {
    let total = 0;
    currentCartItems.forEach((item) => {
      total += item.price * item.itemQuantity;
    });
    setTotalAmountOfItems(total);
  };

  const quantityHandler = (itemId: number, action: 'INC' | 'DEC') => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === Number(itemId)
          ? { ...item, itemQuantity: action === 'INC' ? item.itemQuantity + 1 : item.itemQuantity - 1 }
          : item
      )
    );
  };

  useEffect(() => {
    calculateTotalAmount(cartItems);
  }, [cartItems]);

  const cartItemCtx = {
    items: cartItems,
    totalAmount: totalAmountOfItems,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
    quantity: quantityHandler,
  };

  return (
    <CartItemsContext.Provider value={cartItemCtx}>
      {children}
    </CartItemsContext.Provider>
  );
};

const useCartItems = () => {
  const context = useContext(CartItemsContext);
  if (!context) {
    throw new Error('useCartItems must be used within a CartItemsProvider');
  }
  return context;
};

export { CartItemsProvider, useCartItems, CartItemsContext };