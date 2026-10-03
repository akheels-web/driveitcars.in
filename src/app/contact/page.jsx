export default function contactPage() {
  return (
    <>
      <section className="gauto-breadcromb-area section_70">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="breadcromb-box">
                     <h3>Contact Us</h3>
                     <ul>
                        <li><i className="fa fa-Home"></i></li>
                        <li><a href="/index">Home</a></li>
                        <li><i className="fa fa-angle-right"></i></li>
                        <li>Contact Us</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* Breadcromb Area End */}
       
       
      {/* Contact Area Start */}
      <section className="gauto-contact-area section_70">
         <div className="container">
            <div className="row">
               <div className="col-lg-7">
                  <div className="contact-left">
                     <h3>Get in touch</h3>
                     <form method="post" action="#" encType="multipart/form-data">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="single-contact-field">
                                 <input type="text" placeholder="Your Name" />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="single-contact-field">
                                 <input type="email" placeholder="Email Address" />
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-md-6">
                              <div className="single-contact-field">
                                 <input type="text" placeholder="Subject" />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="single-contact-field">
                                 <input type="tel" placeholder="Phone Number" />
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-md-12">
                              <div className="single-contact-field">
                                 <textarea placeholder="Write here your message"></textarea>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-md-12">
                              <div className="single-contact-field">
                                 <button type="submit" className="gauto-theme-btn"><i className="fa fa-paper-plane"></i> Send Message</button>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="contact-right">
                     <h3>Contact information</h3>
                     <div className="contact-details">
                        <p><i className="fa fa-map-marker"></i> 10-2-289/83, Mehar mansion, Rd Number 2, Shantinagar Colony, Masab Tank, Hyderabad, Telangana 500028. </p>
                        <div className="single-contact-btn">
                           <h4>Email Us</h4>
                           <a href="mailto:driveitcars@gmail.com"><p>driveitcars@gmail.com</p></a>
                        </div>
                        <div className="single-contact-btn">
                           <h4>Call Us</h4>
                          <a href="tel:
                                       +919429694414"><p>Call 
                                           9429694414</p></a>
                                            
                        </div>
                         <a href="tel:
                                       +916300041186"><p>Call 
                                           6300041186</p></a>
                                            
                        </div>
                        <div className="social-links-contact">
                           <h4>Follow Us:</h4>
                           <ul>
                              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                              
                              
                              
                              
                              <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                           </ul>
                        </div>
                        {/* <div className="social-links-contact">
                           <h4>Pay Us Vai QR Code</h4>
                           <img loading="lazy" src="assets/img/payment.jpg" />
                           <img loading="lazy" src="assets/img/payment-phonepay.jpg" />
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>
      </section>
      {/* Contact Area End */}
       
       
      {/* Footer Area Start */}
    </>
  );
}