import React from 'react'
import useCatsStore from '../store/datastore'

const Cats = () => {
    const catsCount = useCatsStore((store) => store.cats)
    const incraseCount = useCatsStore((store) => store.increase)
    const resetCount = useCatsStore((store) => store.resetCount)
  return (
    <>
    <h2> Cats </h2>
        Count : {catsCount} <br/>
        <button onClick={() => incraseCount(1)} >increase by 1</button> 
        <button onClick={() => incraseCount(3)} >increase by 3</button> 
        <button onClick={resetCount} >reset</button> 
    </>
  )
}

export default Cats