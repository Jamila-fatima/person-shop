import React from 'react'
import './PersonEdit.css'
import { Button, Card, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'




export default function PersonEdit(props) {
    return (
        <div className="PersonEdit">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>Edit Person</Card.Title>
          <Card.Text>
            <input value={props.person.name}/>
            <input type="number" value={props.person.age}/>
            <textarea>{props.person.discription}</textarea>
          </Card.Text>
  
          <ButtonGroup aria-label="Basic example">
            <Button variant="light"><FontAwesomeIcon className="text-info" icon={faCheck} /></Button>
            <Button variant="light" ><FontAwesomeIcon className="text-danger" icon={faTimes} /></Button>
          </ButtonGroup>
  
  
        </Card.Body>
      </Card>

        </div>
    )
}
