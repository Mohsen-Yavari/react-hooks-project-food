import React from 'react';

//imgSrc
import cart from "../image/cart.jpg";

function DebitCart () {
    return <div className="cartGrop">
        <img 
        src={cart} 
        alt="" className="cart-logo" />
        <img 
        src={cart}
         alt="" className="cart-chip" />

        <div className="cart-number">1234 5678 9101 1123</div>
        <div className="cart-name">Seller Cart</div>
        <div className="cart-from">10/21</div>
        <div className="cart-to">10/25</div>
        <div className="cart-ring"></div>
    </div>
    
};

export default DebitCart;