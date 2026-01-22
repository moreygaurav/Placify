import Link from 'next/link'


export default function Footer1() {
	return (
		<>
			<div className="footer1-sertion-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 mx-0">
							<div className="footer-logo-area">
								<img src="/assets/img/logo/logo2.png" alt="" />
								<div className="space16" />
								<p> <strong>Training Placement Network</strong> A premier platform for bridging the gap between ambitious students, top-tier colleges, and leading IT employers. </p>
								<div className="space24" />
								<ul>
									<li>
										<Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
									</li>
									<li>
										<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
									</li>
									<li>
										<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
									</li>
									<li>
										<Link href="/#" className="m-0"><i className="fa-brands fa-pinterest-p" /></Link>
									</li>
								</ul>
							</div>
						</div>
						{/* Quick links  */}


						<div className="col-lg-3 col-md-6 m-0">
							<div className="link-content">
								<h3>Quick Links</h3>
								<ul>
									<li><Link href="/#">Home</Link></li>
									<li><Link href="/about">About Us</Link></li>
									<li className='d-flex'><Link href="/event">Career Workshops & Guidance</Link></li>
									<li><Link href="/networking-sessions">Networking Sessions</Link></li>
									<li><Link href="/Techfest">Tech Fest</Link></li>
									<li><Link href="/jobfair">Job Fair</Link></li>
								</ul>
							</div>
						</div>


						{/* Legal & Policy Links*/}
						<div className="col-lg-3 col-md-7 m-l-0">
							<div className="link-content">
								<h3  className="d-flex align-items-center text-nowrap">Legal & Policy Links</h3>
								<ul>
									<li><Link href="/about">Privacy Policy</Link></li>
									<li><Link href="/blog">Terms & Conditions</Link></li>
									<li className='d-flex'><Link href="/event">Refund & Cancellation Policy </Link></li>
									<li><Link href="/pricing-plan">Disclaimer</Link></li>

								</ul>
							</div>
						</div>

						{/* Contact us  */}
						<div className="col-lg-3 col-md-6 m-r-0">
							<div className="link-content">
								<h3>Contact Us</h3>
								<ul>
									<li className='d-flex'>
										<Link href="/tel:+91-123-456-7890" ><img src="/assets/img/icons/phn1.svg" alt="" />+91-123-456-7890</Link>
									</li>
									<li className="p-0">
										<Link href="/#" className="d-flex align-items-center text-nowrap">
											<img src="/assets/img/icons/location1.svg" alt=""  />123 Tech Hub, Bangalore, India
										</Link>
									</li>

									<li>
										<Link href="/#"> <img src="/assets/img/icons/world1.svg" alt="" /> eventifyevent.com</Link>
									</li>
									<li>
										<Link href="/mailto:info@trainingplacementnetwork.com" className="d-flex"><img src="/assets/img/icons/mail1.svg" alt="" />   info@trainingplacementnetwork.com</Link>
									</li>

								</ul>
							</div>
						</div>


					</div>
					<div className="space60" />
					<div className="row">
						<div className="col-lg-12">
							<div className="copyright">
								<p>© Copyright {new Date().getFullYear()} -Eventify-WebMobi360</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
