import React from 'react'

export default function Image({ image }) {
  const {id, img} = image;

  return (
    <div className='img-container'>
      <img src={img} alt={`img-${id}`} />
      <input type="checkbox" className='input' name="" id="" />
    </div>
  )
}