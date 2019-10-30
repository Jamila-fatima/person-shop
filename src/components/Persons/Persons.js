import React, { Component } from 'react'
import './Persons.css';
import Person from './Person/Person';



export default class Persons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personsData: [
                {
                    name: "Jamila",
                    age: 22,
                    discription: "react developer ",
                    isEditMode: false
                },
                {
                    name: "Areeba",
                    age: 22,
                    discription: "WP developer ",
                    isEditMode: true
                },

                {
                    name: "Iqra",
                    age: 22,
                    discription: "react developer ",
                    isEditMode: false
                }
            ]
        }
    }


    disableEdit = (personClick) => {
       this.setState({
        personsData: this.state.personsData.map( 

            pInner => {
                    if (pInner.name === personClick.name) {
                               pInner.isEditMode= false;         
                    }
                    return pInner;
                })
        })

    }

    enableEdit = (personClick) => {
        
        this.setState({
            personsData: this.state.personsData.map(
                pInner => {
                    if (pInner.name === personClick.name) {
                               pInner.isEditMode= true;         
                    }
                    return pInner;
                })
        })

    }

    render() {
        return (
            <div className="Persons">

                {
                    this.state.personsData.map(person => {
                        return <Person person={person}
                            caller={ () =>
                                this.enableEdit(person)

                            }
                            disableCaller={ () =>
                                this.disableEdit(person)
                            }
                            />
                    })
                }
            </div>
        )
    }
}



