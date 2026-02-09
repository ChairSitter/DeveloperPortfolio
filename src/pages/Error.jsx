import { useRouteError, Link } from 'react-router-dom';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box
      id="error-page"
      minH="60vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={8}
      bg="#0a0a0a"
      color="gray.300"
    >
      <Heading size="xl" mb={4} color="white">
        Oops!
      </Heading>
      <Text mb={4}>An error has occurred, please try again.</Text>
      <Text as="i" mb={6} color="gray.500">
        {error?.statusText || error?.message}
      </Text>
      <Link to="/">
        <Button colorScheme="blue">Return Home</Button>
      </Link>
    </Box>
  );
}
