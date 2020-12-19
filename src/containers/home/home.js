import React from "react";
import "./home.css";
import Slider from "../../components/slider/Slider";
import { useState } from "react";
import Dropdown from "../../components/sidebar/Dropdown";
import VerticalSideBar from "../../components/sidebar/vertical_side_bar";
import ProductList from "../../components/card/product_list";
import { products } from "../../data/products";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/footer/footer";
const Home = () => {
  const [categoryProduct, setCategoryProduct] = useState({
    category: "",
    name: "",
  });

  const handleChange = (category, name) => {
    setCategoryProduct({ category, name });
  };

  return (
    <>
      <Slider />
      <div className="row">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <VerticalSideBar handleChange={handleChange} />
              <br />
              <Dropdown />
            </Col>
            <Col xs={6} md={8}>
              <ProductList
                products={products}
                categoryProduct={categoryProduct}
                handleChange={handleChange}
              />
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    </>
  );
};
export default Home;
