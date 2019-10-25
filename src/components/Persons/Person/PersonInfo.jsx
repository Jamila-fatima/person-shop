import React from 'react'
import './PersonInfo.css';
// import Card from 'react-bootstrap/Card'
import { Button, Card, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'





export default function PersonInfo(props) {
  return (


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>{props.person.name}, {props.person.age}</Card.Title>
        <Card.Text>
          {props.person.discription}
        </Card.Text>

        <ButtonGroup aria-label="Basic example">
          <Button variant="light"><FontAwesomeIcon className="text-info" icon={faEdit} /></Button>
          <Button variant="light" ><FontAwesomeIcon className="text-danger" icon={faTrash} /></Button>
        </ButtonGroup>


      </Card.Body>
    </Card>

  )
}
