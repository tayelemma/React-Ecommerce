import React from 'react';
import Header from "../components/Header";

function SingleProduct() {
  return (
    <>
      <Header />
      <div className="container single-product">
          <>
            <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                  <img src="" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">New candle</div>
                  </div>
                  <p>This is a good product</p>

                  <div className="product-count col-lg-7 ">
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Price</h6>
                      <span>$34</span>
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6>
                     
                        <span>In Stock</span>
              
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Reviews</h6>
                    </div>
                    
                      <>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Quantity</h6>
                          <select>
                          </select>
                        </div>
                        <button
                          className="round-black-btn"
                        >
                          Add To Cart
                        </button>
                      </>
                  
                  </div>
                </div>
              </div>
            </div>

            {/* RATING */}
            <div className="row my-5">
              <div className="col-md-6">
                <h6 className="mb-3">REVIEWS</h6>
                  <div
                   
                    className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded"
                  >
                    <strong>Customer One</strong> <br></br>
                    {/* <Rating  /> */}
                    <span>Jan 21 2023</span>
                    <div className="alert alert-info mt-3">
                      This is a sample comment
                    </div>
                  </div>
              </div>
              <div className="col-md-6">
                <h6>WRITE A CUSTOMER REVIEW</h6>
                <div className="my-4">
                
                </div>
                
                  <form >
                    <div className="my-4">
                      <strong>Rating</strong>
                      <select
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      >
                        <option value="">Select...</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                      </select>
                    </div>
                    <div className="my-4">
                      <strong>Comment</strong>
                      <textarea
                        row="3"
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <button className="col-12 bg-black border-0 p-3 rounded text-white"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
              
                  <div className="my-3">
                  </div>
              
              </div>
            </div>
          </>
      </div>
    </>
  )
}

export default SingleProduct