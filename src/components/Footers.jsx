function Footer() {
    return (
        <section id="Socials">
        <footer className="footer-container">
            <div className="footer-center">
                <div className="logo-name">
                    <h1 className="footer-logo-name">CycleVault</h1>
                    <img 
                        src="/assets/logo.png"
                        alt="logo" 
                        className="footer-logo" 
                    />
                </div>
                <div className="footer-statement">
                <p>
                   CycleVault is transforming urban cycling through smart, secure, 
                   and always-accessible storage solutions.
                    We combine modern design and technology to keep your bike protected 24/7
                    —so you can focus on the ride, not the risk.
                </p>
                </div>

                <div className="footer-links">
                    <a href="https://www.instagram.com/cycle.vault/" 
                    target="_blank" 
                    rel="noreferrer">
                    <img src="/assets/instagram.png" alt="instagram" className="social-img"/></a>


                    <a href="https://www.facebook.com/" 
                    target="_blank" 
                    rel="noreferrer">
                     <img src="/assets/facebook.png" alt="facebook" className="social-img"/></a>


                    <a href="https://www.youtube.com/" 
                    target="_blank" 
                    rel="noreferrer"><img src="/assets/youtube.png" 
                    alt="youtube" 
                    className="social-img"/></a>


                    <a href="https://www.twitter.com/" 
                    target="_blank" 
                    rel="noreferrer"><img src="/assets/twitter.png" 
                    alt="twitter" 
                    className="social-img"/></a>
                </div>
                <p className="copyright">
                    &copy; {new Date().getFullYear()} CycleVault. All rights reserved.
                </p>
            </div>
        </footer>
        </section>
    );
}

export default Footer;
