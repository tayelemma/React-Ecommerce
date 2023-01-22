import React from 'react';
import { Link } from "react-router-dom"

const Footer= () => {
  return (
    <>
      <div className="footer">
        <div className="justify-content-center d-flex">
          <div className="card-name">
            <img
              alt="mastercard"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
            />
          </div>
          <div className="card-name">
            <img
              alt="visa"
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            />
          </div>
          <div className="card-name">
            <img
              alt="paypal"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
            />
          </div>
          <div className="card-name">
            <img
              alt="express"
              src="https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/American-Express-icon.png"
            />
          </div>
          <div className="card-name">
            <img
              alt="discover"
              src="https://icons-for-free.com/iconfiles/png/512/cash+checkout+discover+network+online+shopping+payment+method-1320191225548835050.png"
            />
          </div>
        </div>
      </div>

      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className=" col-12 justify-content-center  d-flex align-items-center">
              <Link to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer