import React from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { url } from "inspector";




export default function HomePage() {
    return (
        <Layout headerStyle={1} footerStyle={1}>
            {/* ===== HERO AREA ===== */}
            <div
                className=" d-flex align-items-center justify-content-center text-light"
                style={{
                    backgroundImage: "url(/assets/img/bg/header-bg12.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "100vh",
                    width: "100%",
                }}
            >
                <div className="container mb-lg-0">
                    <div className="row align-items-center py-5" >
                        {/* ===== TEXT SECTION ===== */}
                        <div className="col-lg-7 col-md-12 text-start mb-5 mb-lg-0">
                            <h5 data-aos="fade-right" data-aos-duration="700" className="fw-light">
                                Welcome to
                            </h5>
                            <h1
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                className="display-5 fw-bold text-warning"
                            >

                                TrainingPlacementNetwork.com
                            </h1>

                            <hr
                                data-aos="fade-right"
                                data-aos-duration="1300"
                                className="my-3"
                                style={{ borderColor: "#fea900ff", borderWidth: "2px", width: "auto" }}
                            />

                            <p data-aos="fade-right" data-aos-duration="1600" className="lead">
                                Connecting Talent, Opportunity, and Success in India’s IT Hub.
                                <b> <strong>TrainingPlacementNetwork.com</strong> is your premier platform</b>
                                for bridging the gap between ambitious students, top-tier colleges,
                                and leading IT employers. Our offline hiring events, hosted across 20 major IT cities in India,
                                bring together students, colleges, employers, and sponsors to create
                                unparalleled opportunities for career growth, networking, and
                                professional development.
                            </p>
                        </div>

                        {/* ===== IMAGE SECTION ===== */}
                        <div
                            className="col-lg-4 col-md-10 col-12 d-flex justify-content-end align-items-end mb-0 mt-5"
                            data-aos="fade-left"
                            data-aos-duration="1600"
                            style={{ paddingBottom: "0px" }}
                        >
                            <img
                                src="/assets/img/all-images/hero/hero-img8.png"
                                alt="Welcome"
                                className="img-fluid hero-img"
                                style={{
                                    maxHeight: "580px",
                                    // objectFit: "contain",
                                    marginBottom: "0px",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Why Choose Us */}
            <section className="choose-section-area sp2" style={{ backgroundColor: '#e6ebf1ff' }}>
                <div className="container">
                    <div className="heading2 text-center  ">
                        <h5 data-aos="fade-up" data-aos-duration={1200} >Why Choose Us?</h5>
                    </div>
                    <br />
                    <div className="row">
                        {[
                            {
                                title: "For Students:",
                                desc: "Gain direct access to top IT employers, personalized career guidance, and skill-building workshops to kickstart your career.",
                            },
                            {
                                title: "For Colleges:",
                                desc: " Showcase your talent pool, enhance placement records, and build partnerships with industry leaders.",
                            },
                            {
                                title: "For Employers:",
                                desc: " Connect with pre-screened, job-ready candidates from top colleges, streamlining your hiring process.",
                            },
                            {
                                title: "For Sponsors:",
                                desc: "Gain visibility among thousands of students, colleges, and employers while supporting India’s next generation of IT professionals.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="mx-0 col-lg-3 col-md-6 d-flex">
                                <div className="choose-widget-boxarea text-center  d-flex flex-column justify-content-between w-100" data-aos="fade-up" data-aos-duration={1200}>
                                    <div className="content-area" >
                                        <div className="icons" data-aos="fade-up" data-aos-duration={900}>
                                            <img src="/assets/img/icons/choose-icons1.svg" alt="" data-aos="fade-up" data-aos-duration={1200} />
                                        </div><br />
                                        <h6 className=" text-center fw-bold" data-aos="fade-up" data-aos-duration={1200} > {item.title}</h6>
                                        <hr data-aos="fade-up" data-aos-duration={1200} style={{ borderColor: '#fea900ff', borderWidth: '1px' }} />
                                        <p className="text-start d-flex" data-aos="fade-up" data-aos-duration={1200}>  <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fbc606ff"><path d="M400-280v-400l200 200-200 200Z" /></svg></span> {item.desc}</p>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="heading2 text-center " >
                    <p className=" text-warning" data-aos="fade-up" data-aos-duration={1200}>Join us at our next event in cities like Bangalore, Hyderabad, Chennai, Delhi, Mumbai, and more!</p>
                </div>
            </section>

            {/* Call to action */}
            <section className="call-to-action-section py-5" style={{ backgroundColor: '#e6ebf1ff' }}>
                <div className="heading2 text-center mb-4">
                    <h5>Call to Action</h5>
                </div>

                <div className="container text-center">

                    {/* Students */}
                    <div className="row justify-content-center align-items-center mb-4">
                        <div className="col-lg-3 col-md-5 col-10 mb-3 mb-md-0 mx-1 reveal image-anime shadow-lg p-1">
                            <img
                                src="/assets/img/all-images/HomePage/HP-img-14.jpeg"
                                alt="Students"
                                className="img-fluid rounded shadow" data-aos="fade-right" data-aos-duration={1200}
                            />
                        </div>
                        <br />
                        <div className="col-auto d-none d-md-block">
                            <div
                                className="border-start border-2 border-warning"
                                style={{ height: "14em", borderStyle: "dotted" }}
                                data-aos="fade-in" data-aos-duration={2000}
                            ></div>
                        </div>
                        <br />
                        <div className="col-lg-4 col-md-5 col-10 heading2">
                            <h5 data-aos="fade-left" data-aos-duration={1200}>Students</h5>
                            <p className="mb-0 text-start" data-aos="fade-left" data-aos-duration={1200}>
                                Register now for career guidance and job opportunities.
                            </p>
                        </div>
                    </div>

                    {/* College */}
                    <div className="row justify-content-center align-items-center mb-4 flex-md-row flex-column-reverse">

                        <div className="col-lg-4 col-md-5 col-10 heading2">
                            <h5 data-aos="fade-right" data-aos-duration={1200}>College</h5>
                            <p className="mb-0" data-aos="fade-right" data-aos-duration={1200}>
                                Partner with us to boost your placements.
                            </p>
                        </div>

                        <div className="col-auto d-none d-md-block">
                            <div
                                className="border-start border-2 border-warning"
                                style={{ height: "14em", borderStyle: "dotted" }}
                                data-aos="fade-in" data-aos-duration={2000}
                            ></div>
                        </div>

                        <div className="col-lg-3 col-md-5 col-10 mb-3 mb-md-0 mx-1 reveal image-anime shadow-lg p-1">
                            <img
                                src="/assets/img/all-images/HomePage/HP-img-15.jpeg"
                                alt="College"
                                className="img-fluid rounded shadow"
                                data-aos="fade-left" data-aos-duration={1200}
                            />
                        </div>
                    </div>

                    {/* Employers */}
                    <div className="row justify-content-center align-items-center mb-4">
                        <div className="col-lg-3 col-md-5 col-10 mb-3 mb-md-0 mx-1 reveal image-anime shadow-lg p-1">
                            <img
                                src="/assets/img/all-images/HomePage/HP-img-16.jpeg"
                                alt="Employers"
                                className="img-fluid rounded shadow w-100"
                                data-aos="fade-right" data-aos-duration={1200}
                            />
                        </div>

                        <div className="col-auto d-none d-md-block">
                            <div
                                className="border-start border-2 border-warning"
                                style={{ height: "14em", borderStyle: "dotted" }}
                                data-aos="fade-in" data-aos-duration={2000}
                            ></div>
                        </div>

                        <div className="col-lg-4 col-md-5 col-10 heading2">
                            <h5 data-aos="fade-left" data-aos-duration={1200}>Employers</h5>
                            <p className="mb-0" data-aos="fade-left" data-aos-duration={1200}>Hire top talent at our events.</p>
                        </div>
                    </div>

                    {/* Sponsors */}
                    <div className="row justify-content-center align-items-center mb-4 flex-md-row flex-column-reverse">
                        <div className="col-lg-4 col-md-5 col-10 heading2">
                            <h5 data-aos="fade-right" data-aos-duration={1200}>Sponsors</h5>
                            <p className="mb-0 text-start" data-aos="fade-right" data-aos-duration={1200}>
                                Elevate your brand with our sponsorship packages.
                            </p>
                        </div>

                        <div className="col-auto d-none d-md-block">
                            <div
                                className="border-start border-2 border-warning"
                                style={{ height: "14em", borderStyle: "dotted" }}
                                data-aos="fade-in" data-aos-duration={2000}
                            ></div>
                        </div>

                        <div className="col-lg-3 col-md-5 col-10 mb-3 mb-md-0 mx-1 reveal image-anime shadow-lg p-1">
                            <img
                                src="/assets/img/all-images/HomePage/HP-img-17.jpeg"
                                alt="Sponsors"
                                className="img-fluid rounded shadow"
                                data-aos="fade-left" data-aos-duration={1200}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* About us section  */}
            <section className="call-to-action-section py-5" style={{ backgroundColor: '#e6ebf1ff' }}>
                <div className="heading2 text-center mb-4">
                    <h5>About Us </h5>
                </div>

                <div className="container text-center">

                    {/* Our Mission */}
                    <div className="row justify-content-center align-items-center mb-4">
                        <div className="col-lg-3 col-md-5 col-10 mb-3 mb-md-0 mx-1 reveal image-anime shadow-lg p-1">
                            <img
                                src="/assets/img/all-images/HomePage/HP-img-14.jpeg"
                                alt="Students"
                                className="img-fluid rounded shadow" data-aos="fade-right" data-aos-duration={1200}
                            />
                        </div>
                        <br />
                        <div className="col-auto d-none d-md-block">
                            <div
                                className="border-start border-2 border-warning"
                                style={{ height: "14em", borderStyle: "dotted" }}
                                data-aos="fade-in" data-aos-duration={2000}
                            ></div>
                        </div>
                        <br />
                        <div className="col-lg-6 col-md-5 col-10 heading2">
                            <h5 data-aos="fade-left" data-aos-duration={1200} >Our Mission</h5>
                            <p className="mb-0 text-start" data-aos="fade-left" data-aos-duration={1200}>
                                We organize large-scale offline hiring events across 20 major IT cities in India, including Bangalore, Hyderabad, Chennai, Delhi, Mumbai, Pune, Kolkata, Ahmedabad, and more. These events feature:
                                Job Fairs: Direct interactions between students and employers.
                                Career Workshops: Guidance on resume building, interview skills, and industry trends.
                                Networking Sessions: Opportunities to connect with industry leaders, college representatives, and peers.
                                Sponsorship Opportunities: Branding and visibility for companies supporting our events.

                            </p>
                        </div>
                    </div>

                    {/*What We Do */}
                    <div className="row justify-content-center align-items-center mb-4 flex-md-row flex-column-reverse">

                        <div className="col-lg-6 col-md-5 col-10 heading2">
                            <h5 data-aos="fade-right" data-aos-duration={1200}>What We Do</h5>
                            <p className="mb-0 text-start" data-aos="fade-right" data-aos-duration={1200} >
                                We organize large-scale offline hiring events across 20 major IT cities in India, including Bangalore, Hyderabad, Chennai, Delhi, Mumbai, Pune, Kolkata, Ahmedabad, and more. These events feature:
                                Job Fairs: Direct interactions between students and employers.
                                Career Workshops: Guidance on resume building, interview skills, and industry trends.
                                Networking Sessions: Opportunities to connect with industry leaders, college representatives, and peers.
                                Sponsorship Opportunities: Branding and visibility for companies supporting our events.
                            </p>
                        </div>

                        <div className="col-auto d-none d-md-block">
                            <div
                                className="border-start border-2 border-warning"
                                style={{ height: "14em", borderStyle: "dotted" }}
                                data-aos="fade-in" data-aos-duration={2000}
                            ></div>
                        </div>

                        <div className="col-lg-3 col-md-5 col-10 mb-3 mb-md-0 mx-1 reveal image-anime shadow-lg p-1">
                            <img
                                src="/assets/img/all-images/HomePage/HP-img-15.jpeg"
                                alt="College"
                                className="img-fluid rounded shadow"
                                data-aos="fade-left" data-aos-duration={1200}
                            />
                        </div>
                    </div>

                    {/*Our Vision */}
                    <div className="row justify-content-center align-items-center mb-4">
                        <div className="col-lg-3 col-md-5 col-10 mb-3 mb-md-0 mx-1 reveal image-anime shadow-lg p-1">
                            <img
                                src="/assets/img/all-images/HomePage/HP-img-16.jpeg"
                                alt="Employers"
                                className="img-fluid rounded shadow w-100"
                                data-aos="fade-right" data-aos-duration={1200}
                            />
                        </div>

                        <div className="col-auto d-none d-md-block">
                            <div
                                className="border-start border-2 border-warning"
                                style={{ height: "14em", borderStyle: "dotted" }}
                                data-aos="fade-in" data-aos-duration={2000}
                            ></div>
                        </div>

                        <div className="col-lg-6 col-md-5 col-10 heading2">
                            <h5 data-aos="fade-left" data-aos-duration={1200}>Our Vision</h5>
                            <p className="mb-0 text-start" data-aos="fade-left" data-aos-duration={1200}>
                                To become India’s leading platform for IT hiring events, creating a seamless bridge between education and employment while fostering innovation and growth in the IT sector.
                                For Students
                                Launch Your IT Career with TrainingPlacementNetwork.com
                                Are you a fresher or final-year student dreaming of a career in IT? Our offline hiring events are your gateway to success!</p>
                        </div>
                    </div>


                </div>
            </section>

            {/* ===== WHAT YOU GET ===== */}
            <section className="py-5 " id="what-you-get" style={{ backgroundColor: '#e6ebf1ff' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-warning">What You Get</h2>
                        <p className="lead text-muted">Empowering students with opportunities, skills, and connections</p>
                        <hr className="mx-auto" style={{ width: "80px", borderColor: "#fea900" }} />
                    </div>

                    <div className="row g-4">
                        {[
                            {
                                title: "Direct Access to Employers",
                                desc: "Meet recruiters from top IT companies like TCS, Infosys, Wipro, Accenture, and more."
                            },
                            {
                                title: "Career Guidance",
                                desc: "Attend workshops on resume writing, interview techniques, and emerging IT skills (AI, cloud computing, cybersecurity)."
                            },
                            {
                                title: "Networking Opportunities",
                                desc: "Connect with peers, mentors, and industry professionals."
                            },
                            {
                                title: "Job Opportunities",
                                desc: "Get hired on the spot or secure internships and pre-placement offers (PPOs)."
                            }
                        ].map((item, idx) => (
                            <div className="col-lg-3 col-md-6" key={idx}>
                                <div className="card h-100 shadow-sm border-0 p-4 text-center">
                                    <div className="card-body">
                                        <h5 className="fw-bold mb-3 text-dark">{item.title}</h5>
                                        <p className="text-muted">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ===== STUDENT PARTICIPATION FEE ===== */}
            <section className="py-5 " id="student-fee" style={{ backgroundColor: '#e6ebf1ff' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-primary">Student Participation Fee</h2>
                        <p className="lead text-muted">Affordable registration options with added benefits</p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {[
                            { title: "Early Bird", price: "₹500", subtitle: "(valid until 2 weeks before the event)" },
                            { title: "Regular", price: "₹750", subtitle: "Standard Registration" },
                            { title: "On-Spot", price: "₹1,000", subtitle: "At the Event Venue" }
                        ].map((item, idx) => (
                            <div className="col-lg-3 col-md-4 col-10" key={idx}>
                                <div className="card text-center shadow-sm border-0 h-100">
                                    <div className="card-body">
                                        <h5 className="fw-bold text-warning">{item.title} Registration</h5>
                                        <h3 className="fw-bold my-2 text-dark">{item.price}</h3>
                                        <p className="text-muted">{item.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-4">
                        <p className="text-muted fst-italic">
                            Fees include access to all sessions, workshops & networking events.<br />
                            <strong>Limited scholarships available for deserving candidates.</strong>
                        </p>
                    </div>
                </div>
            </section>


            {/* ===== HOW TO REGISTER ===== */}
            <section className="py-5 " id="how-to-register" style={{ backgroundColor: '#e6ebf1ff' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-success">How to Register</h2>
                        <p className="lead text-muted">Follow simple steps to join our upcoming events</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <ol className="list-group list-group-numbered shadow-sm">
                                {[
                                    "Create an account on TrainingPlacementNetwork.com.",
                                    "Select your preferred city and event date.",
                                    "Complete the payment and upload your resume.",
                                    "Receive your event pass and preparation guide."
                                ].map((step, idx) => (
                                    <li key={idx} className="list-group-item py-3 fw-semibold">
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FOR COLLEGES ===== */}
            <section className="py-5 " id="for-colleges" style={{ backgroundColor: '#e6ebf1ff' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-info">Partner with TrainingPlacementNetwork.com</h2>
                        <p className="lead text-muted">Showcase your students to leading IT employers</p>
                    </div>

                    <div className="row g-4">
                        {[
                            { title: "Increased Visibility", desc: "Promote your college to top IT companies and thousands of attendees." },
                            { title: "Higher Placements", desc: "Connect your students with employers actively seeking fresh talent." },
                            { title: "Exclusive Workshops", desc: "Provide students access to career guidance and skill-building sessions." },
                            { title: "Networking Opportunities", desc: "Build relationships with industry leaders and other institutions." }
                        ].map((item, idx) => (
                            <div className="col-lg-3 col-md-6" key={idx}>
                                <div className="card h-100 border-0 shadow-sm p-4 text-center">
                                    <div className="card-body">
                                        <h5 className="fw-bold mb-3">{item.title}</h5>
                                        <p className="text-muted">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-8">
                            <table className="table table-bordered text-center shadow-sm">
                                <thead className="table-warning">
                                    <tr>
                                        <th>Package</th>
                                        <th>Fee</th>
                                        <th>Includes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Standard</td>
                                        <td>₹50,000</td>
                                        <td>Booth space, branding, and access for up to 50 students</td>
                                    </tr>
                                    <tr>
                                        <td>Premium</td>
                                        <td>₹1,00,000</td>
                                        <td>Larger booth, priority branding, and access for up to 100 students</td>
                                    </tr>
                                    <tr>
                                        <td>Customized</td>
                                        <td>Contact Us</td>
                                        <td>Multi-city or annual partnerships</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FOR EMPLOYERS ===== */}
            <section className="py-5 " id="for-employers" style={{ backgroundColor: '#e6ebf1ff' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-danger">Hire Top IT Talent with Ease</h2>
                        <p className="lead text-muted">Access pre-screened, job-ready candidates from top colleges</p>
                    </div>

                    <div className="row g-4">
                        {[
                            { title: "Access to Talent", desc: "Meet thousands of motivated students from IT-related programs." },
                            { title: "Streamlined Hiring", desc: "Conduct interviews, assessments, and on-the-spot hiring." },
                            { title: "Branding Opportunities", desc: "Showcase your company to students, colleges, and sponsors." },
                            { title: "Customized Solutions", desc: "Tailored recruitment packages to meet your needs." }
                        ].map((item, idx) => (
                            <div className="col-lg-3 col-md-6" key={idx}>
                                <div className="card h-100 text-center shadow-sm border-0 p-4">
                                    <div className="card-body">
                                        <h5 className="fw-bold">{item.title}</h5>
                                        <p className="text-muted">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-8">
                            <table className="table table-bordered text-center shadow-sm">
                                <thead className="table-danger">
                                    <tr>
                                        <th>Package</th>
                                        <th>Fee</th>
                                        <th>Includes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Standard Booth</td>
                                        <td>₹2,00,000</td>
                                        <td>Booth space, branding, and access to candidate resumes</td>
                                    </tr>
                                    <tr>
                                        <td>Premium Booth</td>
                                        <td>₹3,50,000</td>
                                        <td>Larger booth, priority branding, and pre-event resume screening</td>
                                    </tr>
                                    <tr>
                                        <td>Title Sponsorship</td>
                                        <td>₹10,00,000</td>
                                        <td>Exclusive branding, keynote session, and priority hiring slots</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FOR SPONSORS ===== */}
            <section className="py-5 " id="for-sponsors" style={{ backgroundColor: '#e6ebf1ff' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-warning">Amplify Your Brand with Us</h2>
                        <p className="lead text-muted">Support India’s IT talent ecosystem while building brand visibility</p>
                    </div>

                    <div className="row g-4">
                        {[
                            { title: "Brand Visibility", desc: "Prominent logo placement on event materials, website, and social media." },
                            { title: "Engagement Opportunities", desc: "Host workshops, deliver keynote sessions, or set up interactive booths." },
                            { title: "Targeted Audience", desc: "Reach tech-savvy students, academic institutions, and IT industry leaders." },
                            { title: "CSR Impact", desc: "Support skill development and employment for India’s youth." }
                        ].map((item, idx) => (
                            <div className="col-lg-3 col-md-6" key={idx}>
                                <div className="card h-100 border-0 shadow-sm text-center p-4">
                                    <div className="card-body">
                                        <h5 className="fw-bold">{item.title}</h5>
                                        <p className="text-muted">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-8">
                            <table className="table table-bordered text-center shadow-sm">
                                <thead className="table-warning">
                                    <tr>
                                        <th>Package</th>
                                        <th>Fee</th>
                                        <th>Includes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Silver Sponsor</td>
                                        <td>₹5,00,000</td>
                                        <td>Logo on website, brochures, and banners</td>
                                    </tr>
                                    <tr>
                                        <td>Gold Sponsor</td>
                                        <td>₹10,00,000</td>
                                        <td>Larger logo placement, booth space, and social media shoutouts</td>
                                    </tr>
                                    <tr>
                                        <td>Platinum Sponsor</td>
                                        <td>₹20,00,000</td>
                                        <td>Exclusive branding, keynote session, and premium booth</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>


            <section style={{ backgroundColor: '#e6ebf1ff' }}>
                {/* Image grid section */}
                <div className="col-lg-9 mx-auto container "  >
                    <div className="row justify-content-center align-items-end g-2 text-center heading2">
<div>
    <h5>Event Schedule</h5>
    <p>Upcoming Events in 2025-2026</p>
    <p>Our offline hiring events will take place across 20 IT cities, including:</p>
</div>
                        {/* ===== Top Row ===== */}
                        <div className="col-lg-2 col-md-2 col-sm-4 col-2 d-flex justify-content-center mx-1 reveal image-anime shadow-lg p-1" data-aos="fade-right" data-aos-duration={1200}>
                            <img src="/assets/img/all-images/HomePage/HP-img-1.jpeg" alt="image 1" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-3 d-flex justify-content-center mx-1 reveal image-anime shadow-lg p-1" data-aos="fade-down" data-aos-duration={1200}>
                            <img src="/assets/img/all-images/HomePage/HP-img-2.jpeg" alt="image 2" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-3 d-flex justify-content-center mx-1 reveal image-anime shadow-lg p-1" data-aos="fade-down" data-aos-duration={1200}>
                            <img src="/assets/img/all-images/HomePage/HP-img-3.jpeg" alt="image 3" className="img-fluid rounded shadow" />
                        </div>

                    </div>

                    <br />
                    {/* ===== Middle Row ===== */}
                    <div className="row justify-content-center  align-items-center g-2 text-center">
                        {/* <div className="w-100"></div> */}
                        <div className="col-lg-2 col-md-2 col-sm-3 col-2 d-flex justify-content-center align-items-center mx-1 reveal image-anime shadow-lg p-1" data-aos="fade-right" data-aos-duration={1200}>
                            <img src="/assets/img/all-images/HomePage/HP-img-5.jpeg" alt="image 5" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-4 col-2 d-flex justify-content-center align-items-center mx-1 reveal image-anime shadow-lg p-1" data-aos="fade-right" data-aos-duration={1200}>
                            <img src="/assets/img/all-images/HomePage/HP-img-6.jpeg" alt="image 6" className="img-fluid rounded shadows h-auto" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-8 col-2 d-flex justify-content-center align-items-center mx-1 reveal image-anime shadow-lg p-1 " data-aos="fade-in" data-aos-duration={1200}>
                            <img src="/assets/img/all-images/HomePage/HP-img-7.jpeg" alt="image 7" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-4 col-2 d-flex justify-content-center align-items-center mx-1 reveal image-anime shadow-lg p-1" data-aos="fade-left" data-aos-duration={1200}>
                            <img src="/assets/img/all-images/HomePage/HP-img-8.jpeg" alt="image 8" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3 col-2 d-flex justify-content-center align-items-center  mx-1 reveal image-anime shadow-lg p-1" data-aos="fade-left" data-aos-duration={1200}>
                            <img src="/assets/img/all-images/HomePage/HP-img-9.jpeg" alt="image 9" className="img-fluid rounded shadow" />
                        </div>
                    </div>

                    {/* ===== Bottom Row ===== */}
                    <div className="row justify-content-center align-items-start g-2 text-center">
                        <div className="w-100"></div>
                        <div className="col-lg-2 col-md-2 col-sm-3 col-2 d-flex justify-content-center mx-1 reveal image-anime shadow-lg p-1" data-aos="fade-right" data-aos-duration={1200}>
                            <img src="/assets/img/all-images/HomePage/HP-img-10.jpeg" alt="image 10" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-3 d-flex justify-content-center mx-1 reveal image-anime shadow-lg p-1" data-aos="fade-up" data-aos-duration={1200}>
                            <img src="/assets/img/all-images/HomePage/HP-img-11.jpeg" alt="image 11" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-3 d-flex justify-content-center mx-1 reveal image-anime shadow-lg p-1" data-aos="fade-up" data-aos-duration={1200}>
                            <img src="/assets/img/all-images/HomePage/HP-img-12.jpeg" alt="image 12" className="img-fluid rounded shadow" />
                        </div>

                    </div>
                </div>
            </section>

        </Layout >

    );
}
