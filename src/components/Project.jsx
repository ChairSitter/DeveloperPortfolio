import { Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text, Button, ButtonGroup, Link } from '@chakra-ui/react'

export default function Project(props) {
    const { projSource, projAlt, projHeading, projAdd, projText, projURL, projGH } = props;
    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={projSource}
                        alt={projAlt}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{projHeading} {projAdd}</Heading>
                        <Text>
                            {projText}
                        </Text>
                        <ButtonGroup>
                        <Link href={projURL} isExternal>
                            <Button variant='solid' colorScheme='blue'>
                                Visit {projHeading}
                            </Button>
                        </Link>
                        <Link href={projGH} isExternal>
                            <Button variant='ghost' colorScheme='blue'>
                                GitHub repo
                            </Button>
                        </Link>
                        </ButtonGroup>
                    </Stack>
                </CardBody>
            </Card>
        </>
    )
}