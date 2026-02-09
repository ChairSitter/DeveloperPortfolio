import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Heading,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const List = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            <TableContainer mb={75}>
                <Heading textAlign={'center'} mb={4} color="white !important">
                    Web Development Skills:
                </Heading>
                <Table
                    size={{ base: 'sm', md: 'md', lg: 'lg' }}
                    variant="simple"
                    colorScheme="whiteAlpha"
                >
                    <Thead>
                        <Tr>
                            <Th color="gray.300 !important">Front-end</Th>
                            <Th color="gray.300 !important">Back-end</Th>
                            <Th color="gray.300 !important">Other skills</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td color="gray.400">HTML</Td>
                            <Td color="gray.400">Node.js</Td>
                            <Td color="gray.400">Git + GitHub</Td>
                        </Tr>
                        <Tr>
                            <Td color="gray.400">CSS</Td>
                            <Td color="gray.400">Express.js</Td>
                            <Td color="gray.400">Jest testing</Td>
                        </Tr>
                        <Tr>
                            <Td color="gray.400">JavaScript</Td>
                            <Td color="gray.400">PostGreSQL</Td>
                            <Td color="gray.400">Agile development</Td>
                        </Tr>
                        <Tr>
                            <Td color="gray.400">React</Td>
                            <Td color="gray.400">MongoDB</Td>
                            <Td color="gray.400">Project development</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </motion.div>
    );
}

export default List;
