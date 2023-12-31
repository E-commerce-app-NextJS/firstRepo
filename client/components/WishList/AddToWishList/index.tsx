import { useRouter } from 'next/router';
import React from 'react';
import Cookies from 'js-cookie'; 
import { useWishItems } from '@/lib/context/WishListContext';
import styles from './WishlistButton.module.css';
import { AiFillHeart } from 'react-icons/ai';

interface WishItem {
  id: number;
  name: string;
  price: number;
  image: string;
  itemQuantity: number;
}

const AddToWishListButton
 = (product: WishItem) => {
  const router = useRouter();
  const { addItem } = useWishItems();

  const handleAddToWishList = () => {
    const token = Cookies.get('token');  // Check if the token exists in cookies

    if (!token) {
      alert('Error: Please, login first.'); 
      return router.push('/login');
    }

    addItem(product);
  };

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleAddToWishList}
    >
      <AiFillHeart size={30} color="red" />
    </button>
  );
};

export default AddToWishListButton
;