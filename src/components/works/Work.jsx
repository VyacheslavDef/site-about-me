import React from 'react'

const Work = ({data}) => {
  return (
    <div className='work_item'>
        <img className='work_img mb-16' src={data.image} alt="" />
        <h3>{data.title}</h3>
        <p>check</p>
    </div>
  )
}

export default Work