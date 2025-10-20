function Body() {
  return (
    <section id="home">
      <div className="bodyContainer">
        <div className="bodyText">
          <h1>
            CycleVault <br />
            Bike Hub Company
          </h1>
          <p className="slogan">
            Your Bike’s Safe Haven. 
            CycleVault provides 24/7 secure storage for urban cyclists,
            ensuring your bike is protected and always within reach whenever you need it.
          </p>
        </div>

        <div className="bodyImageContainer">
          <img
            src="/assets/bodyImg.jpeg"
            alt="Cyclist"
            className="bodyImg"
          />
        </div>
      </div>
    </section>
  );
}

export default Body;
