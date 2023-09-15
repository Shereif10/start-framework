import React from "react";
import Style from './Contact.module.css'

export default function Contact() {
  return (
    <>
      <section className="text-center py-3">
        <div className={`${Style.container}`}>
          <div className="contactTitle">
            <h2 className={`${Style.contactTitle}`}>CONATCT SECTION</h2>
          </div>
          <div>
            <div className="d-flex justify-content-center align-items-center my-3">
              <div className={`${Style.line}`}></div>
              <i
                className={`${Style.icon} fa-solid fa-star position-relative mx-3`}
              ></i>
              <div className={`${Style.line}`}></div>
            </div>
          </div>
          <input type="text" placeholder="userName" className={`${Style.input} w-75 rounded-1 mb-3 mt-5`}/>
          <input type="number" placeholder="userAge" className={`${Style.input} w-75 rounded-1 mb-3`} />
          <input type="email" placeholder="userEmail" className={`${Style.input} w-75 rounded-1 mb-3`} />
          <input type="password" placeholder="userPassword" className={`${Style.input} w-75 rounded-1 mb-5`} />
          <div>
          <button className={`${Style.send} btn text-white `}>send Message</button>
          </div>
        </div>
      </section>
    </>
  );
}
