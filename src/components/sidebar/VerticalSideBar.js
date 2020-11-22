import React from 'react'
import { Card } from 'react-bootstrap'
import './VerticalSideBar.css'


const VerticalSideBar = () => {  
return(
<Card style={{marginTop: 20, marginBottom: 20, width: '13rem', display:'inline-grid'}} className='card text-center'>
<div className="ui vertical text-center" >
  <div className="item">
    <div className="header">SOFAS</div>
    <div className="menu">
    <a  className="item">trendy</a>
    <a  className="item">expensive</a>
    <a  className="item">elegant</a>
    </div>
  </div>
  <div className="item">
    <div className="header">COUCHES</div>
    <div className="menu">
    <a  className="item">trendy</a>
    <a  className="item">expensive</a>
    <a  className="item">elegant</a>
    </div>
  </div>
  <div className="item">
    <div className="header">TABLES</div>
    <div className="menu">
    <a  className="item">trendy</a>
    <a  className="item">expensive</a>
    <a  className="item">elegant</a>
    </div>
  </div>
</div>
</Card>



)
}

export default VerticalSideBar ;