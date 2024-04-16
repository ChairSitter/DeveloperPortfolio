import { Link, useLocation } from 'react-router-dom';
import Navigation from "./Navigation";

function Header() {
    const currentPage = useLocation().pathname;
    return (
        <header>
            <h1 id="header-title">
                Bryan Schneller's Web Portfolio
            </h1>
        <Navigation />
        </header>
    );
}

export default Header;