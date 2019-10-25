import React from 'react'
import './Persons.css';
import Person from './Person/Person';

export default function Persons() {
    const personsData = [
        {
            name: "Jamila",
            age: 22,
            discription: "react developer ",
            isEditMode:false
        },
        {
            name: "Areeba",
            age: 22,
            discription: "WP developer ",
            isEditMode:true
        },

        {
            name: "Iqra",
            age: 22,
            discription: "react developer ",
            isEditMode:false
        }
    ]


    return (
        <div className="Persons">
        
            {
                personsData.map(person => <Person person={person} />)
            }
        </div>
    );
}
