import React, { useState } from 'react'
import axios from 'axios'
import Head from './head'
import Nation from './nation'
// import Age from './age'
// import Graph from './graph'

const Home = () => {
  const [text, setText] = useState({})
  return (
    <div>
      <Head title="Population" />
      <Nation />
      {/* <Age />
      <Graph /> */}
      <button
        type="button"
        onClick={() => {
          axios('/api/v1/citizens').then(({ data: citizens }) => setText(citizens))
        }}
      >
        Click me!
      </button>
      <div>{JSON.stringify(text)}</div>
    </div>
  )
}

Home.propTypes = {}

export default Home
