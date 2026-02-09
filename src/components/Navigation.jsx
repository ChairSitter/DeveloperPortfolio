import { Link, useLocation } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Navigation() {
    const currentPage = useLocation().pathname;
    const navItems = [
        { path: '/', label: 'ABOUT ME' },
        { path: '/Portfolio', label: 'PORTFOLIO' },
        { path: '/Contact', label: 'CONTACT' },
        { path: '/Resume', label: 'RESUME' },
    ];

    return (
        <ul className="navigation">
            {navItems.map((item, i) => {
                const isActive = currentPage === item.path;
                return (
                    <motion.li
                        key={item.path}
                        className="nav-item"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                    >
                        <Link to={item.path}>
                            <Button
                                size={{ base: 'sm', md: 'md', lg: 'lg' }}
                                variant={isActive ? 'solid' : 'outline'}
                                colorScheme="blue"
                                bg={isActive ? 'blue.500' : 'transparent'}
                                color={isActive ? 'white' : 'gray.300'}
                                borderColor={isActive ? 'blue.500' : 'whiteAlpha.300'}
                                _hover={{
                                    bg: isActive ? 'blue.600' : 'whiteAlpha.100',
                                    borderColor: 'blue.400',
                                    color: 'white',
                                }}
                            >
                                {item.label}
                            </Button>
                        </Link>
                    </motion.li>
                );
            })}
        </ul>
    );
}
