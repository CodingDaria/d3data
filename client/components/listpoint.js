import React, { useState } from 'react'

const Point = ({ item }) => {
  const [isChecked, setChecked] = useState(false)
  return (
    <div>
      <input
        type="checkbox"
        className="mr-2"
        checked={isChecked}
        onChange={(e) => setChecked(e.target.checked)}
        id={item}
      />
      <label htmlFor={item}>{item}</label>
    </div>
  )
}

Point.propTypes = {}

export default Point
