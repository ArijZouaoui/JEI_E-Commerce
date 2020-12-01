import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './containers/home/home';
import Dashboard from './components/dashboard/dashboard';
import Cart from "./containers/home/Cart";
import home from './containers/home/home';
import React, {useState} from 'react';
import {products} from "./data/products";
import ProductCard from "./components/card/product_card";
import CartList from "./components/cart/CartList";

const App =()=> {
    const [cart, setCart] = useState([]);
    const addToCart =(product) =>{
        let newCart =[...cart];
        let itemInCart = newCart.find( (item) => product.id === item.id);
        if (itemInCart){
            itemInCart.quantity++;
        }else{
            itemInCart ={
                ...product,
                quantity: 1,
            };
            newCart.push(itemInCart);
        }
        setCart(newCart);
    };
    return ( <BrowserRouter>
            <Switch>
                <Route exact path='/' component={() => <Home cart={cart} addToCart={addToCart}/>} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/panier' component={Cart} />
            </Switch>
        </BrowserRouter>
  );
}

export default App;
