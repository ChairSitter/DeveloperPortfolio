import { Link, useLocation } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export default function Navigation() {
    const currentPage = useLocation().pathname;
    return (
        <>
            <ul className="navigation">
                <li className="nav-item">
                    <Link to="/"><Button size="lg" colorScheme={currentPage === '/' ? 'gray' : 'blue'}>ABOUT ME</Button></Link>
                </li>
                <li className="nav-item">
                    <Link to="/Portfolio"><Button size="lg" colorScheme={currentPage === '/Portfolio' ? 'gray' : 'blue'}>PORTFOLIO</Button></Link>
                </li>
                <li className="nav-item">
                    <Link to="/Contact"><Button size="lg" colorScheme={currentPage === '/Contact' ? 'gray' : 'blue'}>CONTACT</Button></Link>
                </li>
                <li className="nav-item">
                    <Link to="/Resume"><Button size="lg" colorScheme={currentPage === '/Resume' ? 'gray' : 'blue'}>RESUME</Button></Link>
                </li>
            </ul>
        </>
    )
}