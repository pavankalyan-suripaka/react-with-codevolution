import React from 'react'

function ChildComp() {
    console.log("ChildComp")
    return (
        <div>
            <h2>ChildComp</h2>
        </div>
    )
}

export default React.memo(ChildComp)
