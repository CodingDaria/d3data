import React from 'react'
import { useSelector } from 'react-redux'
import Point from './listpoint'

const Nation = () => {
  const nations = useSelector(({ citizensReducer }) => citizensReducer.levels_1)
  return (
    <div className="m-2 p-2">
      <div className="text-xl font-bold mb-2">Ethnic group</div>
      <div>
        {nations.map((nation) => {
          return (
            <Point
              key={nation.name}
              item={nation.name}
              level="levels_1"
              isChecked={nation.isChecked}
            />
          )
        })}
      </div>
    </div>
  )
}

Nation.propTypes = {}

export default Nation
