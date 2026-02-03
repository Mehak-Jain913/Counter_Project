import React, { useState } from 'react'

export default function App() {

  let [count, setCount] = useState(0);

  return (

    <>
      <h1 style={{ color: '#ffffff', backgroundColor: '#1a1a1a', padding: '1em', borderRadius: '5%' }}>Counter</h1>
      <p style={{ marginLeft: '29%' }}>Value Count : <span style={{ fontSize: '20px', fontWeight: 'bolder' }}>{count}</span></p>
      <button onClick={() => setCount(count + 1)} style={{ backgroundColor: '#1a1a1a', color: '#ffffff', padding: '0.5em 1em', borderRadius: '5px' }}>Increase Value</button>
      <button onClick={count > 0 ? () => setCount((prev) => prev - 1) : 0} style={{ marginLeft: '1em', backgroundColor: '#1a1a1a', color: '#ffffff', padding: '0.5em 1em', borderRadius: '5px' }}>Decrease Value</button>
    </>

  )
}

//Math.random()-> generates random number between 0 and 1
