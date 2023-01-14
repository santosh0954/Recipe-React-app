import React from 'react'
import spinner from '../Spinner.gif'

function Loading() {
  return (
    <div className='text-center my-5'>
      <img src={spinner} alt="spinner" />
    </div>
  )
}

export default Loading