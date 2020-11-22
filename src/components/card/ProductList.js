import React from 'react';
import ProductCard from './ProductCard'


// This function represents the list of the products with its image, name and price.
const ProductList = ({ products })=> {
    const productComponent =products.map((user, i) => {
        return <ProductCard key={i} id={products[i].id} name={products[i].name} image={products[i].image} price={products[i].price} availability={products[i].availability} description={products[i].description} />
    })
 
    
    return(
        <div className="row" /*style={{ gridColumnGap:'50px',display:'flex', flexWrap:'wrap'}}*/>
        {productComponent} 
        </div>
    );
}

export default ProductList ;

