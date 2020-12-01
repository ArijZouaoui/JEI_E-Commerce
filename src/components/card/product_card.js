import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { FaShoppingBasket } from 'react-icons/fa'
import ReactCardFlip from 'react-card-flip'
import './product_card.css'
import {products} from "../../data/products";

const ProductCard = ({product,cart ,addToCart}) => {

  const [isFlipped, setIsFlipped]= useState(false)
  const handleHover = () => {
    setIsFlipped(!isFlipped);
  }


  return (

       <div className="col-md-4">
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >

          <Card onMouseEnter={handleHover} className='card text-center'
                style={{marginTop: 10, marginBottom: 10, display: 'inline-grid', cursor: 'pointer'}}>

            <Card.Img variant="top" src={product.image} style={{margin: 'auto', height: '250px', weight: '2150px'}}/>
            <Card.Body>
              <Card.Title className='productinfo'>
                {product.name}
              </Card.Title>
              <Card.Text>
                {product.price}
              </Card.Text>
            </Card.Body>
          </Card>


          <Card onMouseLeave={handleHover} className='card text-center'
                style={{marginTop: 10, marginBottom: 10, display: 'inline-grid', cursor: 'pointer'}}>
            {/* <Card.Img variant="top" src={image} style={{margin:'auto', height:'250px', weight:'150px'}} /> */}
            <Card.Body>
              <Card.Text>
                <h6 className='productinfo'>Availability: </h6><h6>{product.availability} </h6>
                <h6 className='productinfo'>Price: </h6><h6>{product.price}</h6>
                <h6 className='productinfo'>Description: </h6><h6>{product.description}</h6>
                <h6 className='productinfo'>Add to cart : <Button variant="secondary" size="sm" active onClick={() =>addToCart(product)}>
                  <FaShoppingBasket/> </Button></h6>
              </Card.Text>
            </Card.Body>
          </Card>
        </ReactCardFlip></div>



    )
}
const ProductList =({addToCart ,cart ,categoryProduct }) => {
  const productComponent = products.filter(product => (categoryProduct.category === '' && categoryProduct.name === '') || (product.category === categoryProduct.category && product.name === categoryProduct.name) || (categoryProduct.category === '' && categoryProduct.name === product.name)).map((product) => {
    return <ProductCard product={product} cart={cart} addToCart={addToCart}/>
  })
  return(  <div className="row">
        {productComponent}
      </div>
  );
  }


export default ProductList;