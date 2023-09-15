import React from 'react'
import image from '../../Assets/Images/avataaars.svg'
import Style from '../Home/Home.module.css'
export default function Home() {
  return <>
  <section className={`${Style.homeSection} text-center d-flex justify-content-center align-items-center`}>
<div>
  <div className="homeImg">
    <div className='my-5'>
    <img src={image} alt="avatar logo" className={`${Style.img}`} />
    </div>
    
      <h2 className={`${Style.homeTitle}`}>START FRAMEWORK</h2>
      
      <div className="d-flex justify-content-center align-items-center my-3">
        <div className={`${Style.line}`}></div>
      <i className={`${Style.homeIcon} fa-solid fa-star text-white position-relative mx-3`}></i>
      <div className={`${Style.line}`}></div>
      </div>
      <p className='text-white mb-5'>Graphic Artist - Web Designer - Illustrator</p>
    
  </div>
</div>
  </section>
  
  </>
}
