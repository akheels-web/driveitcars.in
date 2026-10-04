export default function aboutPage() {
  return (
    <>
      <section className="gauto-breadcromb-area section_70">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="breadcromb-box">
                     <h3>About Us</h3>
                     <ul>
                        <li><i className="fa fa-home"></i></li>
                        <li><a href="/">Home</a></li>
                        <li><i className="fa fa-angle-right"></i></li>
                        <li>About Us</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* Breadcromb Area End */}
       
       
      {/* About Page Area Start */}
      <section className="about-page-area section_70">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="about-page-left">
                     <h2 style={{"color":"#ffb907"}}>About<br /><b>Drive It</b></h2>
                      
                     <p>   At Drive It, we believe in giving you the freedom to explore your world on your own terms. Specializing in self-drive car rentals, we offer a wide range of vehicles to suit every journey. Whether you're cruising through the city in a Hatchback, enjoying the comfort of a Sedan, or embarking on an adventure with our spacious SUV 5 Seaters or SUV 7 Seaters, we have the perfect car for you. For those seeking a touch of elegance, our Luxury Cars ensure a premium driving experience. At Drive It, we put you in the driver's seat—literally.

</p>
                      
                     <div className="about-page-call">
                        <div className="page-call-icon">
                            
                        </div>
                        
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="about-page-right">
                     <img loading="lazy" src="assets/img/about-page.jpg" alt="about page" />
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* Floating "Contact Us" button */}
    <div className="floating-button-container">
        <a href="#" id="bookNowBtn" className="book-now-button">
            Contact Us
        </a>
    </div>

    {/* Booking Modal */}
    <div id="contactModal" className="modal-overlay">
        <div className="modal-content">
            <button id="closeModalBtn" className="close-button">&times;</button>
            <h2 className="text-2xl font-bold mb-4">Book Your Ride</h2>
            <p className="text-gray-600 mb-6">Fill out the form below to book a luxury wedding car.</p>
            
            <form id="bookingForm" action="your-backend-script.php" method="POST">
            <div className="input-grid">
                <div className="input-group">
                    <input type="text" id="name" name="name" placeholder="Name" required />
                </div>
                <div className="input-group">
                    <input type="tel" id="phone" name="phone_no" placeholder="Phone No" required />
                </div>
                <div className="input-group">
                    <input type="date" id="pickup_date" name="pickup_date" placeholder="Pickup date" required />
                </div>
                <div className="input-group">
                    <input type="date" id="drop_date" name="drop_date" placeholder="Drop Date" required />
                </div>
                <div className="input-group">
                    <input type="time" id="pickup_time" name="pickup_time" placeholder="Pickup time" required />
                </div>
                <div className="input-group">
                    <input type="time" id="drop_time" name="drop_time" placeholder="Drop Time" required />
                </div>
                <div className="input-group full-width">
                    <select id="seats" name="seats" required>
                        <option value="">Choose Seats</option>
                        <option value="5">5 Seats</option>
                        <option value="7">7 Seats</option>
                    </select>
                </div>
                <div className="captcha-box full-width">
                    <input type="checkbox" id="captcha" name="_gotcha" required />
                    <label htmlFor="captcha">I'm not a robot</label>
                    <img loading="lazy" src="https://placehold.co/60x30/404040/ffffff?text=CAPTCHA" alt="Captcha Image" />
                </div>
            </div>
            <button type="submit" className="submit-btn">BOOK MY CAR</button>
        </form>

        </div>
    </div>
      {/* About Page Area End */}
       
       
      
       
      {/* Footer Area Start */}
    </>
  );
}