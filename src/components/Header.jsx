import { useLocation } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navigation from "./Navigation";

function Header() {
    const currentPage = useLocation().pathname;
    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <div id="header-l">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <Image
                        id="header-img"
                        borderRadius='full'
                        border='2px solid'
                        borderColor='black.800'
                        boxSize={{ base: '80px', md: '120px', lg: '140px' }}
                        src="/images/Logo.png"
                        alt='BS logo'
                    />
                </motion.div>
                <h1 id="header-title">
                    Bryan Schneller Web Development
                </h1>
            </div>
            <Navigation />
        </motion.header>
    );
}

export default Header;
