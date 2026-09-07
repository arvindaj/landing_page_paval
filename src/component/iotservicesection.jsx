import "bootstrap/dist/css/bootstrap.min.css";
import laptopBg from "../assets/img3/seviceiot.svg";
import "../assets/css/benefilts.css";

// ✅ Import AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const IotServicesSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="py-0">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Images */}
                    <div className="col-lg-6 col-md-6 col-12 position-relative mb-0 mb-md-0 d-flex justify-content-center">
                        <div
                            className="position-relative w-100 d-flex justify-content-center d-none d-md-block"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            {/* Background Image */}
                            <img
                                src={laptopBg}
                                alt="Laptop Background"
                                className="img-fluid rounded-4"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="col-lg-6 col-md-6 col-12 text-center text-md-start px-lg-5 p-md-4">

                        <h1
                            className="mb-3 fw-bold"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "clamp(20px, 3vw, 44px)", // responsive heading
                                lineHeight: "120%",
                            }}
                        >
                           Transforming Business with Paval Soft's IoT Solutions
                        </h1>

                        <p
                            className="text-muted mb-3"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 300,
                                fontSize: "clamp(14px, 2.5vw, 16px)", // responsive body text
                                lineHeight: "150%",
                            }}
                        >
                           Paval Soft builds new IoT products to bring your devices and systems together. We help your business become smarter by optimizing performance and efficiency. We are experts in custom IoT platform development and Industrial IoT (IIoT) solutions.
                        </p>

                        <p
                            className="text-muted mb-3"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 300,
                                fontSize: "clamp(14px, 2.5vw, 16px)", // responsive body text
                                lineHeight: "150%",
                            }}
                        >
                          We handle everything, from setting up your devices to making sure your data is secure. We turn raw information into simple, useful insights that help you make better decisions. Let's work together to create an IoT solution that's a perfect fit for you.
                        </p>
                        <a
                            href="https://www.pavalsoftware.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                className="quote-btn px-4 py-2 mt-5 rounded-pill shadow-sm"
                                style={{
                                    fontSize: "clamp(13px, 2vw, 16px)",
                                }}
                            >
                                Explore Now
                            </button>
                        </a>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default IotServicesSection;
