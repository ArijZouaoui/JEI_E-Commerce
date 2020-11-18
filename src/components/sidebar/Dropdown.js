import React from 'react'
import { Card } from 'react-bootstrap'

const Dropdown = () => {
    return(
<Card style={{marginTop: 20, marginBottom: 20, width: '13rem', display:'inline-grid'}} className='card text-center'>
<br />
<select className="ui dropdown" style={{width: '10rem', margin: 'auto'}}>
  <option value="1">Euro</option>
  <option value="2">Pound</option>
  <option value="3">Dollar</option>
</select>
<br />
<select className="ui dropdown" style={{width: '10rem', margin: 'auto'}} >
  <option value="1">Eng</option>
  <option value="2">Fr</option>
  <option value="3">It</option>
</select>
<br />
</Card>
    )
}

export default  Dropdown;
