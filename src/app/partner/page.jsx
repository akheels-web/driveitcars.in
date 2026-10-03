export default function partnerPage() {
  return (
    <>
      <section className="gauto-breadcromb-area section_70">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="breadcromb-box">
                     <h3>Partner With Us</h3>
                     <ul>
                        <li><i className="fa fa-home"></i></li>
                        <li><a href="/index-2">Home</a></li>
                        <li><i className="fa fa-angle-right"></i></li>
                        <li>Partner With Us</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* Breadcromb Area End */}
       
       
      {/* Login Area Start */}
      <section className="gauto-login-area section_70">
         <div className="container">
            <div className="row">
               <div className="col-md-7">
                  <div className="">
                     <div className="login-page-heading">
                       
                        <h3>In partner with us</h3>
                     </div>
                  <p>DRIVEIT IS A BOOKING PLATFORM ENABLES AND FACILITATES THE USERS TO LIST AND LEASE VEHICLES DIRECTLY WITH ONE ANOTHER AS PER THE THE <span className="cstmp1">TERMS AND CONDITIONS</span> OF THE DRIVEIT POLICIES ON THIS PLATFORM WE DOENS NOT SELL, HIRE, MANAGE AND CONTROL THE VEHICLES. </p>
                  <p>WE PROVIDE PLATFORM FOR THE LESSOR OR LESSEE TO GET BENEFIT FROM THIS PLATFORM FOR THEIR USE. WE REDUCE THE BURDEN OF THE VEHICLES EMI OF THE VEHICLES OWNERS, WE PROVIDE THEM BOOKING HOURLY/DAILY &amp; MONTHLY BY THEIR CHOICE. </p>
                  </div>
               </div>
            
			<div className="col-md-5">
                  <div className="" style={{"padding":"27px","background":"#ffc10714","border":"2px solid #fca130"}}>
                     <div className="login-page-heading">
                       
                        <h3>Partner With Us</h3>
                     </div>
                     <form action="#" method="post">
  <div className="form-group">
    <input type="text" name="fname" className="form-control" placeholder="Name" required />
  </div>
  <div className="form-group">
    
    <input type="number" name="phone" className="form-control" placeholder="Phone" required />
  </div>
  
  <div className="form-group">
    
    <input type="text" name="carname" className="form-control" placeholder="Car name" required />
  </div>
   <div className="form-group">
    
    <input type="text" name="carmodel" className="form-control" placeholder="Car model" required />
  </div>
   <div className="form-group">
    
    <input type="text" name="km" className="form-control" placeholder="KM" required />
  </div>
  <div className="form-group">
    
    <textarea placeholder="Write here your message" name="message" className="form-control" spellCheck="false"></textarea>
  </div>
  
  
 
  <button type="submit" value="submit" className="btn btn-warning btn-block mybtn">Submit</button>
 
</form>
                        </div>
                  </div>
               </div>
            </div>
      </section>
      {/* Login Area End */}
       
       
      
	  
      {/* Footer Area Start */}
    </>
  );
}