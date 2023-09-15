import React from 'react'
import image from '../../Assets/Images/notfound.jpg'

export default function NotFound() {
  return <>
  <div className='text-center'>
  <img src={image} alt="not found" className='w-50'/>
  </div>
  </>
}
