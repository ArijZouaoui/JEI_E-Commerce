import React, { Component } from 'react';
import {Form, Modal, Button, Row, Col, } from 'react-bootstrap';
import img from '../../assets/defaultpic.png';
import './addProduct.css'

class AddProduct extends Component {
    state = {
    }

    constructor(props) {
      super(props)
      this.state = { 
        imagePreviewUrl:'',
        file:'',
        error:String,
        productName:'',
        errorList: [], 
        showErrors: Boolean,
        disabledButton: true}
      this.handleName = this.handleName.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this._handleImageChange = this._handleImageChange.bind(this);
     
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
    
      productNameValidator(name) {
        var nameError = '';
        if (!name || name.length === 0) {
            nameError = 'Name is required';
        }
        return nameError;
    };
      productPriceValidator(price) {
        var priceError = '';
        if (!price || price <= 0) {
            priceError = 'Price is required';
        }
        return priceError;
    };
      productDscValidator(dsc) {
        var dscError = '';
        if (!dsc || dsc.length === 0) {
            dscError = 'Description is required';
        }
        return dscError;
    };
      productCategoryValidator(category) {
        var categoryError = '';
        if (!category || category.length === 0) {
            categoryError = 'Category is required';
        }
        return categoryError;
    };
    handleName (event) {
      var name = "" + event.target.value;
      var error = this.state.error;

      error.nameMessage = this.productNameValidator(name);

      this.setState({
          error: error,
          productName: name
      });
  };
    handleSubmit(){
     var nameError = this.state.error.nameMessage;
    console.log(nameError)
    var errors = this.state.errorList;
    if (errors){
      this.setState({showErrors : true});
    }
            
    }
    render() {
        let {imagePreviewUrl, error,disabledButton, errorList} = this.state;
        console.log(error.open)
        let $imagePreview = null;
        var errorText = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        }
        if (error) {
          errorText = error.nameMessage ;//+ " " + error.passwordMessage + " " + error.emailMessage;
      } 
      if (!errorText)
      {
          disabledButton = false;
          errorText = error.message;
      }
       
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
                     <p>{error.nameMessage}</p>
                         <Form onSubmit={this.handleSubmit}
                         onChange={this.onChangeHandler}
                         >
                             <Form.Group controlId="name">
                             <Form.Label>Product name</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='name'
                                 onChange={this.handleName}
                                 />
                             </Form.Group>
                             <Form.Group controlId="price">
                                 <Form.Label>Price</Form.Label>
                                 <Form.Control
                                 type='number'
                                 name='price'
                                 
                                 placeholder=''
                                 
                                 />
                             <Form.Group controlId="description">
                                 <Form.Label>Description</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='description'
                                 
                                 placeholder=''
                                 
                                 />
                             </Form.Group>
                             <Form.Group controlId="category">
                                 <Form.Label>Category</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='category'
                                 
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
                             type='submit'
                             disabled ={this.disabledButton}
                             onClick={this.handleSubmit}>
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