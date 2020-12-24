import React, {Component} from 'react';
import CartList from "../../components/cart/CartList";
import '../../components/cart/CartList.css'
import axios from 'axios';
import getUser from "../../utils/User";





class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []

        }
    }
    componentDidMount() {
       // const user =getUser();
        axios.get(`http://localhost:5000/api/productUser/get/`+2)
            .then(res => {
                console.log(res.data)
                const products = res.data;
                this.setState({ products });
            })
    }
    removeFromCart = (id,e) =>{

        axios.delete(`http://localhost:5000/api/productUser/deleteOne/2/`+id)
            .then(res => {

                console.log(res.data);
                const products = res.data;
                this.setState({products});
            })

    }
    clearCart=(e)=>{
        axios.delete(`http://localhost:5000/api/productUser/delete/`+2)
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
    }


    render() {
        const {products} = this.state;
        return (
            <div className="container">
                <div className="card shopping-cart">
                    <div className="card-header bg-dark text-light">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        Panier
                        <div className="pull-right">
                            <button className="btn btn-outline-info btn-sm pull-right"  onClick={(e)=> this.clearCart()}>Vider le
                                panier
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <CartList products={products} removeFromCart={this.removeFromCart}/>
                    </div>
                    <div className="card-footer">
                        <div className="pull-right" style={{margin: '10px'}}>
                            <button className="btn btn-primary pull-right">Passer commande</button>
                            <div className="pull-right" style={{margin: '5px'}}>
                                Prix total: <b> D.T</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}


export default Cart;
