import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setChosenGroups } from '../redux/reducers/citizens'

const Point = ({ item, level, isChecked }) => {
  const [isCheckedInput, setChecked] = useState(isChecked)
  const dispatch = useDispatch()
  return (
    <div>
      <input
        type="checkbox"
        className="mr-2"
        checked={isCheckedInput}
        onChange={(e) => {
          setChecked(e.target.checked)
          dispatch(setChosenGroups(item, level, !isCheckedInput))
        }}
        id={item}
      />
      <label htmlFor={item}>{item}</label>
    </div>
  )
}

Point.propTypes = {}

export default Point
