function Contacts() {
  return (
    <section id="Contacts">
      <div className="contactWrapper">
        <div className="contactText">
          <h1>Contact Us about CycleVault's Software</h1>
          <h3>
            Get in Touch <br />
            Have questions, feedback, or partnership inquiries? <br />
            We'd love to hear from you. Reach out to the CycleVault team anytime —
            we're here to help you keep your ride secure and your day moving.
          </h3>

          <div className="contact-container">
            <div className="contact-link-containers">
              <p className="contact">Call Us Directly</p>
              <button className="contact-buttons">
                <a href="tel:3479180947" className="number">
                  +1 (347) 918-0947
                </a>
              </button>
            </div>

            <div className="contact-link-containers">
              <p className="contact">Email Us</p>
              <button className="contact-buttons">
                <a href="mailto:cyclevault1@gmail.com" className="number">
                  cyclevault1@gmail.com
                </a>
              </button>
            </div>
          </div>
        </div>

       
          <img
            src="/assets/contactPic.jpg"
            alt="Contact CycleVault"
            className="contactImg"
          />
      </div>
    </section>
  );
}

export default Contacts;
