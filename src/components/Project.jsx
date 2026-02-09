import { Card, CardBody, Stack, Image, Heading, Text, Button, ButtonGroup, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    })
};

export default function Project(props) {
    const { projSource, projAlt, projHeading, projAdd, projText, projURL, projGH, index = 0 } = props;
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
        >
            <Card
                maxW='sm'
                m={2}
                as={motion.div}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                sx={{
                    '& .chakra-card__body': { color: 'gray.300' }
                }}
            >
                <CardBody>
                    <Link href={projURL} isExternal display="block">
                        <motion.div whileHover={{ scale: 1.02 }}>
                            <Image
                                src={projSource}
                                alt={projAlt}
                                borderRadius='lg'
                            />
                        </motion.div>
                    </Link>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' color="white !important">
                            {projHeading} {projAdd}
                        </Heading>
                        <Text color="gray.400">
                            {projText}
                        </Text>
                        <ButtonGroup>
                            <Link href={projURL} isExternal>
                                <Button variant='solid' colorScheme='blue' size="sm">
                                    Visit {projHeading}
                                </Button>
                            </Link>
                            <Link href={projGH} isExternal>
                                <Button variant='outline' colorScheme='blue' size="sm">
                                    GitHub
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </Stack>
                </CardBody>
            </Card>
        </motion.div>
    );
}
