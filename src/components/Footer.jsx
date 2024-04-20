import { Link } from '@chakra-ui/react';
import { Button, Text, Image } from '@chakra-ui/react';

const breakpoints = {
    base: '0em', // 0px
    sm: '30em', // ~480px. em is a relative unit and is dependant on the font-size.
    md: '48em', // ~768px
    lg: '62em', // ~992px
    xl: '80em', // ~1280px
    '2xl': '96em', // ~1536px
}

export default function Footer() {
    return (
        <>
            <footer>
                <Text color="#E6DF32" opacity=".85">Contact Me:</Text>
                <Link href='https://www.linkedin.com/in/bryan-schneller-28b954244/' isExternal><Button colorScheme="gray" size="md" variant="ghost" color="white" opacity=".75" _hover={{ color: 'black', bgColor: 'white' }}>LinkedIn</Button></Link>
                <Image
                    borderRadius='full'
                    border='#3182CE 3px solid'
                    boxSize={{base: '25px', sm: '25px', md: '35px', lg: '50px', xl: '60px'}}
                    src="../src/assets/images/Logo.png"
                    alt='BS logo'
                />
                <Link href='https://github.com/ChairSitter' isExternal><Button size="md" variant="ghost" colorScheme="gray" color="white" opacity=".75" _hover={{ color: 'black', bgColor: 'white' }}>GitHub</Button></Link>
                <Link href='https://www.instagram.com/bschnell91/' isExternal><Button size="md" variant="ghost" colorScheme="gray" color="white" opacity=".75" _hover={{ color: 'black', bgColor: 'white' }}>Instagram</Button></Link>
            </footer>
        </>
    )
}