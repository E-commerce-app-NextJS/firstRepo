import { useRouter } from 'next/router';
import React from 'react';
import Cookies from 'js-cookie'; 
import { useCartItems } from '@/lib/context/CartContext'; 
import styles from './WishlistButton.module.css';
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";



interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    itemQuantity: number;
  }

const addToCartButton = (product: CartItem) => {
  const router = useRouter();
  const { addItem } = useCartItems();

  const handleAddToCart = () => {
    const token = Cookies.get('token');  // Check if the token exists in cookies

    if (!token) {
      alert('Error: Please, login first.'); 
      return router.push('/login');
    }

    addItem(product, 1);
  };

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleAddToCart}
    >
        <IconButton
              onClick={handleAddToCart}
              sx={{
                borderRadius: "20px",
                width: "40px",
                height:
                  "40px" 
              }}
            >
              <AddShoppingCartIcon
                sx={{ width: "22px", height: "22px", color: "black" }}
              />
        </IconButton>
    </button>
  );
};

export default addToCartButton; 
;