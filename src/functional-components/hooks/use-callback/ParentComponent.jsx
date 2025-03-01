import React, { useCallback, useState } from 'react'
import Title from './Title';
import Count from './Count';
import Button from './Button';

const ParentComponent = () => {

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(500000);

    const incrementAge = useCallback(() => {
        setAge((prevAge) => prevAge + 1);
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary((prevSalary) => prevSalary + 1);
    }, [salary])

    return (
        <>
            <Title />
            <Count text='Age' value={age} />
            <Button handleClick={incrementAge} text='IncrementAge'>Increment Age</Button>
            <Count text='Salary' value={salary} />
            <Button handleClick={incrementSalary} text='IncrementSalary'>Increment Salary</Button>
        </>
    )
}

export default ParentComponent
