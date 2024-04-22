import { Link, useLocation } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import Navigation from "./Navigation";

function Header() {
    const currentPage = useLocation().pathname;
    return (
        <header>
            <div id="header-l">
                <Image
                    borderRadius='full'
                    border='#3182CE 5px solid'
                    boxSize='140px'
                    src="/images/Logo.png"
                    alt='BS logo'
                />
                <h1 id="header-title">
                    Bryan Schneller Web Development
                </h1>
            </div>
            <Navigation />
        </header>
    );
}

export default Header;