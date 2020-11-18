import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

const ProductCard = ({name, price, image}) => {
  const [textColor, setTextColor] = useState("black")
  const appStyles={
    color:`${textColor}`
  }

    return (
  <Card style={{marginTop: 10, marginBottom: 10, width: '12rem', display:'inline-grid'}} className='card text-center'> 
  <Card.Img variant="top" src={image} style={{margin:'auto', height:'250px', weight:'150px'}} />
  <Card.Body>
    <Card.Title style={appStyles} onMouseEnter={() => setTextColor("#328fa8")} onMouseLeave={()=> setTextColor("black")}>
      {name}
    </Card.Title>
    <Card.Text>
      {price}
    </Card.Text>
  </Card.Body>
  </Card>
    )
}

export default ProductCard;