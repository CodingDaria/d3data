import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from './head'
import Nation from './nation'
import Age from './age'
// import Graph from './graph'
import { getCitizens } from '../redux/reducers/citizens'

const Home = () => {
  // const checkedCitizens = useSelector(({ citizensReducer }) => citizensReducer.checked)
  const nations = useSelector(({ citizensReducer }) => citizensReducer.levels_1)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCitizens())
  }, [])
  return (
    <div>
      <Head title="Population" />
      <div className="flex p-2">
        <Nation />
        <Age />
      </div>
      {/* <Graph /> */}
      {/* <button
        type="button"
        onClick={() => {
          dispatch(getCitizens())
        }}
      >
        Click me!
      </button> */}
      <div>{JSON.stringify(nations)}</div>
    </div>
  )
}

Home.propTypes = {}

export default Home
