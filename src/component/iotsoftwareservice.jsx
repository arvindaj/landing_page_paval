import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/iotsoftwareservices.css";

// Import your custom icons/images
import IconConsulting from "../assets/img3/Group 187.svg";
import IconResearch from "../assets/img3/Group 188.svg";
import IconCustomDev from "../assets/img3/Group 189.svg";
import IconImplementation from "../assets/img3/Group 190.svg";
import IconCloud from "../assets/img3/Group 191.svg";
import IconIntegration from "../assets/img3/Group 192.svg";
import IconReplatform from "../assets/img3/Group 193.svg";
import IconTroubleshoot from "../assets/img3/Group 194.svg";
import IconSupport from "../assets/img3/Group 195.svg";

const IotSoftwareServices = () => {
  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: IconConsulting,
      title: "IoT Proof of Concept (PoC) Development:",
      desc: "IoT Proof of Concept (PoC) Development: We develop IoT prototypes to get your IoT ideas working to confirm that their development is technically and economically viable before committing to a large-scale investment."
    },
    {
      icon: IconResearch,
      title: "Industrial IoT (IIoT) Solutions",
      desc: "We develop and deploy industrial and manufacturing connected solutions to provide predictive maintenance and increase operational efficiency."
    },
    {
      icon: IconCustomDev,
      title: "Smart City and Smart Home Services",
      desc: "Our tech team develops solutions that integrate smart city and smart home infrastructure, such as smart lighting and smart energy management, to build smarter and more comfortable environments."
    },
    {
      icon: IconImplementation,
      title: "IoT Hardware & Firmware Development",
      desc: "We deliver experience in creating and coding the low-level hardware and software that drives custom-built IoT devices and embedded systems."
    },
    {
      icon: IconCloud,
      title: "IoT Asset Tracking Solutions",
      desc: "We implement real-time asset monitoring systems to give you complete visibility over your inventory and logistics, improving supply chain management."
    },
    {
      icon: IconIntegration,
      title: "IoT Network Management",
      desc: "We operate and control the network layer of your IoT ecosystem to make sure your network is always reliable and transmits data safely to all your devices."
    },
    {
      icon: IconReplatform,
      title: "Digital Twin Implementation",
      desc: "We develop virtual, dynamic representations of your physical assets and processes so that you can simulate in real-time and perform advanced performance analyses."
    },
    {
      icon: IconTroubleshoot,
      title: "Voice-Enabled IoT Solutions",
      desc: "This option will combine all your IoT devices with voice assistants and natural language processing to provide an easy, hands-free way to control your devices with voice-activated devices."
    },
    {
      icon: IconSupport,
      title: "IoT Interconnection with Existing Systems",
      desc: "We are experts in integrating new IoT systems into your current IT systems to develop a new and future-proof operational system."
    }
  ];

  return (
    <section className="py-5">
      <div className="container text-start">
        {/* Section Heading */}
        <h2 className="section-heading mb-3" data-aos="fade-up">
          Our Specialized IoT Services
        </h2>
        <p className="section-subtext mb-5" data-aos="fade-up" data-aos-delay="200">
          We comprehend your business needs with our ERP solutions team to help you tap in available
          data and resources, putting them to best use for creative and scalable ERP products.
        </p>

        {/* Grid Layout */}
        <div className="row g-4 p-3">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="card h-100 border-0 p-lg-4 service-card">
                {/* Flex row for img + title */}
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="me-3"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <h5 className="service-title mb-0">{service.title}</h5>
                </div>
                <p className="service-desc text-muted">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IotSoftwareServices;
