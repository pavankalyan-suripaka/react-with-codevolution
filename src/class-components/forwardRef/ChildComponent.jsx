import React from 'react'

// we are passing component as parameter to React.forwardRef().
// so that we can access ref from parent as second argument

const ChildComponent = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})

export default ChildComponent
