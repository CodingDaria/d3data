import React from 'react'
import { useSelector } from 'react-redux'
import Point from './listpoint'

const Age = () => {
  const citizens = useSelector(({ citizens: data }) => data.citizens)
  const ageGroups = citizens
    .map((group) => group.level_2)
    .filter((it, index, array) => index === array.indexOf(it))
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
