import React, { Component } from 'react';
import {Form, Modal, Button, Row, Col, } from 'react-bootstrap';
import img from '../../assets/defaultpic.png';
import './addProduct.css'
import axios from 'axios';

class AddProduct extends Component {
    state = {}
    constructor(props) {
      super(props)
      this.state = { 
        imagePreviewUrl:'',
        error:String,
        productName:'',
        productDsc:'',
        productPrice:'',
        productCategory:'',
        errorList: [], 
        showErrors: Boolean,
        disabledButton: true,
        file: null, 

    };

      this.handleName = this.handleName.bind(this);
      this.handleDsc = this.handleDsc.bind(this);
      this.handlePrice = this.handlePrice.bind(this);
      this.handleCategory = this.handleCategory.bind(this);
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
            imagePreviewUrl: reader.result,
            
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
        if ((this.state.errorList.indexOf(error.nameMessage) <= -1) && error.nameMessage!='') {
          this.setState({errorList:this.state.errorList.concat(error.nameMessage)})
        }
        var index = this.state.errorList.indexOf('Name is required');
        console.log(index)
        console.log(error.nameMessage)
        if (index==0){
          this.setState({errorList:this.state.errorList.splice(index,1)});
        }
        if ((index>-1)&& error.nameMessage==''){
          this.setState({errorList:this.state.errorList.splice(index-1,1)});

        }
        if (error.nameMessage ==''){
        this.setState({
            productName: name,
            error: error
        });
      }};
      handleDsc (event) {
          var dsc = "" + event.target.value;
          var error = this.state.error;
          
          error.dscMessage = this.productDscValidator(dsc);
          if ((this.state.errorList.indexOf(error.dscMessage) <= -1) && error.dscMessage!='') {
            this.setState({errorList:this.state.errorList.concat(error.dscMessage)})
          }
          var index = this.state.errorList.indexOf('Description is required');
          console.log(index)
          console.log(error.dscMessage)
          if (index==0){
            this.setState({errorList:this.state.errorList.splice(index,1)});
          }
          if ((index>-1)&& error.dscMessage==''){
            this.setState({errorList:this.state.errorList.splice(index-1,1)});

          }
          if (error.dscMessage==""){
          this.setState({
              productDsc: dsc,
              error: error
          });
        }
      };
      handlePrice (event) {
        var price = "" + event.target.value;
        var error = this.state.error;
        
        error.priceMessage = this.productPriceValidator(price);
        if ((this.state.errorList.indexOf(error.priceMessage) <= -1) && error.priceMessage!='') {
          this.setState({errorList:this.state.errorList.concat(error.priceMessage)})
        }
        var index = this.state.errorList.indexOf('Price is required');
        console.log(index)
        console.log(error.priceMessage)
        if (index==0){
          this.setState({errorList:this.state.errorList.splice(index,1)});
        }
        if ((index>-1)&& error.priceMessage==''){
          this.setState({errorList:this.state.errorList.splice(index-1,1)});

        }
        if (error.priceMessage==''){
        this.setState({
            productPrice: price,
            error: error
        });
      }
      };
      handleCategory (event) {
        var category = "" + event.target.value;
        var error = this.state.error;
        
        error.categoryMessage = this.productCategoryValidator(category);
        if ((this.state.errorList.indexOf(error.categoryMessage) <= -1) && error.categoryMessage!='') {
          this.setState({errorList:this.state.errorList.concat(error.categoryMessage)})
        }
        var index = this.state.errorList.indexOf('Category is required');
        console.log(index)
        console.log(error.categoryMessage)
        if (index==0){
          this.setState({errorList:this.state.errorList.splice(index,1)});
        }
        if ((index>-1)&& error.categoryMessage==''){
          this.setState({errorList:this.state.errorList.splice(index-1,1)});

        }
        if (error.categoryMessage==''){
          
        this.setState({
            productCategory: category, 
            error: error
        });
      }

      };
    handleSubmit(e){
      e.preventDefault();
    const formData = new FormData();
    formData.append('file',this.state.file);
    formData.append('productName', this.state.productName);
    formData.append('productCategory', this.state.productCategory);
    formData.append('productPrice', this.state.productPrice);
    formData.append('productDsc', this.state.productDsc);

    for(var pair of formData.entries()) {
      console.log(pair[0]+ ', '+ pair[1]); 
   }
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        },
        processData: false,
    };
    axios.post("http://localhost:5000/api/products/post",formData,config)
        .then((response) => {
            alert("The file is successfully uploaded");
        }).catch((error) => {
          console.log(error)
    });

            
    }
    render() {
        let {imagePreviewUrl, error,disabledButton, errorList} = this.state;
        let $imagePreview = null;
        var errorText = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        }
        if (error) {
          errorText = errorList.toString()
          console.log(errorText)
          console.log(errorList)
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
                     
                         <Form onSubmit={this.handleSubmit}
                         onChange={this.onChangeHandler}
                        className="row"
                         >
                             <Form.Group className="col-md-6" className="col-md-6" controlId="name">
                             <p>{error.nameMessage}</p>
                             <Form.Label>Product name</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='name'
                                 onChange={this.handleName}
                                 />
                             </Form.Group>
                             <Form.Group className="col-md-6" controlId="price">
                             <p>{error.priceMessage}</p>
                                 <Form.Label>Price</Form.Label>
                                 <Form.Control
                                 type='number'
                                 name='price'
                                 onChange={this.handlePrice}
                                 placeholder=''
                                 
                                 />
                             </Form.Group>
                             <Form.Group className="col-md-6" controlId="description">
                             <p>{error.dscMessage}</p>
                                 <Form.Label>Description</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='description'
                                 onChange={this.handleDsc}
                                 placeholder=''
                                 
                                 />
                             </Form.Group>
                             <Form.Group className="col-md-6" controlId="category">
                             <p>{error.categoryMessage}</p>
                                 <Form.Label>Category</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='category'
                                 onChange={this.handleCategory}
                                 placeholder=''
                                 
                                 />
                             </Form.Group>
                           <Form.Group className="col-md-6">  
                         <Form.File id="exampleFormControlFile1" 
                         label="Product image"
                         onChange={this._handleImageChange} />
                         <img src={imagePreviewUrl || img}
                               alt="Uploaded Image"
                               height='200'
                                width='200'
                                />
                         </Form.Group>
                         <Form.Group >
                             <Button vaiant='primary'
                             type='submit'
                             disabled ={disabledButton}
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