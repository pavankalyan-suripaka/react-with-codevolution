import React from 'react'

const Persons = ({ person }) => {
    return (
        <div>
            <h3> I am a {person.name} and my age is {person.age} and iam a {person.skill}</h3>
        </div>
    )
}

export default Persons
