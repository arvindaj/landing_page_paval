import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Bussiness from "../assets/img2/bussinessimg.svg";

import MobileImg from "../assets/img2/Frame1.svg";
import TargetImg from "../assets/img2/Frame2.svg";
import IdeaImg from "../assets/img2/Frame3.svg";
import CheckImg from "../assets/img2/Frame4.svg";

export default function BusinessGrowth() {
    return (
        <div className="container p-4">
            <div className="row align-items-center flex-column flex-md-row">

                {/* Left Image */}
                <div className="col-md-5 mb-4 mb-md-0">
                    <div className="position-relative rounded overflow-hidden">
                        <img
                            src={Bussiness}
                            alt="Business Growth"
                            className="img-fluid rounded"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div className="col-md-7">
                    <h2 className="fw-bold display-6 text-center text-md-start mb-lg-4">
                        End-to-end Blockchain Development Services
                    </h2>
                    <p
                        className="text-muted col-lg-10 mx-auto mx-md-0 mb-lg-5"
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 200,
                            fontSize: "15px",
                        }}
                    >
                        Pavalsoft creates custom block chains as well as custom public chains adapted to business requirements and provide seamless integration and migration to existing enterprise systems, providing organizations with the security, efficiency, and trust. We provide blockchain solutions at every stage of the process; strategy to deployment.
                    </p>
                    {/* list Content */}
                    <ul className="list-unstyled mt-4 fs-5">
                        <li className="d-flex align-items-start mb-3 ">
                            <img src={MobileImg} alt="Mobile" className="me-3 mt-1 flex-shrink-0" width={28} height={44} />
                            <span className="text-wrap flex-grow-1 mt-1" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 200, fontSize: "15px" }}>
                                Custom Smart Contracts - Smart-contracts that are entirely automatic, and enforce themselves fully, your workflows.
                            </span>
                        </li>
                        <li className="d-flex align-items-start mb-3">
                            <img src={TargetImg} alt="Target" className="me-3 mt-1 flex-shrink-0" width={28} height={44} />
                            <span className="text-wrap flex-grow-1 mt-1" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 200, fontSize: "15px" }}>
                                Private and Public Chains - Architectures dedicated to open and just permissioned networks.
                            </span>
                        </li>
                        <li className="d-flex align-items-start mb-3">
                            <img src={IdeaImg} alt="Idea" className="me-3 mt-1 flex-shrink-0" width={28} height={44} />
                            <span className="text-wrap flex-grow-1 mt-1" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 200, fontSize: "15px" }}>
                                dApp Development Decentralized apps developed to be transparent, reliable and work.
                            </span>
                        </li>
                        <li className="d-flex align-items-start mb-3">
                            <img src={CheckImg} alt="Check" className="me-3 mt-1 flex-shrink-0" width={28} height={44} />
                            <span className="text-wrap flex-grow-1 mt-1" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 200, fontSize: "15px" }}>
                                Integration & Migration - Blockchain integration refers to seamless integration of blockchain in your existing enterprise systems.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
