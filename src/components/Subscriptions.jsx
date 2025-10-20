import Alert from './index'
import AlertModal from "./AlertModel";
import  { useState } from "react";

function Subscriptions(){
    const [showAlert, setShowAlert] = useState(false);
    return(
        <section id="Subscriptions">
            <div className="subDetails">
            <h1 className="sub-title">Select A Membership Level</h1>
            
        <p>
            Choose a plan that fits your ride. 
            Whether you’re a daily commuter or a delivery rider,<br/>
            CycleVault offers flexible, affordable storage options designed for your schedule. 
            Enjoy 24/7 access, top-tier security, and peace of mind knowing 
            your bike is protected around the clock.
        </p>
        </div>
        <div className="sub-container">
        <ul className="sub-links">
           <div className="sub-link-containers">
        <div className="price">
             <h1>10$</h1>
            <p>DAILY</p>
        </div>
        <li><button  onClick={() => setShowAlert(true)} className="sub-buttons">join</button></li>
        </div>



           <div className="sub-link-containers">
         <div className="price">
            <h1>100$</h1>
            <p>PER MONTH</p>
         </div>
    <li><button onClick={() => setShowAlert(true)}  className="sub-buttons">join</button></li>
</div>


            <div className="sub-link-containers">
  <div className="price">
    <h1>1000$</h1>
    <p>ANNUALLY</p>
  </div>
  <li><button onClick={() => setShowAlert(true)}  className="sub-buttons">join</button></li>
</div>

            
        </ul>
        </div>
        <div className="waitlist-container">
            <h1>WAITLIST</h1>
            <p>As of right now,<br/> Cycle Vault is not available to the public.<br/> Join the waitlist
                to get a 10% discount on our opening day
            </p>
               <div className="sub-link-containers">
  <div className="price">
    <h1>join the waitlist</h1>
    <p>10% Discount 🥳</p>
  </div>
  <a href='https://docs.google.com/forms/d/e/1FAIpQLSdQdWlKKq1z6c2zpisJGLCakjOH-gceJfqswr24Yom8ZcitwA/viewform' target="_blank"><button onClick="" className="sub-buttons">join</button></a>
</div>
        </div>


      {showAlert && (
        <AlertModal
          message="Not available right now! Join the waitlist 🚴‍♂️"
          onClose={() => setShowAlert(false)}
        />
      )}
        </section>
    );
}

export default Subscriptions;