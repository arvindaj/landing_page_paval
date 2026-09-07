import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Blockchainimg from "../assets/img3/benefits.svg";
import "../assets/css/benefilts.css";
import Popup from "../component/popup";

// ✅ Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const BenefiltsSection = () => {
  const [showModal, setShowModal] = useState(false);

  const [activeFeature, setActiveFeature] = useState("Explore the top blockchains");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // smooth scroll animation
  }, []);

  return (
    <>
      <div className="container py-5 mt-5">
        <div className="row align-items-center">

          {/* ✅ Left Content */}
          <div
            className="col-lg-6 col-md-12 mb-0 p-3 py-0 pb-0 p-lg-0 p-md-0"
            data-aos="fade-right"
          >
            <h2
              className="mb-4 fw-bold text-start"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(24px, 4vw, 42px)",
                lineHeight: "120%",
              }}
            >
              The Power of Connected Systems
            </h2>

            <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <h5 className="fw-semibold">Improve Operations through IoT Integration.</h5>
              <p
                className="text-muted text-start"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(14px, 2.5vw, 18px)",
                  lineHeight: "150%",
                }}
              >
              Boost productivity with the help of IoT. Our solutions integrate your devices into one continuous workflow, providing you with real-time information and smarter work.
              </p>
            </div>

            <div className="mb-4" data-aos="fade-up" data-aos-delay="400">
              <h5 className="fw-semibold">Improve Safety with IoT Security.</h5>
              <p
                className="text-muted text-start"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(14px, 2.5vw, 18px)",
                  lineHeight: "150%",
                }}
              >
                Protect your organization with our advanced IoT security. We use powerful encryption and regular monitoring to ensure that your data is fully secure.

              </p>
            </div>

            <div className="mb-0" data-aos="fade-up" data-aos-delay="600">
              <h5 className="fw-semibold">Maximize Value with IoT Analytics.</h5>
              <p
                className="text-muted text-start"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(14px, 2.5vw, 18px)",
                  lineHeight: "150%",
                }}
              >
             We convert raw data into useful insights. Analyzing data from connected devices helps you make smarter decisions, improve performance, and find new ways to grow your business.
              </p>
            </div>

            {/* Button */}
            <button
              className="quote-btn px-4 py-2 rounded-pill text-white"
              onClick={() => setShowModal(true)}
              style={{
                fontSize: "clamp(13px, 1vw, 16px)"
              }}
            >
              Get A Quote
            </button>
          </div>

          {/* ✅ Right Image */}
          <div
            className="col-lg-6 col-md-12 d-flex justify-content-center mt-5 mt-lg-0"
            data-aos="fade-left"
          >
            <img
              src={Blockchainimg}
              alt="Laptop"
              className="rounded-4 laptop-bg-animation"
              style={{ maxHeight: "700px" }}
            />
          </div>
        </div>
      </div>
      {showModal && <Popup onClose={() => setShowModal(false)} />}
    </>
  );
};

export default BenefiltsSection;
