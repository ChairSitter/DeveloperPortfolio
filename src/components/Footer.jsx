import { Link, Button, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
        >
            <Text color="gray.300" fontWeight="600" fontSize={{ base: 'sm', md: 'md' }}>
                Contact Me:
            </Text>
            <Link href='https://www.linkedin.com/in/bryan-schneller-28b954244/' isExternal>
                <Button
                    variant="ghost"
                    size="md"
                    color="gray.300"
                    _hover={{ color: '#3182CE', bg: 'whiteAlpha.100' }}
                    transition="all 0.3s"
                >
                    LinkedIn
                </Button>
            </Link>
            <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <Image
                    borderRadius='full'
                    border='2px solid'
                    borderColor='whiteAlpha.200'
                    boxSize={{ base: '28px', md: '35px', lg: '45px' }}
                    src="/images/Logo.png"
                    alt='BS logo'
                />
            </motion.div>
            <Link href='https://github.com/ChairSitter' isExternal>
                <Button
                    variant="ghost"
                    size="md"
                    color="gray.300"
                    _hover={{ color: '#3182CE', bg: 'whiteAlpha.100' }}
                    transition="all 0.3s"
                >
                    GitHub
                </Button>
            </Link>
            <Link href='https://www.instagram.com/bschnell91/' isExternal>
                <Button
                    variant="ghost"
                    size="md"
                    color="gray.300"
                    _hover={{ color: '#3182CE', bg: 'whiteAlpha.100' }}
                    transition="all 0.3s"
                >
                    Instagram
                </Button>
            </Link>
        </motion.footer>
    );
}
