import React, {Component} from 'react';
import CartList from "../../components/cart/CartList";
import '../../components/cart/CartList.css'
import axios from 'axios';






class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []

        }
    }
    componentDidMount() {
        axios.post(`http://localhost:5000/api/productUser/get`,{UserId:'id'})
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
    }
    removeFromCart(id, e){
        const postData ={
            id :id,
            UserId :'5',


        };
        axios.post(`http://localhost:5000/api/productUser/deleteOne`,postData)
            .then(res => {
                console.log(res);
                console.log(res.data);
                const products = res.data;
                this.setState({products});
            })

    }
    clearCart(){
        axios.post(`http://localhost:5000/api/productUser/delete`,{UserId:'id'})
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
                            <button className="btn btn-outline-info btn-sm pull-right"  onClick={this.clearCart}>Vider le
                                panier
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <CartList product={products} removeFromCart={this.removeFromCart}/>
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
