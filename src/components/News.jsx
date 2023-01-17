import React from 'react'

const News = ({ title, heading, body, nextBody }) => {
  return (
    <div className='py-4'>
        <h5 className='text-gray-800 font-bold text-xs uppercase'>{title}</h5>
        <h4 className='py-2 capitalize text-3xl text-black-700 font-semibold'>{heading}</h4><br />
        <p className='text-base'>{body}</p><br />
        <p className='text-base'>{nextBody}</p>

    </div>
  )
}

export default News































































