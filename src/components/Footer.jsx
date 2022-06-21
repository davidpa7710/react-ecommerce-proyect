import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="px-4 bg-dark">
        <div className="row">
          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Shop All</a></li>
              <li className="nav-item mb-2"><a href="/womens" className="nav-link p-0 text-white">Women</a></li>
              <li className="nav-item mb-2"><a href="/mens" className="nav-link p-0 text-white">Men</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About Company</a></li>
            </ul>
          </div>
          <div className="col-2">
            <h5>About Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Carrers</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Admin</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-4 offset-1">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-between py-4 pt-5 mt-2 text-white">
          <p>© 2022 GOF1MX, Inc. All rights reserved.</p>
          {/* <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
          </ul> */}
        </div>
      </footer> 
        </>
    )
}

export default Footer
