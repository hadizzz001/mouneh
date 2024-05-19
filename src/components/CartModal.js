"use client";
import { useCart } from '../../src/app/context/CartContext';
import styled from 'styled-components';



const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 999;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: white;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
`;

const CartModal = () => {
  const { cart, removeFromCart, updateQuantity, isModalOpen, toggleModal } = useCart();

  const handleQuantityChange = (productId, quantity) => {
    if (quantity > 0) {
      updateQuantity(productId, quantity);
    }
  };
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);




  return (
    <ModalOverlay isOpen={isModalOpen} onClick={toggleModal}>
      <ModalContent isOpen={isModalOpen} onClick={(e) => e.stopPropagation()}>
        <h2>Shopping Cart</h2>
        <ul style={{ marginTop: '2em', color:'#222222' }}>
          {cart.map((item) => (
            <>
              <li key={item.id} >
                <div style={{ display: "flex" }}>
                  <div><img src={item.img[0]} width={50} height={50} /> </div>
                  <div>{item.title}</div>
                  <div style={{ marginLeft: "3em" }}>${item.price * item.quantity}</div>
                </div>

                <div style={{ display: "flex" }}>
                  <div>
                    QTY: <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      style={{ width: '40px' }}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    />
                  </div>
                  <div style={{ marginLeft: "3em" }}>
                    <button onClick={() => removeFromCart(item.id)}><svg style={{ width: "18px" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
                  </div>
                </div>
              </li>
              <hr />
            </>
          ))}
        </ul>
        <h1>Total: ${total.toFixed(2)}</h1>
        <a href="/checkout">
        <span className="ProvidersSingleProduct--selected">
          <button type="button" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }}  >
            <span>Checkout</span>
          </button>
        </span>
        </a>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CartModal;
