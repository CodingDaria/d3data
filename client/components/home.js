import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from './head'
import Nation from './nation'
import Age from './age'
// import Graph from './graph'
import { getCitizens } from '../redux/reducers/citizens'

const Home = () => {
  const citizens = useSelector(({ citizens: data }) => data.citizens)
  const dispatch = useDispatch()
  return (
    <div>
      <Head title="Population" />
      <div className="flex p-2">
        <Nation />
        <Age />
      </div>
      {/* <Graph /> */}
      <button
        type="button"
        onClick={() => {
          dispatch(getCitizens())
        }}
      >
        Click me!
      </button>
      <div>{JSON.stringify(citizens)}</div>
    </div>
  )
}

Home.propTypes = {}

export default Home
