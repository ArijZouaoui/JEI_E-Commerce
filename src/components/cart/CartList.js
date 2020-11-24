import React from 'react';
import  './CartList.css';

function CartList({ cart, setCart }) {


    const updateCartHandler = (id, value) => {
       let updatedCart = cart.map(product => product.id === id ? product.quantity += value : product)

        setCart(updatedCart)

    }

    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product) => product !== productToRemove)
        );
    };

    return (
        <>



                {cart.map((product, id) => (
                    <div className="product" key={id}>
                        <div className="row">


                            <div className="col-12 col-sm-12 col-md-2 text-center">
                                <img className="img-responsive" src={product.image} alt="prewiew" width="120" height="80"/>
                            </div>

                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                                <h4 className="product-name"><strong>{product.name}</strong></h4>
                                <h4>
                                    <small>{product.description}</small>
                                </h4>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                                <div className="col-3 col-sm-3 col-md-6 text-md-right" style={{paddingTop: '5px'}}>
                                    <h6><strong>{product.price} D.T</strong></h6>
                                </div>
                                <div className="col-4 col-sm-4 col-md-4">
                                    <div className="quantity">
                                        <input type="button" value="+" className="plus"  onClick={() =>updateCartHandler(product.id, +1)}/>
                                        <input   value={product.quantity}
                                               className="qty"
                                               size="4" readOnly={product.quantity}/>
                                        <input type="button" value="-" className="minus" onClick={() =>updateCartHandler(product.id, -1)}/>
                                    </div>
                                </div>
                                <div className="col-2 col-sm-2 col-md-2 text-right">
                                    <button type="button" className="btn btn-outline-danger btn-xs"
                                            onClick={() => removeFromCart(product)}>
                                        <i className="fa fa-trash" aria-hidden="true"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                ))}


            <div></div>
        </>
    );
}

export default CartList;