import React from 'react'
import Persons from './Persons';

const NameList = () => {
    // const names = ["Pavan", "Vamsi", "Sai", "Subbu", "Anand"]

    const persons = [
        {
            id: 1,
            name: "pavan",
            age: 27,
            skill: "full stack developer"
        }, {
            id: 2,
            name: "vamsi",
            age: 28,
            skill: "tester"
        }, {
            id: 3,
            name: "sai",
            age: 29,
            skill: "civil engineer"
        },

    ]
    // const nameList = names.map(name => <div>{name}</div>);
    const personList = persons.map(person => <Persons key={person.id} person={person}></Persons>);
    return (
        <div>
            {/* {
                names.length && names.map((name, i) => <div>{name}</div>)
            } */}


            {/* {nameList} */}

            {personList}
        </div>
    )
}

export default NameList
