import {motion} from "framer-motion";

function About() {
  return (
    <section id="About">
      <div className="aboutContainer">
          <h1 className="aboutName">About Us</h1>

        <div className="aboutPicSection">
          <img
            src="/assets/bodyPic.jpg"
            alt="CycleVault team or bikes"
            className="aboutImage"
          />
        </div>
      

        
      <p className="aboutText">
        <span className="dropCap">C</span>ycleVault is a Manhattan-based bike hub located at 77 Madison Avenue,
        providing secure, 24/7 storage for delivery riders and daily commuters.
        Founded by Amadou Barrie, our mission is to give urban cyclists peace of mind
        by making bike storage simple, safe, and always accessible.
        With state-of-the-art security and round-the-clock access, CycleVault is the
        go-to choice for Manhattan riders who need convenience, reliability,
        and confidence in storing their bikes.
        Whether you're a delivery professional on a tight schedule or a commuter
        navigating the city, we keep your bike safe and ready whenever you need it.
      </p>
      </div>
    </section>
  );
}

export default About;
