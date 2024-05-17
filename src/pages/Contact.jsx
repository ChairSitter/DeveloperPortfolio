import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Box, Stack, StackDivider } from '@chakra-ui/react';


const Contact = () => {
    return (
        <div className="page-content">
            <Card marginTop={6}>
                <CardHeader>
                    <Heading size='md'>Contact Me:</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Email
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                bryan.schneller@gmail.com
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                LinkedIn
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                www.linkedin.com/in/bryan-schneller-28b954244
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                GitHub
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                https://github.com/ChairSitter
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </div>
    );
}

export default Contact;