import React, {useState, useEffect} from 'react';
import ProductCard from './product_card'
import axios from 'axios';

// This function represents the list of the products with its image, name and price.
const ProductList = ({ products, categoryProduct, name }) => {
const [productList, setProductList]= useState([]);
const fetchProductList=async ()=> {
    const response =await axios.get('http://localhost:5000/api/products/get');
    setProductList(response.data);
    console.log(response.data)
};

    useEffect(() => {
        fetchProductList();
    },[]);

console.log(productList);

    const productComponent = productList.filter(product => (categoryProduct.category === '' && categoryProduct.name === '') || (product.category === categoryProduct.category && product.name === categoryProduct.name) || (categoryProduct.category === '' && categoryProduct.name === product.name)).map((product) => {
        return <ProductCard key={product.id} id={product.id} name={product.name} category={product.category} image={product.image} price={product.price} availability={product.availability} description={product.description} />
    })


    return (
        <div className="row">
            {productComponent}
        </div>
    );
}

export default ProductList;

