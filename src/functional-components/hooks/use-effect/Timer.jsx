import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [time, setTime] = useState(0)

    const [str, setStr] = useState("iuuiuiu")

    const timeHanler = () => {
        setTime(prevTime => prevTime + 1)
    }

    const doSomething = () => {
        console.log(str);
    }

    useEffect(() => {
        doSomething()
        const interval = setInterval(
            timeHanler, 1000
        )

        return () => clearInterval(interval)
    }, []);

    return (
        <div>
            {time}
        </div>
    )
}

export default Timer;
