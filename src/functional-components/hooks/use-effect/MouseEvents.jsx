import React, { useEffect, useState } from 'react'

const MouseEvents = () => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const mouseHandler = (e) => {
        console.log("mouse handler called")
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log("useEffect called");
        window.addEventListener("mousemove", mouseHandler);

        // to clear event 

        return () => {
            window.removeEventListener("mousemove", mouseHandler);
        }
    }, [])


    return (
        <div>
            <h3>x - {x}   y - {y}</h3>
        </div>
    )
}

export default MouseEvents
