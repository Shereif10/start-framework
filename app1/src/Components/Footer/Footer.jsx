import React from "react";
import Style from "../Footer/Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className={`${Style.footerTop} `}>
          <div className="container mx-auto">
            <div className="row text-white my-5">
              <div className="col-md-4 text-center">
                <h3 className={`${Style.fontSize}`}>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
              <div className="col-md-4 text-center">
                <h3 className={`${Style.fontSize}`}>AROUND THE WEB</h3>
                <ul className="list-unstyled d-flex justify-content-center align-items-center">
                  <li>
                    <i className="fa-brands fa-facebook mx-2"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-twitter mx-2"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-linkedin mx-2"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-globe mx-2"></i>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 text-center">
                <h3 className={`${Style.fontSize}`}>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${Style.footerBottom} text-center py-4`}>
          <p className="m-0">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
