import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { FaShoppingBasket } from 'react-icons/fa'
import ReactCardFlip from 'react-card-flip'
import './product_card.css'

const ProductCard = ({name, price, image, id, availability,description}) => {
  

  const [isFlipped, setIsFlipped]= useState(false)
  const handleHover = () => {
    setIsFlipped(!isFlipped);
  }

 
    return (
      <div className="col-md-4">
  <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >


  <Card onMouseEnter={handleHover}  className='card text-center' style={{marginTop: 10, marginBottom: 10,height:'400px', display:'inline-grid',cursor:'pointer' }} > 
  
  <Card.Img variant="top" src={image} style={{margin:'auto', height:'250px', weight:'2150px'}} />
  <Card.Body>
    <Card.Title className='productinfo'>
      {name}
    </Card.Title>
    <Card.Text>
      {price}
    </Card.Text>
  </Card.Body>
  </Card>


  <Card onMouseLeave={handleHover} className='card text-center' style={{marginTop: 10, marginBottom: 10, height:'400px', display:'inline-grid',cursor:'pointer'}} > 
  {/* <Card.Img variant="top" src={image} style={{margin:'auto', height:'250px', weight:'150px'}} /> */}
  <Card.Body>
    <Card.Text>
    <h6 className='productinfo'>Availability: </h6><h6>{availability} </h6>
    <h6 className='productinfo'>Price: </h6><h6>{price}</h6>
    <h6 className='productinfo'>Description: </h6><h6>{description}</h6> 
   <h6 className='productinfo'>Add to cart : <Button variant="secondary" size="sm" active> <FaShoppingBasket /> </Button></h6> 
    </Card.Text>
  </Card.Body>
  </Card>

  </ReactCardFlip>
  </div>
    )
}

export default ProductCard;