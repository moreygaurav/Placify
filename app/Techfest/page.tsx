
import React from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function Techfest() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      {/* ===== HERO AREA ===== */}
      <div
        className="inner-page-header"
        style={{ backgroundImage: "url(/assets/img/bg/header-bg17.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="heading1 text-center">
                <h1>TechFest India 2026</h1>
                <div className="space20" />
                <Link href="/">
                  Home <i className="fa-solid fa-angle-right" />{" "}
                  <span>TechFest</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== ABOUT EVENT ===== */}
      <section className="about1-section-area sp1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 m-auto reveal image-anime shadow-lg p-1 " data-aos="fade-right" data-aos-duration={1200} >
              <img
                src="/assets/img/all-images/techfest/TF-img-1.png"
                alt="TechFest"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-8 m-auto">
              <div className="about-header-area heading2">
                <h5 data-aos="fade-left" data-aos-duration={800}>TrainingPlacementNetwork.com Presents</h5>
                <br /> <br />
                <h2 data-aos="fade-left" data-aos-duration={1000} className="text-anime-style-5">TechFest India 2026</h2>
                <hr data-aos="fade-left" data-aos-duration={1000} style={{ borderColor: '#fea900ff', borderWidth: '2px' }} />
                <p data-aos="fade-left" data-aos-duration={1200} >
                  An international-level technology festival hosted across 10
                  major IT cities in India. Join innovators, students, startups,
                  and industry leaders to create PoCs and MVPs in AI,
                  blockchain, healthcare, fintech, agritech, and sustainability.
                  Compete for funding, awards, and global recognition!
                </p>
                <br />
                <div className="space32" data-aos="fade-left" data-aos-duration={1200} >

                  <Link href="/contact" className="vl-btn1">
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY JOIN ===== */}
      <section className="choose-section-area sp2">
        <div className="container">
          <div className="heading2 text-center  ">
            <h5 data-aos="fade-up" data-aos-duration={800} >Why Join TechFest India?</h5>
          </div>
          <br />
          <div className="row">
            {[
              {
                title: "For Participants",
                desc: "Build PoCs/MVPs, receive mentorship, and compete for up to ₹50,00,000 in seed funding.",
              },
              {
                title: "For Startups",
                desc: "Showcase your solutions, attract investors, and network with industry giants.",
              },
              {
                title: "For Sponsors",
                desc: "Gain unparalleled visibility and position your brand as a tech leader.",
              },
              {
                title: "For Industry Partners",
                desc: "Discover innovative solutions and collaborate with top talent.",
              },
            ].map((item, i) => (
              <div key={i} className="mx-0 col-lg-3 col-md-6 d-flex">
                <div className="choose-widget-boxarea text-center  d-flex flex-column justify-content-between w-100" data-aos="fade-up" data-aos-duration={800}>
                  <div className="content-area" >
                    <div className="icons" data-aos="fade-up" data-aos-duration={1200}>
                      <img src="/assets/img/icons/choose-icons1.svg" alt="" data-aos="fade-up" data-aos-duration={1200} />
                    </div><br />
                    <h6 className=" text-center fw-bold" data-aos="fade-up" data-aos-duration={1200} > {item.title}</h6>
                    <hr data-aos="fade-up" data-aos-duration={1000} style={{ borderColor: '#fea900ff', borderWidth: '1px' }} />
                    <p className="text-start d-flex" data-aos="fade-up" data-aos-duration={1200}>  <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span> {item.desc}</p>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EVENT HIGHLIGHTS ===== */}

      <section className="sp2">
        <div
          className="heading2 text-center space-margin60"
          data-aos="fade-up"
          data-aos-duration={800}
        >
          <h5>Event Highlights</h5>
        </div>

        <div className="container">
          <div className="row align-items-center">
            {/* === LEFT: Image Grid === */}
            <div className="col-lg-5 col-md-12 m-auto   order-1 order-lg-1">
              <div className="row g-3">
                {/* Image 1 */}
                <div className="col-8 col-lg-8 reveal image-anime shadow-lg p-1">
                  <img
                    src="/assets/img/all-images/techfest/TF-img-2.jpg"
                    data-aos="fade-right"
                    data-aos-duration={1000}
                    className="img-fluid w-100"
                    alt="Image 1"
                  />
                </div>

                {/* Image 2 */}
                <div className="col-4 col-lg-4 reveal image-anime shadow-lg p-1">
                  <img
                    src="/assets/img/all-images/techfest/TF-img-3.jpg"
                    data-aos="fade-down"
                    data-aos-duration={1000}
                    className="img-fluid w-100 h-100"
                    alt="Image 2"
                  />
                </div>

                {/* Image 3 */}
                <div className="col-4 col-lg-4 reveal image-anime shadow-lg p-1">
                  <img
                    src="/assets/img/all-images/techfest/TF-img-4.jpg"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    className="img-fluid w-100"
                    alt="Image 3"
                  />
                </div>

                {/* Image 4 */}
                <div className="col-8 col-lg-8 reveal image-anime shadow-lg p-1">
                  <img
                    src="/assets/img/all-images/techfest/TF-img-5.jpg"
                    data-aos="fade-left"
                    data-aos-duration={1000}
                    className="img-fluid w-100"
                    alt="Image 4"
                  />
                </div>
              </div>

            </div>

            {/* === RIGHT: Text Content === */}
            <div className="col-lg-6 col-md-12 m-auto text-start card shadow-lg p-3 border-0 order-2 order-lg-2">
              {[
                "🚀 Hackathons to develop PoCs/MVPs for real-world challenges.",
                "🎓 Mentorship from global tech experts and venture capitalists.",
                "🏆 Awards and funding for top innovations.",
                "🤝 Networking with investors, industry leaders, and peers.",
              ].map((item, i) => (
                <div key={i} className="mb-3">

                  <div
                    className="choose-widget-boxarea"
                    data-aos="fade-up"
                    data-aos-duration={800 + i * 100}
                  >
                    <div className="content-area text-start">
                      <h6>{item}</h6>
                    </div>
                  </div>
                </div>
              ))}
              <p
                className="mt-4 text-center"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                Join us in{" "}
                <strong className="fw-bold">
                  Bangalore, Hyderabad, Chennai, Delhi, Mumbai, Pune, Kolkata,
                  Ahmedabad, Chandigarh, and Coimbatore!
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ===== ABOUT TECHFEST ===== */}
      <section className="about1-section-area sp2">
        <div className="container">
          <div className="heading2 text-center space-margin60">
            <h5 data-aos="fade-up fw-bold" data-aos-duration={800}>About TechFest India</h5>
          </div>

          <div className="row col-lg-12 mx-4 d-flex flex-column">
            <div className="col-lg-12 mx-auto">

              {/* Card 1 - Our Mission */}
              <div className="heading2 col-12 card shadow-lg p-3 border-0 d-flex flex-column flex-lg-row align-items-center mb-4">
                {/* Text */}
                <div className="col-lg-8 col-md-12 mx-auto text-center">
                  <h5 className="mt-4" data-aos="fade-up" data-aos-duration={800}>Our Mission</h5>
                  <hr data-aos="fade-up" data-aos-duration={1000} style={{ borderColor: '#fea900ff', borderWidth: '1px' }} />
                  <div className="d-flex flex-column text-start gap-2" data-aos="fade-left" data-aos-duration={1000}>
                    <div className="d-flex flex-row">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff">
                          <path d="M400-280v-400l200 200-200 200Z" />
                        </svg>
                      </span>
                      <p data-aos="fade-up" data-aos-duration={800}>
                        At <strong>TrainingPlacementNetwork.com</strong>, we are committed to fostering innovation and entrepreneurship across India. TechFest India empowers participants to transform ideas into impactful PoCs and MVPs, bridging the gap between education, innovation, and industry.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="col-lg-3 col-md-12 m-4 reveal image-anime shadow-lg p-1" data-aos="fade-left" data-aos-duration={800}>
                  <img
                    src="/assets/img/all-images/techfest/TF-img-6.jpg"
                    alt="TechFest"
                    className="img-fluid w-100 h-auto"
                  />
                </div>
              </div>

              {/* Card 2 - What We Do */}
              <div className="heading2 card shadow-lg p-3 border-0 d-flex flex-column flex-lg-row align-items-center mb-4">
                {/* Image */}
                <div className="col-lg-3 col-md-12 m-4 reveal image-anime shadow-lg p-1" data-aos="fade-right" data-aos-duration={1200}>
                  <img
                    src="/assets/img/all-images/techfest/TF-img-7.jpg"
                    alt="TechFest"
                    className="img-fluid w-100 h-auto"
                  />
                </div>

                {/* Text */}
                <div className="col-lg-8 col-md-12 mx-auto text-center">
                  <h5 className="mt-4 fw-bold" data-aos="fade-up" data-aos-duration={800}>What We Do</h5>
                  <hr data-aos="fade-up" data-aos-duration={1000} style={{ borderColor: '#fea900ff', borderWidth: '1px' }} />
                  <div className="d-flex flex-column text-start gap-2" data-aos="fade-left" data-aos-duration={1000}>
                    <div className="d-flex flex-row">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff">
                          <path d="M400-280v-400l200 200-200 200Z" />
                        </svg>
                      </span>
                      <p><strong>Hackathons:</strong> Build PoCs/MVPs in 24-48 hours across industries like AI, IoT, fintech, healthcare, and more.</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff">
                          <path d="M400-280v-400l200 200-200 200Z" />
                        </svg>
                      </span>
                      <p><strong>Innovation Challenges:</strong> Solve real-world problems with expert mentorship.</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff">
                          <path d="M400-280v-400l200 200-200 200Z" />
                        </svg>
                      </span>
                      <p><strong>Pitch Sessions:</strong> Present your solutions to investors for funding opportunities.</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff">
                          <path d="M400-280v-400l200 200-200 200Z" />
                        </svg>
                      </span>
                      <p><strong>Workshops:</strong> Learn about emerging technologies, product development, and startup strategies.</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff">
                          <path d="M400-280v-400l200 200-200 200Z" />
                        </svg>
                      </span>
                      <p><strong>Exhibitions:</strong> Showcase innovations to a global audience.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Our Vision */}
              <div className="heading2 card shadow-lg p-3 border-0 d-flex flex-column flex-lg-row align-items-center">
                {/* Text */}
                <div className="col-lg-7 col-md-12 mx-auto text-center">
                  <h5 className="mt-4 fw-bold" data-aos="fade-up" data-aos-duration={800}>Our Vision</h5>
                  <hr data-aos="fade-up" data-aos-duration={1000} style={{ borderColor: '#fea900ff', borderWidth: '1px' }} />
                  <div className="d-flex flex-row text-start gap-2" data-aos="fade-left" data-aos-duration={1000}>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff">
                        <path d="M400-280v-400l200 200-200 200Z" />
                      </svg>
                    </span>
                    <p data-aos="fade-up" data-aos-duration={800}>
                      To establish India as a global hub for technological innovation, empowering creators to build solutions that shape the future.
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="col-lg-4 col-md-12 m-2 reveal image-anime shadow-lg p-1 align-content-center" data-aos="fade-left" data-aos-duration={1600}>
                  <img
                    src="/assets/img/all-images/techfest/TF-img-8.jpg"
                    alt="TechFest"
                    className="img-fluid w-100 h-auto"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== For Participants ===== */}
      <section className="about1-section-area sp2">
        <div className="container">
          {/* Section Heading */}
          <div className="heading2 text-center space-margin60">
            <h5 data-aos="fade-up" data-aos-duration={800} className="fw-bold">
              For Participants
            </h5>
            <hr
              data-aos="fade-up"
              data-aos-duration={1000}
              style={{ borderColor: "#fea900ff", borderWidth: "1px" }}
            />
            <p className="text-center" data-aos="fade-up" data-aos-duration={800}>
              TechFest India, organized by TrainingPlacementNetwork.com, is your
              platform to build PoCs and MVPs, gain mentorship, and compete for
              funding and awards. Open to students, tech enthusiasts, and aspiring
              entrepreneurs.
            </p>
          </div>

          <div className="row col-lg-12 mx-4 d-flex flex-column">
            <div className="col-lg-12 mx-auto">

              {/* Card 1 - What You Get */}
              <div className="heading2 col-12 card shadow-lg p-3 border-0 d-flex flex-column flex-lg-row align-items-center mb-4">
                {/* Image */}
                <div
                  className="col-lg-4 col-md-12 m-4 reveal image-anime shadow-lg p-1"
                  data-aos="fade-right"
                  data-aos-duration={800}
                >
                  <img
                    src="/assets/img/all-images/techfest/TF-img-9.jpg"
                    alt="TechFest"
                    className="img-fluid w-100 h-auto"
                  />
                </div>

                {/* Text */}
                <div className="col-lg-8 col-md-12 mx-auto">
                  <div className="text-center">
                    <h5 className="mt-4" data-aos="fade-up" data-aos-duration={800}>
                      What You Get
                    </h5>
                    <hr
                      data-aos="fade-up"
                      data-aos-duration={1000}
                      style={{ borderColor: "#fea900ff", borderWidth: "1px" }}
                    />
                  </div>
                  <div className="d-flex flex-column text-start gap-2" data-aos="fade-left" data-aos-duration={1000}>
                    <div className="d-flex flex-row">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                      </span>
                      <p><strong>Hackathons:</strong> Collaborate in teams to create PoCs/MVPs.</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                      </span>
                      <p><strong>Mentorship:</strong> Guidance from industry leaders and venture capitalists.</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                      </span>
                      <p><strong>Funding:</strong> Top innovations eligible for up to ₹50,00,000 in seed funding.</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                      </span>
                      <p><strong>Awards:</strong> Cash prizes, internships, and incubation support.</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                      </span>
                      <p><strong>Networking:</strong> Connect with investors, industry experts, and peers.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Participation Fee */}
              <div className="heading2 card shadow-lg p-3 border-0 d-flex flex-column flex-lg-row align-items-center mb-4">
                {/* Text */}
                <div className="col-lg-7 col-md-12 mx-auto text-center">
                  <h5 className="mt-4 fw-bold" data-aos="fade-up" data-aos-duration={800}>
                    Participation Fee
                  </h5>
                  <hr
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    style={{ borderColor: "#fea900ff", borderWidth: "1px" }}
                  />
                  <div className="d-flex flex-column align-items-start text-start gap-2">
                    <div className="d-flex flex-row">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                      </span>
                      <p><strong>Student/Individual:</strong> ₹1,000 (Early Bird), ₹1,500 (Regular), ₹2,000 (On-Spot).</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                      </span>
                      <p><strong>Team (up to 5 members):</strong> ₹4,000 (Early Bird), ₹6,000 (Regular), ₹8,000 (On-Spot).</p>
                    </div>
                    <div className="d-flex flex-row">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                      </span>
                      <p><em>Fees include access to hackathons, workshops, mentorship, and networking. Limited scholarships available.</em></p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div
                  className="col-lg-4 col-md-12 m-4 reveal image-anime shadow-lg p-1"
                  data-aos="fade-left"
                  data-aos-duration={1200}
                >
                  <img
                    src="/assets/img/all-images/techfest/TF-img-10.jpg"
                    alt="TechFest"
                    className="img-fluid w-100 h-auto"
                  />
                </div>
              </div>

              {/* Card 3 - How to Register */}
              <div className="heading2 card shadow-lg p-3 border-0 d-flex flex-column flex-lg-row align-items-center">
                {/* Image */}
                <div
                  className="col-lg-4 col-md-12 m-2 reveal image-anime shadow-lg p-1"
                  data-aos="fade-right"
                  data-aos-duration={1600}
                >
                  <img
                    src="/assets/img/all-images/techfest/TF-img-11.jpg"
                    alt="TechFest"
                    className="img-fluid w-100 h-auto"
                  />
                </div>

                {/* Text */}
                <div className="col-lg-7 col-md-12 mx-auto text-center">
                  <h5 className="mt-4 fw-bold" data-aos="fade-up" data-aos-duration={800}>
                    How to Register
                  </h5>
                  <hr
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    style={{ borderColor: "#fea900ff", borderWidth: "1px" }}
                  />

                  <div>
                    <strong>Steps:</strong><br />
                    <div className="d-flex flex-row text-start gap-2">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                      </span>
                      <p>1. Visit TrainingPlacementNetwork.com and create an account.</p>
                    </div>
                    <div className="d-flex flex-row text-start gap-2">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                      </span>
                      <p>2. Select your city, event date, and team (if applicable).</p>
                    </div>
                    <div className="d-flex flex-row text-start gap-2">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                      </span>
                      <p>3. Pay the registration fee and submit your project idea (optional).</p>
                    </div>
                    <div className="d-flex flex-row text-start gap-2">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                      </span>
                      <p>4. Receive your event pass and hackathon toolkit.</p>
                    </div>
                  </div>

                  <div className="text-center mt-4" data-aos="fade-up" data-aos-duration={1500}>
                    <Link href="/contact" className="vl-btn1">
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ===== FOR STARTUPS ===== */}
      <section className="pricing-section-area sp2">
        <div className="container">
          {/* Heading */}
          <div className="heading2 text-center space-margin60 ">
            <h5 data-aos="fade-up" data-aos-duration={800}>For Startups</h5>
            <p className="text-center mt-3" data-aos="fade-up" data-aos-duration={800}>
              TechFest India offers startups a global stage to present PoCs/MVPs, attract investors, and build partnerships.
            </p>
          </div>

          {/* Grid Section */}
          <div className="container my-4">
            <div className="row g-4"> {/* g-4 removes unwanted gaps and makes layout tighter */}

              {/* Row 1 */}
              <div className="col-lg-7 col-md-12" id="r1c1">
                <div className="card heading2 shadow-lg p-4 border-0 h-100">
                  <div className="text-center">
                    <h5 data-aos="fade-up" data-aos-duration={800}>Why Participate?</h5>
                    <hr data-aos="fade-up" data-aos-duration={1000} style={{ borderColor: '#fea900ff', borderWidth: '1px' }} />
                  </div>
                  <div>
                    <div className="d-flex flex-row" data-aos="fade-left" data-aos-duration={1000}>
                      <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span>
                      <p data-aos="fade-up" data-aos-duration={800}> <strong>Investor Connect:</strong> Pitch to venture capitalists and angel investors.</p>
                    </div>
                    <div className="d-flex flex-row" data-aos="fade-left" data-aos-duration={1000}>
                      <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span>
                      <p data-aos="fade-up" data-aos-duration={800}><strong>Visibility:</strong> Showcase your product to thousands of attendees.</p>
                    </div>
                    <div className="d-flex flex-row" data-aos="fade-left" data-aos-duration={1000}>
                      <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span>
                      <p data-aos="fade-up" data-aos-duration={800}><strong>Mentorship:</strong> Refine your solution with expert guidance.</p>
                    </div>
                    <div className="d-flex flex-row " data-aos="fade-left" data-aos-duration={1000}>
                      <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span>
                      <p data-aos="fade-up" data-aos-duration={800}><strong>Networking:</strong> Build relationships with industry leaders and customers.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 reveal image-anime shadow-lg p-1" data-aos="fade-left" data-aos-duration={800} id="r1c3">
                <img src="/assets/img/all-images/techfest/TF-img-12.jpg" className="img-fluid w-100 " alt="R1C3 Image" />
              </div>

              {/* Row 2 */}
              <div className="col-lg-2 col-md-12" id="r2c1">

              </div>

              <div className="col-lg-8 col-md-12" id="r2c2">
                <div className="card heading2 shadow-lg p-4 border-0 h-100 text-center">
                  <div>
                    <h5 data-aos="fade-up" data-aos-duration={800}>Startup Participation Fee</h5>
                    <hr data-aos="fade-up" data-aos-duration={1000} style={{ borderColor: '#fea900ff', borderWidth: '1px' }} />
                  </div>
                  <div className="text-start">
                    <div className="d-flex flex-row" data-aos="fade-left" data-aos-duration={1000}>
                      <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span>
                      <p className="mt-1" data-aos="fade-up" data-aos-duration={800}> <strong>Standard Package:</strong> ₹25,000 per event (booth space, pitch session).</p>
                    </div>
                    <div className="d-flex flex-row" data-aos="fade-left" data-aos-duration={1000}>
                      <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span>
                      <p data-aos="fade-up" data-aos-duration={800}><strong>Premium Package:</strong> ₹50,000 per event (larger booth, priority pitch slot, branding).</p>
                    </div>
                  </div>
                  <div className="mt-3" data-aos="fade-up" data-aos-duration={1500}>
                    <Link href="/pricing-plan" className="vl-btn1">Pricing Plan</Link>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="col-lg-5 col-md-12 reveal image-anime shadow-lg p-1 " data-aos="fade-right" data-aos-duration={800} id="r3c1">
                <img src="/assets/img/all-images/techfest/TF-img-13.jpg" className="img-fluid w-100 h-100" alt="R3C1 Image" />
              </div>

              <div className="col-lg-7 col-md-12" id="r3c3">

                <div className="card heading2 shadow-lg p-4 border-0 h-100 text-center">
                  <div>
                    <h5 data-aos="fade-up" data-aos-duration={800}>How to Participate</h5>
                    <hr data-aos="fade-up" data-aos-duration={1000} style={{ borderColor: '#fea900ff', borderWidth: '1px' }} />
                  </div>

                  <div className="text-start">
                    <div className="d-flex flex-row" data-aos="fade-left" data-aos-duration={1000}>
                      <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span>
                      <p className="mt-1" data-aos="fade-up" data-aos-duration={800}>
                        Register your startup on <b>TrainingPlacementNetwork.com.</b> <br />
                        Select your event cities and package.
                        Prepare your pitch and demo with our team’s support.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3" data-aos="fade-up" data-aos-duration={1500}>
                    <Link href="/contact" className="vl-btn1">Register Now</Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Participation fees & Packages, Choose your catagory */}

      <section className="choose-section-area sp2">
        <div className="container">
          <div className="heading2 text-center space-margin60">
            <h5 data-aos="fade-up" data-aos-duration={800}>Participation Fees & Packages</h5>
            <h2 data-aos="fade-up" data-aos-duration={800}>Choose Your Category</h2>
          </div>
          <div className="row">
            {[
              {
                title: "Participants (Students/Individuals)",
                fee: "₹1,000",
                perks: [
                  "Access to all workshops",
                  "Participation in Hackathons",
                  "Certificate of Excellence",
                  "Networking Opportunities",
                ],
              },
              {
                title: "Startups",
                fee: "₹10,000",
                perks: [
                  "Startup Booth & Showcase",
                  "Investor Pitching Sessions",
                  "Media Coverage",
                  "Mentorship from Industry Experts",
                ],
              },
              {
                title: "Sponsors",
                fee: "₹50,000 onwards",
                perks: [
                  "Brand Visibility Across All Cities",
                  "Logo on Website & Event Materials",
                  "Speaking Opportunities",
                  "Exclusive Networking Dinners",
                ],
              },
              {
                title: "Industry Partners",
                fee: "₹1,00,000 onwards",
                perks: [
                  "Priority Access to Talent",
                  "Collaboration on PoCs",
                  "Dedicated Branding Space",
                  "Media & Press Recognition",
                ],
              },
            ].map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6 d-flex">
                <div className="choose-widget-boxarea text-center d-flex flex-column justify-content-between w-100 " data-aos="fade-up" data-aos-duration={800}>
                  <div className="content-area heading2">
                    <div className="icons">
                      <img src="/assets/img/icons/choose-icons1.svg" alt="" />
                    </div>
                    <br />
                    <h6 className=" fw-bold">{item.title}</h6>

                    {/* Keep HR at the same level by giving consistent margin */}
                    <hr style={{ borderColor: '#fea900ff', borderWidth: '1px' }} />

                    <h4>{item.fee}</h4>
                    <br />
                  </div>
                  <div className="pricing-list flex-grow-1">
                    {item.perks.map((perk, j) => (
                      <h6 className="text-start d-flex" key={j}>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff">
                            <path d="M400-280v-400l200 200-200 200Z" />
                          </svg>
                        </span>
                        {perk}
                      </h6>
                    ))}
                  </div>
                  <Link href="/contact" className="vl-btn1 mt-3">
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== FOR SPONSORS ===== */}
      <section className="choose-section-area sp2">
        <div className="container">
          <div className="heading2 text-center space-margin60">
            <h5 data-aos="fade-up" data-aos-duration={800}>For Sponsors</h5>
            <br />
            <p className="text-center heading2" data-aos="fade-up" data-aos-duration={800}>
              Sponsoring TechFest India positions your brand as a leader in tech innovation.
            </p>
          </div>
          <br />

          {/* Row for image grid + text container */}
          <div className="row align-items-center">

            {/* === LEFT SIDE: Image Grid === */}
            <div className="col-lg-5 col-md-12 mb-4">
              <div className="row g-3">
                {/* Image 1 (Horizontal) */}
                <div className="col-8 mx-auto reveal image-anime shadow-lg p-1">
                  <img src="/assets/img/all-images/techfest/TF-img-14.jpg" data-aos="fade-right" data-aos-duration={1000} className="img-fluid w-100" alt="Image 1" />
                </div>

                {/* Image 2 (Vertical) */}
                <div className="col-4 d-flex mflex-column m-b-0 reveal image-anime shadow-lg p-1">
                  <img src="/assets/img/all-images/techfest/TF-img-15.jpg" data-aos="fade-down" data-aos-duration={1000} className="img-fluid h-100" alt="Image 2" />
                </div>

                {/* Image 4 (Horizontal) */}
                <div className="col-12 mx-auto reveal image-anime shadow-lg p-1" data-aos="fade-right" data-aos-duration={1000}>
                  <img src="/assets/img/all-images/techfest/TF-img-16.jpg" className="img-fluid w-100" alt="Image 4" />
                </div>
              </div>
            </div>

            {/* === RIGHT SIDE: Text Container === */}
            <div className="col-lg-7 col-md-12 d-flex flex-column align-items-center">
              <div className="col-12 heading2 card shadow-lg p-3 border-0">
                <div className="text-center">
                  <h5 data-aos="fade-up" data-aos-duration={800}>Sponsorship Benefits</h5>
                </div>
                <hr data-aos="fade-up" data-aos-duration={1000} style={{ borderColor: '#fea900ff', borderWidth: '1px' }} />
                <div className="d-flex flex-row" data-aos="fade-left" data-aos-duration={1000}>
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span>
                  <h6 data-aos="fade-up" data-aos-duration={800}> <strong>Brand Exposure:</strong> Logo placement on event materials, website, and social media.</h6>
                </div>
                <div className="d-flex flex-row" data-aos="fade-left" data-aos-duration={1000}>
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span>
                  <h6 data-aos="fade-up" data-aos-duration={800}>  <strong> Engagement:</strong>  Host workshops, sponsor hackathons, or set up booths.</h6>
                </div>
                <div className="d-flex flex-row" data-aos="fade-left" data-aos-duration={1000}>
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span>
                  <h6 data-aos="fade-up" data-aos-duration={800}> <strong>Targeted Audience:</strong>  Reach innovators, startups, and industry professionals.</h6>
                </div>
                <div className="d-flex flex-row" data-aos="fade-left" data-aos-duration={1000}>
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span>
                  <h6 data-aos="fade-up" data-aos-duration={800}> <strong>CSR Impact:</strong>  Support India’s tech ecosystem.</h6>
                </div>
              </div>
              <br />
              <div className="col-12 heading2  card shadow-lg p-3 border-0 ">
                <div className="text-center">
                  <h5 data-aos="fade-up" data-aos-duration={800}>Sponsorship Packages</h5>
                </div>
                <hr data-aos="fade-up" data-aos-duration={1000} style={{ borderColor: '#fea900ff', borderWidth: '1px' }} />
                <div className="d-flex flex-row" data-aos="fade-left" data-aos-duration={1000}>
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span>
                  <h6 data-aos="fade-up" data-aos-duration={800}> <strong> Silver Sponsor:</strong>  ₹10,00,000 per event (logo on website, brochures, banners).</h6>
                </div>
                <div className="d-flex flex-row" data-aos="fade-left" data-aos-duration={1000}>
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span>
                  <h6 data-aos="fade-up" data-aos-duration={800}> <strong>Gold Sponsor:</strong>  ₹20,00,000 per event (larger logo, booth space, social media shoutouts).</h6>
                </div>
                <div className="d-flex flex-row" data-aos="fade-left" data-aos-duration={1000}>
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span>
                  <h6 data-aos="fade-up" data-aos-duration={800}> <strong>Platinum Sponsor:</strong>  ₹50,00,000 per event (exclusive branding, keynote session, premium booth).</h6>
                </div>
              </div>
              <br />
              <div className="col-12 heading2 card shadow-lg p-3 border-0">
                <div className="text-center">
                  <h5 className="mt-3" data-aos="fade-up" data-aos-duration={800}>How to Sponsor</h5>
                </div>
                <hr data-aos="fade-up" data-aos-duration={1000} style={{ borderColor: '#fea900ff', borderWidth: '1px' }} />
                <div className="d-flex flex-row" data-aos="fade-left" data-aos-duration={1000}>
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span>
                  <h6 data-aos="fade-up" data-aos-duration={800}>
                    Contact us via <strong>TrainingPlacementNetwork.com.</strong>
                    Choose your sponsorship package and event cities. Collaborate to maximize your brand’s impact.
                  </h6>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== FOR INDUSTRY PARTNERS ===== */}
      <section className="pricing-section-area sp2">
        <div className="heading2 text-center space-margin60">
          <h5 data-aos="fade-up" data-aos-duration={800}>For Industry Partners</h5>
          <p className="text-center" data-aos="fade-up" data-aos-duration={800}>
            Partner with TechFest India to explore innovative PoCs/MVPs and collaborate with top talent.
          </p>
        </div>

        <div className="container">
          <div className="row">
            {/* === TEXT CONTENT === */}
            <div className="col-lg-7 mx-auto mb-4">
              <div className="d-flex flex-column">
                {/* Why Partner */}
                <div className="heading2 card shadow-lg p-3 border-0 mb-4">
                  <div className="text-center">
                    <h5 data-aos="fade-up" data-aos-duration={800}>Why Partner?</h5>
                  </div>
                  <hr data-aos="fade-up" data-aos-duration={1000} style={{ borderColor: '#fea900ff', borderWidth: '1px' }} />
                  <div className="d-flex flex-row" data-aos="fade-right" data-aos-duration={1000}>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                    </span>
                    <p><strong>Innovation Access:</strong> Discover solutions in AI, blockchain, healthcare, and more.</p>
                  </div>
                  <div className="d-flex flex-row" data-aos="fade-right" data-aos-duration={1000}>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                    </span>
                    <p><strong>Talent Pipeline:</strong> Connect with innovators for internships and hiring.</p>
                  </div>
                  <div className="d-flex flex-row" data-aos="fade-right" data-aos-duration={1000}>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                    </span>
                    <p><strong>Branding:</strong> Position your company as a tech leader.</p>
                  </div>
                </div>

                {/* Partnership Packages */}
                <div className="heading2 card shadow-lg p-3 border-0 mb-4">
                  <div className="text-center">
                    <h5 data-aos="fade-up" data-aos-duration={800}>Partnership Packages</h5>
                  </div>
                  <hr data-aos="fade-up" data-aos-duration={1000} style={{ borderColor: '#fea900ff', borderWidth: '1px' }} />
                  <div className="d-flex flex-row" data-aos="fade-right" data-aos-duration={1000}>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                    </span>
                    <p><strong>Standard Partner:</strong> ₹5,00,000 per event (booth, access to innovations).</p>
                  </div>
                  <div className="d-flex flex-row" data-aos="fade-right" data-aos-duration={1000}>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                    </span>
                    <p><strong>Strategic Partner:</strong> ₹15,00,000 per event (priority access to pitches, branding).</p>
                  </div>
                </div>

                {/* How to Partner */}
                <div className="heading2 card shadow-lg p-3 border-0">
                  <div className="text-center">
                    <h5 className="mt-3" data-aos="fade-up" data-aos-duration={800}>How to Partner</h5>
                  </div>
                  <hr data-aos="fade-up" data-aos-duration={1000} style={{ borderColor: '#fea900ff', borderWidth: '1px' }} />
                  <div className="d-flex flex-row" data-aos="fade-right" data-aos-duration={1000}>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg>
                    </span>
                    <p>
                      Sign up on <strong>TrainingPlacementNetwork.com</strong>.
                      Select your event cities and package.
                      Align with our team to meet your industry goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* === IMAGE GRID (Moves Below on Mobile) === */}
            <div className="col-lg-5 col-md-12 m-auto">
              <div className="row g-3">
                {/* Image 1 */}
                <div className="col-8 col-lg-8 reveal image-anime shadow-lg p-1">
                  <img src="/assets/img/all-images/techfest/TF-img-2.jpg" data-aos="fade-right" data-aos-duration={1000} className="img-fluid w-100" alt="Image 1" />
                </div>
                {/* Image 2 */}
                <div className="col-4 col-lg-4 reveal image-anime shadow-lg p-1">
                  <img src="/assets/img/all-images/techfest/TF-img-3.jpg" data-aos="fade-down" data-aos-duration={1000} className="img-fluid w-100 h-100" alt="Image 2" />
                </div>
                {/* Image 3 */}
                <div className="col-4 col-lg-4 reveal image-anime shadow-lg p-1">
                  <img src="/assets/img/all-images/techfest/TF-img-4.jpg" data-aos="fade-up" data-aos-duration={1000} className="img-fluid w-100" alt="Image 3" />
                </div>
                {/* Image 4 */}
                <div className="col-8 col-lg-8 reveal image-anime shadow-lg p-1">
                  <img src="/assets/img/all-images/techfest/TF-img-5.jpg" data-aos="fade-left" data-aos-duration={1000} className="img-fluid w-100" alt="Image 4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== CTA ===== */}
      <section className="cta1-section-area sp1">
        <div className=" col-lg-7 container text-center card shadow-lg p-3 border-0 ">
          <h1 data-aos="fade-up" data-aos-duration={800} className="fw-bold">Join TechFest India 2026</h1>
          <hr data-aos="fade-up" data-aos-duration={1000} style={{ borderColor: '#fea900ff', borderWidth: '1px' }} />

          <div className="heading2 text-center space-margin6" data-aos-duration={800}>
            <div className="d-flex flex-row">
              <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span>
              <p data-aos="fade-up" data-aos-duration={800}>
                Register now to participate, sponsor, or partner. Early bird
                registration ends soon!
              </p>
            </div>
          </div>
          <br />
          <div >
            <Link href="/contact" className="vl-btn1" data-aos="fade-up" data-aos-duration={800}>
              Secure Your Spot
            </Link>
          </div>

        </div>

        <br />
      </section>
      <br />
    </Layout>
  );
}
