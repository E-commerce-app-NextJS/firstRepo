import React from 'react';
import { useWishItems } from '@/lib/context/WishListContext';
import styles from './RemoveFromWishListButton.module.css';
import { AiOutlineDelete } from 'react-icons/ai';

interface WishItem {
  id: number;
  name: string;
  price: number;
  image: string;
  itemQuantity: number;
}

const RemoveFromWishListButton = (product: WishItem) => {
  const { removeItem } = useWishItems();

  const handleRemoveFromWishList = () => {
    removeItem(product);
  };

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleRemoveFromWishList}
    >
      <AiOutlineDelete size={30} color="red" />
    </button>
  );
};

export default RemoveFromWishListButton;