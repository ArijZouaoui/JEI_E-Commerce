import React, { Component } from 'react';
import getCommands from '../../data/commands';
import './dashboard.css';
import addIcon from '../../assets/add.png';
import AddProduct from '../addProduct/addProduct';
import axios from 'axios';
import { List } from '@material-ui/core';

class Dashboard extends Component {
    state = {
        showAddPopup : false,
        commandes: []
    }
    componentDidMount(){
      axios.get('http://localhost:5000/api/commandes/get')
      .then(response=>{
      this.setState({commandes: response.data});
      console.log(response)
      console.log(response.data)

    })
      .catch(function(error){console.log(error)});
        
         
    }

    handle =()=>{
        this.setState({showAddPopup:true})  
      }

    closeAddPopup =()=>{
        this.setState({showAddPopup:false});
      }

    render() {
        const commandes = this.state.commandes

        let i =0
        return (
            <React.Fragment>
                <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Add Product</span>
                <button type="button" class="btn btn-outline-light" 
                onClick={this.handle}>
                    <img src={addIcon}></img>
                </button>
                </nav>

        <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">User ID</th>
            <th scope="col">Username</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Address</th>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Order Date</th>
            <th scope="col">Delivery Date</th>

          </tr>
        </thead>
        <tbody>
          
         {
          commandes.map(function(current){
                        i++
                        return(
                            <tr>
                            <td>{current['id']}</td>
                            <td>{current['Users.id']}</td>
                            <td>{current['Users.username']}</td>
                            <td>{current['Users.phoneNumber']}</td>
                            <td>{current['Users.address']}</td>
                            <td>{current['Products.id']}</td>
                            <td>{current['Products.name']}</td>
                            <td>{current['Products.quantity']}</td>
                            <td>{current['orderDate']}</td>
                            <td>{current['deliveryDate']}</td>
                            </tr>
                        )})
                    } 
                    
         
         
              </tbody>
         </table>
         <AddProduct show={this.state.showAddPopup}
                     onHide={this.closeAddPopup}/>
         </React.Fragment>
        );
    }
}

export default Dashboard;