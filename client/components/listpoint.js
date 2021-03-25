import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setChosenGroups, removeGroup } from '../redux/reducers/citizens'

const Point = ({ item }) => {
  const [isChecked, setChecked] = useState(false)
  const dispatch = useDispatch()
  return (
    <div>
      <input
        type="checkbox"
        className="mr-2"
        checked={isChecked}
        onChange={(e) => {
          setChecked(e.target.checked)
          if (e.target.checked) dispatch(setChosenGroups(item))
          if (!e.target.checked) dispatch(removeGroup(item))
        }}
        id={item}
      />
      <label htmlFor={item}>{item}</label>
    </div>
  )
}

Point.propTypes = {}

export default Point
