import React, {useState} from 'react';
import CartList from "../../components/cart/CartList";
import '../../components/cart/CartList.css'
import {products} from "../../data/products";





const Cart =() =>{

    const [cart, setCart] = useState(products);

    const getTotalSum = () => {

        return cart.reduce(
            (sum, { price, quantity }) => sum + price*quantity,
            0
        );
    };
    const clearCart = () => {
        setCart([]);
    };



    return(
        <div className="container">
            <div className="card shopping-cart">
                <div className="card-header bg-dark text-light">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    Panier
                    <div className="pull-right">
                        <button className="btn btn-outline-info btn-sm pull-right" onClick={clearCart}>Vider le panier</button></div>
                </div>
                <div className="card-body">
                    <CartList cart={cart} setCart={setCart}  />
                </div>
                <div className="card-footer">
                    <div className="pull-right" style={{margin: '10px'}}>
                        <button  className="btn btn-primary pull-right">Passer commande</button>
                        <div className="pull-right" style={{margin: '5px'}}>
                            Prix total: <b>{getTotalSum()} D.T</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}


export default Cart;