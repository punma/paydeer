import React from 'react'
import GraphCard from './GraphCard'
import graph1 from "../assests/graph1.svg"
import graph2 from "../assests/graph2.svg"
import graph3 from "../assests/graph3.svg"
import graph4 from "../assests/graph1.svg"

const GraphCards = () => {
  return (
    <div className='card-container d-flex'>
    <GraphCard src={graph1}/>
    <GraphCard src={graph2}/>
    <GraphCard src={graph3}/>
    <GraphCard src={graph4}/>
    </div>
  )
}

export default GraphCards
