import React, { useState } from 'react'
import axios from 'axios'
import Head from './head'

const Dummy = () => {
  const [toggle, setToggle] = useState(false)
  const [text, setText] = useState('')
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          This is dummy component 1234
        </div>
        <button
          type="button"
          onClick={() => {
            axios('/api/v1/citizens').then(({ data: citizens }) => setText(citizens[0].year))
            setToggle(!toggle)
          }}
        >
          Click me!
        </button>
        {toggle && (<div>Success {text}!</div>)}
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
