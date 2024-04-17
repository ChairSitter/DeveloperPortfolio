import { Link } from '@chakra-ui/react';
import { Button, Text } from '@chakra-ui/react';

export default function Footer() {
    return (
        <>
            <footer>
                <Text>Contact Me:</Text>
                <Link href='https://www.linkedin.com/in/bryan-schneller-28b954244/' isExternal><Button colorScheme="gray" size="md" variant="ghost">LinkedIn</Button></Link>
                <Link href='https://github.com/ChairSitter' isExternal><Button size="md" variant="ghost" colorScheme="gray">GitHub</Button></Link>
                <Link href='https://www.instagram.com/bschnell91/' isExternal><Button size="md" variant="ghost" colorScheme="gray">Instagram</Button></Link>
            </footer>
        </>
    )
}