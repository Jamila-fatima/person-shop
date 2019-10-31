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
                    isEditMode: false
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
    deletingPerson = (p) => {
        this.setState({
          personsData: this.state.personsData.filter(function (person) {
            return person.name !== p.name;
          }
          )
        })
      }




    enableEdit = (personClick) => {

        this.setState({
            personsData: this.state.personsData.map(
                pInner => {
                    if (pInner.name === personClick.name) {
                        pInner.isEditMode = true;
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
                            caller={() =>
                                this.enableEdit(person)

                            }
                            deletePerson={() => this.deletingPerson(person)}
                        />
                    })
                }
            </div>
        )
    }
}



