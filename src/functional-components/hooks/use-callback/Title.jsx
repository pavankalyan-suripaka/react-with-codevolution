import React from 'react'

const Title = () => {
    console.log("title")
    return (
        <div>
            <h1>Tittle: Use Callback Hook</h1>
        </div>
    )
}

export default React.memo(Title)
