import { Link, useLocation } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export default function Navigation() {
    const currentPage = useLocation().pathname;
    return (
        <>
            <ul className="navigation">
                <li className="nav-item">
                    <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}><Button size="lg" colorScheme={'blue'}>ABOUT ME</Button></Link>
                </li>
                <li className="nav-item">
                    <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}><Button size="lg" colorScheme={'blue'}>PORTFOLIO</Button></Link>
                </li>
                <li className="nav-item">
                    <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}><Button size="lg" colorScheme={'blue'}>CONTACT</Button></Link>
                </li>
                <li className="nav-item">
                    <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}><Button size="lg" colorScheme={'blue'}>RESUME</Button></Link>
                </li>
            </ul>
        </>
    )
}