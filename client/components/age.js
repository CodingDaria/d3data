import React from 'react'
import { useSelector } from 'react-redux'
import Point from './listpoint'

const Age = () => {
  const ageGroups = useSelector(({ citizensReducer }) => citizensReducer.levels_2)
  return (
    <div className="m-2 p-2">
      <div className="text-xl font-bold mb-2">Age group</div>
      <div>
        {ageGroups.map((age) => {
          return <Point key={age} item={age} />
        })}
      </div>
    </div>
  )
}

Age.propTypes = {}

export default Age
