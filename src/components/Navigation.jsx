import { Link, useLocation } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const breakpoints = {
    base: '0em', // 0px
    sm: '30em', // ~480px. em is a relative unit and is dependant on the font-size.
    md: '48em', // ~768px
    lg: '62em', // ~992px
    xl: '80em', // ~1280px
    '2xl': '96em', // ~1536px
}

export default function Navigation() {
    const currentPage = useLocation().pathname;
    return (
        <>
            <ul className="navigation">
                <li className="nav-item">
                    <Link to="/"><Button size={{base: 'sm', md: 'md', lg: 'lg'}} colorScheme={currentPage === '/' ? 'gray' : 'blue'}>ABOUT ME</Button></Link>
                </li>
                <li className="nav-item">
                    <Link to="/Portfolio"><Button size={{base: 'sm', md: 'md', lg: 'lg'}} colorScheme={currentPage === '/Portfolio' ? 'gray' : 'blue'}>PORTFOLIO</Button></Link>
                </li>
                <li className="nav-item">
                    <Link to="/Contact"><Button size={{base: 'sm', md: 'md', lg: 'lg'}} colorScheme={currentPage === '/Contact' ? 'gray' : 'blue'}>CONTACT</Button></Link>
                </li>
                <li className="nav-item">
                    <Link to="/Resume"><Button size={{base: 'sm', md: 'md', lg: 'lg'}} colorScheme={currentPage === '/Resume' ? 'gray' : 'blue'}>RESUME</Button></Link>
                </li>
            </ul>
        </>
    )
}