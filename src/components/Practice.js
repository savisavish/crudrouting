import React, { useState } from 'react'

const Practice = () => {
    const [color, setColor] = useState('red')
    return (
        <div>
            <h1>my favourite color {color}</h1>
            <button onClick={() => setColor('blue')}>click</button>
        </div>
    )
}
export default Practice;
