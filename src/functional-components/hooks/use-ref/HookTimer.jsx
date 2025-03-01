import React, { useEffect, useRef, useState } from 'react'

const HookTimer = () => {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTime => prevTime + 1)
        }, 1000);

        console.log(intervalRef.current)

        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div>
            Timer - {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>clear Interval</button>
        </div>
    )
}

export default HookTimer
