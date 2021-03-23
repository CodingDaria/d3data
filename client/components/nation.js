import React, { useState } from 'react'

const Nation = () => {
  const [isChecked, setChecked] = useState(false)
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setChecked(e.target.checked)}
        id="male"
      />
      <label htmlFor="male">Male</label>
    </div>
  )
}

Nation.propTypes = {}

export default Nation
