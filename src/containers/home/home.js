import React from 'react';
import Dropdown from '../../components/sidebar/Dropdown';
import VerticalSideBar from '../../components/sidebar/VerticalSideBar'
import ProductList from '../../components/card/ProductList'
import {products} from '../../data/products'
import {Container , Row, Col} from 'react-bootstrap'

const Home = () => {
    return(
        <div className="row">
        <Container>
        <Row>
        <Col xs={2} md={4}>
        <VerticalSideBar /> 
        <br />
        <Dropdown />
        </Col>
        <Col xs={4} md={8}>
        <ProductList products={products} />
        </Col>
        </Row>
        </Container>
        </div>
    );

}
export default Home;