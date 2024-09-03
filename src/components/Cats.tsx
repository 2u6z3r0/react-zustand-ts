import React from 'react'
import { useBoundStore } from '../store/datastore'

const Cats = () => {
    const catsCount = useBoundStore((store) => store.catcount)
    const incraseCount = useBoundStore((store) => store.increaseCats)
    const resetCount = useBoundStore((store) => store.resetCats)
  return (
    <div style={{border: '1px solid gray', borderRadius: '8px',  margin: '10px', padding: '10px'}}>
    <h2> Cats </h2>
        Count : {catsCount} <br/>
        <button onClick={() => incraseCount(1)} >increase by 1</button> 
        <button onClick={() => incraseCount(3)} >increase by 3</button> 
        <button onClick={resetCount} >reset</button> 
    </div>
  )
}

export default Cats