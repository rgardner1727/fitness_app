import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav className="main-nav">
                <div className="main-nav-left">
                    <p className="nav-slogan">#FLEX</p>
                </div>
                <div className="main-nav-right">
                    <p className="nav-action">FLEX+</p>
                    <p className="nav-action">Login</p>
                    <p className="nav-action">Join</p>
                </div>
            </nav>
        </header>
    )
}

export default Header;