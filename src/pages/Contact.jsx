import { Card, CardHeader, CardBody, Text, Heading, Box, Stack, StackDivider } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.div
            className="page-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card
                marginTop={6}
                maxW="600px"
                mx="auto"
            >
                <CardHeader>
                    <Heading size='md' color="white !important">Contact Me:</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase' color="gray.400 !important">
                                Email
                            </Heading>
                            <Text pt='2' fontSize='sm' color="gray.300">
                                bryan.schneller@gmail.com
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase' color="gray.400 !important">
                                LinkedIn
                            </Heading>
                            <Text pt='2' fontSize='sm' color="gray.300">
                                www.linkedin.com/in/bryan-schneller-28b954244
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase' color="gray.400 !important">
                                GitHub
                            </Heading>
                            <Text pt='2' fontSize='sm' color="gray.300">
                                https://github.com/ChairSitter
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </motion.div>
    );
}

export default Contact;
