import { Button } from '@chakra-ui/react';
import List from '../components/List';
import { motion } from 'framer-motion';

export default function Resume() {
    return (
        <>
            <motion.h2
                className="page-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                My Resume:
            </motion.h2>
            <motion.div
                id="resume-content"
                className="page-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p>
                    Please download my resume for more information, and feel free to reach out! <br /><br />
                </p>
                <motion.a
                    href='/assets/Web Dev Resume.pdf'
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Button
                        size='lg'
                        colorScheme='blue'
                        _hover={{ boxShadow: '0 0 25px rgba(49, 130, 206, 0.5)' }}
                    >
                        Bryan's Resume
                    </Button>
                </motion.a>
                <br /><br />
                <List />
            </motion.div>
        </>
    );
}
