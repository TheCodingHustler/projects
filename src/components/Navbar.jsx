

function HeaderNav(){
    return(
        <>
        <div className="navbar-container">
        <nav className="navbar">
            <div className="logo-section">
                <img src="https://static.vecteezy.com/system/resources/previews/023/522/362/non_2x/single-cartoon-basketball-ball-back-to-school-vector.jpg" 
                alt="logo-pic" 
                className="logo-img"/>
            <h3 className="logo-name">NBAZONE</h3>
            </div>
            <ul className="nav-links">
                <li className="links"><a href="" className="a-links">home</a></li>
                <li className="links"><a href="" className="a-links">about</a></li>
                <li className="links"><a href="" className="a-links">news</a></li>
                <li className="links"><a href="" className="a-links">community</a></li>
                <li className="links"><a href="" className="a-links">player</a></li>
                <li className="links"><a href="" className="a-links">contact</a></li>
            </ul>
            <div className="buttons">
            <button className="log-in-button">log in</button>
            <button className="sign-up-button">sign up</button>
            </div>
        </nav>
        </div>
        </>
    )
}

export default HeaderNav;