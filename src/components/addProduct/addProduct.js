import React, { Component } from 'react';
import {Form, Modal, Button, Row, Col, } from 'react-bootstrap';
import img from '../../assets/defaultpic.png';
import './addProduct.css'

class AddProduct extends Component {
    state = {
        imagePreviewUrl:'',
        file:''
    }

    _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
    



    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        }
        this._handleImageChange = this._handleImageChange.bind(this);
     
        return (
            <div className="container">
            
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add a new product
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             
                 <Row>
                     
                         <Form onSubmit={this.handleSubmit}
                         onChange={this.onChangeHandler}
                         ><Form.Label>Product name</Form.Label>
                             <Form.Group controlId="name">
                                 
                                 <Form.Control
                                 type='text'
                                 name='name'
                                 required
                                 />
                             </Form.Group>
                             <Form.Group controlId="price">
                                 <Form.Label>Price</Form.Label>
                                 <Form.Control
                                 type='number'
                                 name='price'
                                 required
                                 placeholder=''
                                 
                                 />
                             <Form.Group controlId="description">
                                 <Form.Label>Description</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='description'
                                 required
                                 placeholder=''
                                 
                                 />
                             </Form.Group>
                             <Form.Group controlId="category">
                                 <Form.Label>Category</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='category'
                                 required
                                 placeholder=''
                                 
                                 />
                             </Form.Group>
                             
                         <Form.File id="exampleFormControlFile1" 
                         label="Product image"
                         onChange={this._handleImageChange} />
                         <img src={imagePreviewUrl || img}
                               alt="Uploaded Image"
                               height='200'
                                width='200'
                                />
                         </Form.Group>
                         <Form.Group>
                             <Button vaiant='primary'
                             type='submit'>
                                 Add 
                             </Button>
                         </Form.Group>
                        
                         </Form>
                   
                 </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
          </div>
         );
    }
}

export default AddProduct;