import React ,{ useState } from 'react';
import Dropdown from '../../components/sidebar/dropdown';
import VerticalSideBar from '../../components/sidebar/vertical_side_bar'
import ProductList from '../../components/card/product_list'
import {products} from '../../data/products'
import {Container , Row, Col} from 'react-bootstrap'

const Home = () => {
  

    const [categoryProduct ,setCategoryProduct] = useState({
        category : '',
        name : ''
    });


    const handleChange = (category,name) => {
        setCategoryProduct({category,name});
      } 

    
    return(
        <div className="row">
        <Container>
        <Row>
        <Col xs={2} md={4}>
        <VerticalSideBar handleChange={handleChange} /> 
        <br />
        <Dropdown />
        </Col>
        <Col xs={4} md={8}>
        <ProductList products={products} categoryProduct={categoryProduct} handleChange={handleChange} />
        </Col>
        </Row>
        </Container>
        </div>
    );

}
export default Home;