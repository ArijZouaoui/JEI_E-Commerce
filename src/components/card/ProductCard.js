import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { FaShoppingBasket } from 'react-icons/fa'
import ReactCardFlip from 'react-card-flip'
import './ProductCard.css'

const ProductCard = ({name, price, image, id, availability,description}) => {
  const [textColor, setTextColor] = useState("#777")
  const appStyles={
    color:`${textColor}`
  }

  const [isFlipped, setIsFlipped]= useState(false)
  const handleHover = () => {
    setIsFlipped(!isFlipped);
  }

 
    return (
      <div className="col-md-4">
  <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >


  <Card onClick={handleHover} className='card text-center' style={{marginTop: 10, marginBottom: 10, display:'inline-grid' }} > 
  
  <Card.Img variant="top" src={image} style={{margin:'auto', height:'250px', weight:'2150px'}} />
  <Card.Body>
    <Card.Title className='productinfo' style={appStyles} onMouseEnter={() => setTextColor("#003fcc")} onMouseLeave={()=> setTextColor("#777")}>
      {name}
    </Card.Title>
    <Card.Text>
      {price}
    </Card.Text>
  </Card.Body>
  </Card>


  <Card onClick={handleHover} className='card text-center' style={{marginTop: 10, marginBottom: 10, display:'inline-grid'}} > 
  <Card.Img variant="top" src={image} style={{margin:'auto', height:'250px', weight:'150px'}} />
  <Card.Body>
    <Card.Title className='productinfo' style={appStyles} onMouseEnter={() => setTextColor("#003fcc")} onMouseLeave={()=> setTextColor("#777")}>
      {name}
    </Card.Title>
    <Card.Text>
    <h5 className='productinfo'>Product Code: </h5><h6>{id}</h6>
    <h5 className='productinfo'>Availability: </h5><h6>{availability} </h6>
    <h5 className='productinfo'>Price: </h5><h6>{price}</h6>
    <h5 className='productinfo'>Description: </h5><h6>{description}</h6> 
    <h5 className='productinfo'>Add to cart : <Button variant="secondary" size="sm" active> <FaShoppingBasket /> </Button></h5> 
    </Card.Text>
  </Card.Body>
  </Card>

  </ReactCardFlip>
  </div>
    )
}

export default ProductCard;