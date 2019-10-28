import React from 'react'
import './Person.css'
import PersonInfo from './PersonInfo';
import PersonEdit from './PersonEdit';
import PropType from 'prop-types'

export default function Person(props) {
    // const isEditMode = true;

    return (
        <div className="Person">
       
        {
            props.person.isEditMode ? <PersonEdit person={props.person}/> 
            : <PersonInfo person={props.person}
            editButtonClick={props.caller}/>}
        }
        


        </div>
    )
}

Person.propTypes = {
    person:PropType.object,
    
 
}