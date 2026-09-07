import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import defaultLogo from '../assets/img/pavallogo.png';
import '../assets/css/header.css';
import Popup from "../component/popup";

const Headersection = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <header className="header py-3 border-mobile-hide mb-md-4 animated-border">
            <div className="container-fluid">
                <div className="row align-items-center">
                    {/* Left Section - Logo & Growth */}
                    <div className="col-6 col-lg-4">
                        <div className="d-flex align-items-center">
                            <img
                                src={defaultLogo}
                                alt="Paval Soft Logo"
                                className="logo-img"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/50";
                                }}
                            />
                            <div className="vr bg-dark mx-3 d-none d-lg-block" style={{ height: "40px", opacity: 1.5 }}></div>
                            <a target="_blank" href="#" className="growth-btn d-none d-xl-block mt-3">
                                <span className="dot me-2"> </span>
                                Growth
                            </a>
                        </div>
                    </div>

                    <div className="col-6 d-none d-lg-block col-lg-4">
                        <div className="contact-numbers">
                            <div className="contact-item">
                                <img
                                    src="https://flagcdn.com/in.svg"
                                    alt="India"
                                    className="flag-icon me-1 mb-1"
                                />
                                <a
                                    style={{
                                        fontFamily: "Poppins, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: "normal",
                                        fontSize: "14px",
                                        lineHeight: "144%",
                                        letterSpacing: "0",
                                    }}
                                    href="tel:+916380750902"
                                     className="text-decoration-none text-dark"
                                >
                                    +91 6307050902
                                </a>
                            </div>
                            <div className="contact-item">
                                <img
                                    src="https://flagcdn.com/au.svg"
                                    alt="Australia"
                                    className="flag-icon me-1 mb-1"
                                />
                                
                                <a
                                    style={{
                                        fontFamily: "Poppins, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: "normal",
                                        fontSize: "14px",
                                        lineHeight: "144%",
                                        letterSpacing: "0",
                                    }}
                                     href="tel:+74402720107"
                                     className="text-decoration-none text-dark"
                                >
                                    +74 402720107
                                </a>
                            </div>
                            <div className="contact-item">
                                <img
                                    src="https://flagcdn.com/gb.svg"
                                    alt="UK"
                                    className="flag-icon me-1 mb-1"
                                />
                                <a
                                    style={{
                                        fontFamily: "Poppins, sans-serif",
                                        fontWeight: 400,
                                        fontStyle: "normal",
                                        fontSize: "14px",
                                        lineHeight: "144%",
                                        letterSpacing: "0",
                                    }}
                                      href="tel:+61 449840901"
                                     className="text-decoration-none text-dark"
                                >
                                    +61 449840901
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Right Section - Let's Talk Button */}
                    <div className="col-6 col-lg-4 text-end">
                        <div className="d-flex align-items-center justify-content-end gap-3">
                            <div className="vr bg-dark me-2 d-none d-lg-block" style={{ height: "40px", opacity: 0.8 }}></div>
                            <button className="btn btn-dark rounded-pill px-3 px-lg-4 py-2 quote-btn" onClick={() => setShowModal(true)}>
                                Let's Talk
                            </button>
                        </div>
                    </div>

                    {/* Mobile View - Auto Sliding Contact Numbers */}
                    <div className="col-12 d-block d-lg-none my-2">
                        <div className="mobile-slider-wrapper">
                            <div className="contact-slider animate-scroll">
                                <div className="contact-slide">
                                    <img src="https://flagcdn.com/in.svg" alt="India" className="flag-icon me-1" />
                                   <a href="tel:+916380750902" className="text-decoration-none text-dark">+91 63807 50902</a>
                                </div>
                                <div className="contact-slide">
                                    <img src="https://flagcdn.com/au.svg" alt="Australia" className="flag-icon me-1" />
                                   <a href="tel:+61 7402702107" className="text-decoration-none text-dark">+61 740270 2107</a>
                                </div>
                                <div className="contact-slide">
                                    <img src="https://flagcdn.com/gb.svg" alt="UK" className="flag-icon me-1" />
                                  <a href="tel:+44 449840901" className="text-decoration-none text-dark">+44 449840901</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
            `}</style>
          
        </header>
          {showModal && <Popup onClose={() => setShowModal(false)} />}
        </>
    );
};

export default Headersection;
