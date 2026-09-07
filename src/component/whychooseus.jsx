import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/whychooseus.css"; // 👈 custom CSS

export default function WhyChooseUs() {
  // ✅ Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-5 text-center bg-white">
      <div className="container">
        <h2 
          className="why-heading"
          data-aos="fade-up"
        >
        Why Paval Soft for Your IoT Services?
        </h2>
        <p 
          className="why-desc text-muted mx-auto mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
        We offer advanced IoT solutions with practical applications. Our experience ensures a seamless integration, strong security, and valuable insights to support your company's growth. Select us for a digital transformation that is future-proof and proven to be innovativ
        </p>
      </div>
    </section>
  );
}
