import React from 'react';
import './home.css';
import NavBar from "../../components/navbar/navbar";
import Slider from "../../components/slider/Slider";
import Dropdown from '../../components/sidebar/Dropdown';
import VerticalSideBar from '../../components/sidebar/vertical_side_bar'
import ProductList from '../../components/card/product_list'
import {products} from '../../data/products'
import {Container , Row, Col} from 'react-bootstrap'
import Footer from "../../components/footer/footer"
const Home = () => {



    return(
        <>
            <NavBar />

            <Slider />
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
        <Footer></Footer>
        </div>
        </>
    );

}
export default Home;
