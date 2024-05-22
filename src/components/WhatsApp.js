"use client";
import { useCart } from '../app/context/CartContext';
import  prisma  from "../../libs/prismadb";



const WhatsAppButton = ({ inputs, items }) => {
    const { cart, removeFromCart, updateQuantity, clearCart, isModalOpen, toggleModal } = useCart();

 
    const createOrder =  () => {

        const couponResponse = fetch('api/sendOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                items,
                inputs 
            })
        })

        
      };






    const handleClick = async() => {
        const url = createWhatsAppURL(inputs, items);
        window.open(url, '_blank');
        createOrder()
        clearCart()
    };

    return (
        <div>
            <span className="ProvidersSingleProduct--selected">
                <button onClick={handleClick} type="button" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }}  >
                    <span>Order Now!</span>
                </button>
            </span>
        </div>
    );
};

export default WhatsAppButton;

const createWhatsAppURL = (inputs, items) => {
    const { address, email, fname, lname, phone } = inputs;

    // Calculate the total amount
    const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Formatting the message
    const message = `
    *Customer Information:*
    Name: ${fname} ${lname}
    Email: ${email}
    Phone: ${phone}
    Address: ${address}

    *Order Details:*
    ${items.map((item, index) => `
      Item ${index + 1}:
      - Name: ${item.title}
      - Description: ${item.description}
      - Quantity: ${item.quantity}
      - Price: $${item.price}
      - Image: ${item.img[0]} 
    `).join('\n')}

    *Total Amount:* $${totalAmount}
  `;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '96181352620'; // Replace with your desired number
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
