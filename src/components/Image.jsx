import React from 'react'

export default function Image({ image }) {
  const {img} = image;

  return (
    <div className='img-container'>
      <img src={img} alt="" />
      <input type="checkbox" className='input' name="" id="" />
    </div>
  )
}