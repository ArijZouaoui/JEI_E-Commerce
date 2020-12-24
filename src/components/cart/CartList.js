import React from 'react';
import  './CartList.css';

function CartList({ products ,removeFromCart}) {




    return (
        <>



                {products.map((product, id) => (
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
                                        <input   value={product.quantity}
                                               className="qty"
                                               size="4" />
                                    </div>
                                </div>
                                <div className="col-2 col-sm-2 col-md-2 text-right">
                                    <button type="button" className="btn btn-outline-danger btn-xs"
                                            onClick={(e) => removeFromCart(product.id,e)} >
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