
function Navbar(){
    return(
        <section id="Home">
         <nav>
      <div className="name">
        <img 
          src="/assets/logo.png"
          alt="bike"
          className="logo"
        />
      </div>
            <div className="nav-center">
            <ul className="nav-links">
                <li><a href="#Home" className="links">Home</a></li>
                <li><a href="#About" className="links">About</a></li>
                <li><a href="#Subscriptions" className="links">Subscriptions</a></li>
                <li><a href="#Contacts" className="links">Contacts</a></li>
                <li><a href="#Socials" className="links">Socials</a></li>
            </ul>
                <div className="button-position">
                <span className="toggleButton"></span>
                <span className="toggleButton"></span>
                <span className="toggleButton"></span>
                </div>
            </div>
        </nav>
        </section>
    );
}

export default Navbar