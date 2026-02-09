import { Link, Text, Image } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si';
import { motion } from 'framer-motion';

const socialLinks = [
    { href: 'https://www.linkedin.com/in/bryan-schneller-28b954244/', Icon: SiLinkedin, label: 'LinkedIn' },
    { href: 'https://github.com/ChairSitter', Icon: SiGithub, label: 'GitHub' },
    { href: 'https://www.instagram.com/bschnell91/', Icon: SiInstagram, label: 'Instagram' },
];

const SocialLink = ({ href, Icon: IconComponent, label }) => (
    <Link
        href={href}
        isExternal
        display="flex"
        alignItems="center"
        color="gray.300"
        _hover={{ color: '#3182CE' }}
        transition="color 0.3s"
        aria-label={label}
    >
        <Icon
            as={IconComponent}
            boxSize={{ base: 6, sm: 7, md: 8 }}
        />
    </Link>
);

export default function Footer() {
    return (
        <motion.footer
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
        >
            <Text
                color="gray.300"
                fontWeight="600"
                fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
            >
                Contact Me:
            </Text>
            <SocialLink href={socialLinks[0].href} Icon={socialLinks[0].Icon} label={socialLinks[0].label} />
            <motion.div
                className="footer-logo"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <Image
                    borderRadius='full'
                    border='2px solid'
                    borderColor='whiteAlpha.200'
                    height="100%"
                    width="auto"
                    maxH="64px"
                    objectFit="contain"
                    src="/images/Logo.png"
                    alt='BS logo'
                />
            </motion.div>
            <SocialLink href={socialLinks[1].href} Icon={socialLinks[1].Icon} label={socialLinks[1].label} />
            <SocialLink href={socialLinks[2].href} Icon={socialLinks[2].Icon} label={socialLinks[2].label} />
        </motion.footer>
    );
}
