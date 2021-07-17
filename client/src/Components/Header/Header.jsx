import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <>
            <header id="header" className="fixed-top header-inner-pages" style={{ height: "50px" }}>
                <div className="container d-flex align-items-center marginTop" >
                <h1 className="logo me-auto"><a href="/">e-Farming</a></h1>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto " href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        <li><a className="nav-link   scrollto" href="#portfolio">Cart</a></li>
                        <li><a className="nav-link scrollto" href="#team">Wishlist</a></li>
                        <li className="dropdown"><a href="#"><span>Products</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">Goods</a></li>
                                <li className="dropdown"><a href="#"><span>Products</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Products 1</a></li>
                                        <li><a href="#">Products 2</a></li>
                                        <li><a href="#">Products 3</a></li>
                                        <li><a href="#">Products 4</a></li>
                                        <li><a href="#">Products 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Products A</a></li>
                                <li><a href="#">Products B</a></li>
                                <li><a href="#">Products C</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="/login">Login</a></li>
                        <li><a className="nav-link scrollto" href="/register">Signup</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"><MenuIcon /></i>
                </nav>
                </div>
        </header>
        </>
    )
}

export default Header
