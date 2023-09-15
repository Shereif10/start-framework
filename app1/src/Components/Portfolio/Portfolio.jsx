import React from "react";
import Style from "./Portfolio.module.css";
import house from "../../Assets/Images/poert1.png";
import cake from "../../Assets/Images/port2.png";
import garage from "../../Assets/Images/port3.png";
import Swal from "sweetalert2";


export default function Portfolio() {
  function popUp(image){
    Swal.fire({
      background:` none `,
      backdrop: `
        rgba(0,0,123,0.4)
        url(${image})
        center center
        no-repeat
     `,
     showConfirmButton: false
    })
  }
  return (
    <>
      <section className="text-center py-3 mb-2 position-relative">
        <div className="container">
          <div className="portfolioTitle">
            <h2 className={`${Style.portfolioTitle}`}>PORTFOLIO COMPONENT</h2>
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
          <div className="row gy-5">
            <div className="col-md-4">
              <div className=" position-relative">
                <img src={house} alt="" className="w-100 rounded-3" />
                <div className={`${Style.layer} rounded-3 d-flex justify-content-center align-items-center text-white`} onClick={()=>{popUp(house)}}><i class="fa-solid fa-plus fa-6x"></i></div>
              </div>
            </div>
            <div className="col-md-4" >
              <div className=" position-relative">
                <img src={cake} alt="" className="w-100 rounded-3" />
                <div className={`${Style.layer} rounded-3 d-flex justify-content-center align-items-center text-white`} onClick={()=>{popUp(cake)}}><i class="fa-solid fa-plus fa-6x"></i></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" position-relative">
                <img src={garage} alt="" className="w-100 rounded-3" />
                <div className={`${Style.layer} rounded-3 d-flex justify-content-center align-items-center text-white`} onClick={()=>{popUp(garage)}}><i class="fa-solid fa-plus fa-6x"></i></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" position-relative">
                <img src={house} alt="" className="w-100 rounded-3" />
                <div className={`${Style.layer} rounded-3 d-flex justify-content-center align-items-center text-white`} onClick={()=>{popUp(house)}}><i class="fa-solid fa-plus fa-6x"></i></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" position-relative">
                <img src={cake} alt="" className="w-100 rounded-3" />
                <div className={`${Style.layer} rounded-3 d-flex justify-content-center align-items-center text-white`} onClick={()=>{popUp(cake)}}><i class="fa-solid fa-plus fa-6x"></i></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" position-relative">
                <img src={garage} alt="" className="w-100 rounded-3" />
                <div className={`${Style.layer} rounded-3 d-flex justify-content-center align-items-center text-white`} onClick={()=>{popUp(garage)}}><i class="fa-solid fa-plus fa-6x"></i></div>
              </div>
            </div>
          </div>
          {/* <div className={`${Style.popup} w-100 position-absolute top-0 end-0`}>
            <img src={house} alt="" className="w-50"/>
          </div> */}
        </div>
      </section>
    </>
  );
}
