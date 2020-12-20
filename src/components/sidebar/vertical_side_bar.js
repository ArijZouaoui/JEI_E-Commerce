import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import './vertical_side_bar.css'
//vertical side bar / categories filter : Sarah BenAbdallah

const VerticalSideBar = (props) => {
  const [textColor, setTextColor] = useState({ sofa: "#777", tables: "#777", couche: "#777" })
  const appStylesSofa = {
    color: `${textColor['sofa']}`
  }
  const appStylesTables = {
    color: `${textColor['tables']}`
  }
  const appStylesCouche = {
    color: `${textColor['couche']}`
  }


  return (
    <Card style={{ marginTop: 20, marginBottom: 20, width: '13rem', display: 'inline-grid' }} className='card text-center'>
      <div className="ui vertical text-center" >
        <div className="item">
          <div className="header" onClick={() => props.handleChange('', 'sofa')} style={{ ...appStylesSofa, cursor: 'pointer' }} onMouseEnter={() => setTextColor({sofa: "#003fcc"})} onMouseLeave={() => setTextColor({sofa: "#777"})}> SOFAS </div>
          <div className="menu">
            <a className="item" style={{ cursor: 'pointer' }} onClick={() => props.handleChange('trendy', 'sofa')}>trendy</a>
            <a className="item" style={{ cursor: 'pointer' }} onClick={() => props.handleChange('expensive', 'sofa')}>expensive</a>
            <a className="item" style={{ cursor: 'pointer' }} onClick={() => props.handleChange('elegant', 'sofa')}>elegant</a>
          </div>
        </div>
        <div className="item">
          <div className="header" onClick={() => props.handleChange('', 'couche')} style={{ ...appStylesCouche, cursor: 'pointer' }} onMouseEnter={() => setTextColor({couche:"#003fcc"})} onMouseLeave={() => setTextColor({couche:"#777"})}>COUCHES</div>
          <div className="menu">
            <a className="item" style={{ cursor: 'pointer' }} onClick={() => props.handleChange('trendy', 'couche')}>trendy</a>
            <a className="item" style={{ cursor: 'pointer' }} onClick={() => props.handleChange('expensive', 'couche')}>expensive</a>
            <a className="item" style={{ cursor: 'pointer' }} onClick={() => props.handleChange('elegant', 'couche')}>elegant</a>
          </div>
        </div>
        <div className="item">
          <div className="header" onClick={() => props.handleChange('', 'table')} style={{ ...appStylesTables, cursor: 'pointer' }} onMouseEnter={() => setTextColor({tables:"#003fcc"})} onMouseLeave={() => setTextColor({tables:"#777"})}>TABLES</div>
          <div className="menu">
            <a className="item" style={{ cursor: 'pointer' }} onClick={() => props.handleChange('trendy', 'table')}>trendy</a>
            <a className="item" style={{ cursor: 'pointer' }} onClick={() => props.handleChange('expensive', 'table')}>expensive</a>
            <a className="item" style={{ cursor: 'pointer' }} onClick={() => props.handleChange('elegant', 'table')}>elegant</a>
          </div>
        </div>
      </div>
    </Card>



  )
}

export default VerticalSideBar;