import React, { Component } from 'react';
import getCommands from '../../data/commands';
import './dashboard.css';
import addIcon from '../../assets/add.png';
import AddProduct from '../addProduct/addProduct';

class Dashboard extends Component {
    state = {
        showAddPopup : false
    }


    handle =()=>{
        this.setState({showAddPopup:true})  
      }

    closeAddPopup =()=>{
        this.setState({showAddPopup:false});
      }

    render() {
        const commands = getCommands()

        let i =0
        return (
            <React.Fragment>
                <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Navbar</span>
                <button type="button" class="btn btn-outline-light" 
                onClick={this.handle}>
                    <img src={addIcon}></img>
                </button>
                </nav>

        <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Product id</th>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Quantity</th>
            <th scope="col">Command Date</th>
          </tr>
        </thead>
        <tbody>
          
         {
          commands.map(function(current){
                        i++
                        return(
                            <tr>
                            <th scope="row">{i}</th>
                            <td>{current.id}</td>
                            <td>{current.product_name}</td>
                            <td>{current.phone_number}</td>
                            <td>{current.quantity}</td>
                            <td>{current.date}</td>
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