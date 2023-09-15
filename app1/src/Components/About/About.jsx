import React from "react";
import Style from "./About.module.css";
export default function About() {
  return (
    <>
      <section className={`${Style.aboutSection} text-white`}>
        <div className="container w-75">
          <div>
            <div className="text-center ">
              <h2 className={`${Style.aboutTitle}`}>ABOUT COMPONENT</h2>
            </div>
            <div>
              <div className="d-flex justify-content-center align-items-center my-3">
                <div className={`${Style.line}`}></div>
                <i
                  className={` fa-solid fa-star text-white position-relative mx-3`}
                ></i>
                <div className={`${Style.line}`}></div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mb-5">
              <p className="">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className="">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
