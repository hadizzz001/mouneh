// components/CartIcon.js
import { useCart } from '../../src/app/context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import styled from 'styled-components';

 

const CartButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1000;
`;

const CartIcon = () => {
  const { cart, toggleModal } = useCart();

  return (
    <CartButton onClick={toggleModal}>
      <Badge badgeContent={cart.length} color="error">
        <ShoppingCartIcon fontSize="large" />
      </Badge>
    </CartButton>
  );
};

export default CartIcon;

