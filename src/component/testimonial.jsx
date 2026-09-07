import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import test1 from '../assets/img/testimonials1.png';
import test2 from '../assets/img/testmonial2.jpg';
import test3 from '../assets/img/testmonial3.jpg';
import '../assets/css/testimonial.css'; // for responsive tweaks

const testimonials = [
  {
    name: "Jaison D",
    role: "Operations Manager",
    text: "The IoT solution provided by Paval Soft has fully automated our operations. We are now aware of everything in real-time, which has significantly improved the productivity of our team, and saved us lots of money. An incredible partnership!",
    image: test1,
  },
  {
    name: "Sarah M",
    role: "Business Strategist",
    text: "The data analytics from their IoT system are a game-changer. Smart decisions can now be made based on actionable insights, not guesswork. The experience of the team members in transforming raw data into useful information is of high quality.",
    image: test2,
  },
  {
    name: "Alex P",
    role: "Director of Technology",
    text: "Paval Soft service was excellent. There is no other team better acquainted with the development of the IoT, and their system is free from any security vulnerabilities and fits our requirements perfectly. Our digital transformation is something we are confident about",
    image: test3,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [index]);

  // ✅ Only show 2 thumbnails: current + next
  const visibleThumbs = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
  ];

  return (
    <div className="container py-2">
      <div
        className="row align-items-center bg-white p-4 rounded testimonial-card"
        data-aos="fade-up"
      >
        {/* Left Section */}
        <div className="col-lg-7 col-md-12 mb-4 mb-lg-0" data-aos="fade-right">
          <div className="row g-3">
            {/* Text & Buttons */}
            <div className="col-12 col-md-5 d-flex flex-column justify-content-between">
              <div data-aos="fade-down" data-aos-delay="100">
                <p className="mb-2 fs-6 fs-md-5">
                  <span
                    className="d-inline-block rounded-circle me-2"
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "#B6ED55",
                    }}
                  ></span>
                  <strong>Testimonials</strong>
                </p>
                <h2 className="fw-bold mb-4 mt-3 fs-3 fs-md-2">
                 Hear From Our Clients
                </h2>
              </div>

              <div
                className="d-flex align-items-center flex-wrap gap-2 mt-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <button className="btn btn-outline-dark rounded-circle" onClick={prevSlide}>
                  ❮
                </button>
                <button className="btn btn-outline-dark rounded-circle" onClick={nextSlide}>
                  ❯
                </button>

                {/* ✅ Only two thumbnails */}
                {visibleThumbs.map((t, i) => {
                  const actualIndex = (index + i) % testimonials.length;
                  return (
                    <img
                      key={actualIndex}
                      src={t.image}
                      alt={`thumb-${actualIndex}`}
                      onClick={() => setIndex(actualIndex)}
                      className={`rounded-4 border-2 mx-0 ${actualIndex === index ? "border-dark" : "border-secondary"
                        }`}
                      style={{
                        width: "75px",
                        height: "95px",
                        cursor: "pointer",
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Main Image */}
            <div
              className="col-12 col-md-6 text-center"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="img-fluid rounded testimonial-img"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="col-lg-5 col-md-12 text-center text-lg-start"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <p className="mb-4 fs-5 fs-md-5">
            ❝ {testimonials[index].text} ❞
          </p>
          <h6 className="fw-bold mb-0 fs-5 fs-md-5">{testimonials[index].name}</h6>
          <p className="text-muted fs-5 fs-md-5">{testimonials[index].role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
