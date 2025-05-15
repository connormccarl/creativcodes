'use client'
import React, { useState } from 'react';

export default function Home() {
  const [active, setActive] = useState('home');

  return (
    <main id="home">
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container px-5">
                <a className="navbar-brand" href="#home" onClick={() => setActive('home')}><img src="/logo.png" width="200px" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className={`nav-link visible ${active === 'home' ? 'active' : ''}`} href="#home" onClick={() => setActive('home')}>Home</a></li>
                        <li className="nav-item"><a className={`nav-link visible ${active === 'about' ? 'active' : ''}`} href="#features" onClick={() => setActive('about')}>About</a></li>
                        <li className="nav-item"><a className={`nav-link visible ${active === 'pricing' ? 'active' : ''}`} href="#pricing" onClick={() => setActive('pricing')}>Pricing</a></li>
                        <li className="nav-item"><a className={`nav-link visible ${active === 'testimonials' ? 'active' : ''}`} href="#testimonials" onClick={() => setActive('testimonials')}>Testimonials</a></li>
                        <li className="nav-item"><a className={`nav-link visible ${active === 'contact' ? 'active' : ''}`} href="#contact" onClick={() => setActive('contact')}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header className="py-5 bg-[url('/web-design.jpg')] bg-cover bg-center">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-9 bg-black bg-opacity-50">
                        <div className="text-center my-5 opac">
                            <h1 className="display-5 fw-bolder text-white mb-2">Modern Web Development</h1>
                            <p className="lead text-white mb-4">Quickly realize the power of an expert team building web applications for you and your business.</p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features" onClick={() => setActive('about')}>Get Started</a>
                                <a className="btn btn-outline-light btn-lg px-4" href="#contact" onClick={() => setActive('contact')}>Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section className="py-5 border-bottom" id="features">
            <div className="container px-5 my-5">
                <div className="row gx-5">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-house-door-fill"></i></div>
                        <h2 className="h4 fw-bolder">US Based</h2>
                        <p>Get expert, English speaking web development all based in the United States that can understand what you want immediately.</p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-headset-vr"></i></div>
                        <h2 className="h4 fw-bolder">Cutting Edge</h2>
                        <p>Experience the latest technologies and techniques to make your business flourish in the modern era with advanced tracking and reporting. </p>
                    </div>
                    <div className="col-lg-4">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-tag-fill"></i></div>
                        <h2 className="h4 fw-bolder">Fair Pricing</h2>
                        <p>Get the benefit of an entire team at not even the cost of one developer and unleash your true potential and make your dreams a reality.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="pricing" className="bg-light py-5 border-bottom">
            <div className="container px-5 my-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bolder">Pay as you grow</h2>
                    <p className="lead mb-0">With our no hassle pricing plans</p>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6 col-xl-4">
                        <div className="card mb-5 mb-xl-0">
                            <div className="card-body p-5">
                                <div className="small text-uppercase fw-bold text-muted">Quick Start</div>
                                <div className="mb-3">
                                    <span className="display-4 fw-bold">$1,500</span>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        <strong>1 website</strong>
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        15 Pages
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Contact Form
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        30 Days of Support
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Modern Design
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Google Analytics
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Dedicated support
                                    </li>
                                    
                                    <li className="">
                                        <i className="bi bi-check text-primary"></i>
                                        45 Day Turn Around
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="card mb-5 mb-xl-0">
                            <div className="card-body p-5">
                                <div className="small text-uppercase fw-bold">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    Basic Website
                                </div>
                                <div className="mb-3">
                                    <span className="display-4 fw-bold">$3,000</span>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        <strong>1 website</strong>
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        45 Pages
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Contact Form
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        30 Days of Support
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Modern Design
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Google Analytics
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Dedicated support
                                    </li>
                                    
                                    <li className="">
                                        <i className="bi bi-check text-primary"></i>
                                       60 Day Turn Around
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="card">
                            <div className="card-body p-5">
                                <div className="small text-uppercase fw-bold text-muted">Advanced Application</div>
                                <div className="mb-3">
                                    <span className="display-4 fw-bold">$5,000+</span>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        <strong>1 web application</strong>
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Unlimited Pages
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        User Interaction
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        30 Days of Support
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Modern Design
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Google Analytics
                                    </li>
                                    <li className="mb-2">
                                        <i className="bi bi-check text-primary"></i>
                                        Dedicated support
                                    </li>
                                    
                                    <li className="">
                                        <i className="bi bi-check text-primary"></i>
                                       90+ Day Turn Around
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="testimonials" className="py-5 border-bottom">
            <div className="container px-5 my-5 px-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bolder">Customer testimonials</h2>
                    <p className="lead mb-0">Our customers love working with us</p>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className="card mb-4">
                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0"><i className="bi bi-chat-right-quote-fill text-primary fs-1"></i></div>
                                    <div className="ms-4">
                                        <p className="mb-1">I felt heard and understood from the first call. Connor delivered everything I wanted and more. I highly recommend!</p>
                                        <div className="small text-muted">- Debra Kantor, California</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0"><i className="bi bi-chat-right-quote-fill text-primary fs-1"></i></div>
                                    <div className="ms-4">
                                        <p className="mb-1">Connor&apos;s entire team was professional and easy to work with. Problems were fixed immediately and they came in on time and on budget. Great experience!</p>
                                        <div className="small text-muted">- Jay Rice, Michigan</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact" className="bg-light py-5">
            <div className="container px-5 my-5 px-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bolder">Get in touch</h2>
                    <p className="lead mb-0">We&apos;d love to hear from you</p>
                </div>
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-9">
                      <ul className="list-unstyled fs-5">
                        <li className="text-center" >
                          <div className="feature-small bg-primary bg-gradient text-white rounded-3 mb-3 me-3"><i className="bi bi-telephone-fill"></i></div>
                          (949) 414-5023
                        </li>
                        <li className="text-center" >
                          <div className="feature-small bg-primary bg-gradient text-white rounded-3 mb-3 me-3"><i className="bi bi-envelope-fill"></i></div>
                          connormccarl@gmail.com
                        </li>
                        <li className="text-center" >
                          <div className="feature-small bg-primary bg-gradient text-white rounded-3 me-3"><i className="bi bi-geo-alt-fill"></i></div>
                          26191 La Real<br />Apt E<br />Mission Viejo, CA 92691
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
        </section>
        <footer className="py-5 bg-dark">
            <div className="container px-5"><p className="m-0 text-center text-white">Copyright &copy; CreativCodes {new Date().getFullYear()}</p></div>
        </footer>
    </main>
  );
}
