import React from 'react'
import { useSelector } from 'react-redux'
import Point from './listpoint'

const Nation = () => {
  const citizens = useSelector(({ citizens: data }) => data.citizens)
  const nations = citizens.map((group) => group.level_1).filter((it, index, array) => index === array.indexOf(it))
  return (
    <div className="m-2 p-2">
      <div className="text-xl font-bold mb-2">Ethnic group</div>
      <div>
        {nations.map((nation) => {
          return <Point key={nation} item={nation} />
        })}
      </div>
    </div>
  )
}

Nation.propTypes = {}

export default Nation
