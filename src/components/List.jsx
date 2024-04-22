import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading,
} from '@chakra-ui/react'

const List = () => {
    return (
        <TableContainer mb={75}>
            <Heading textAlign={'center'}>Web Development Skills:</Heading>
            <Table size='sm'>
                <Thead>
                    <Tr>
                        <Th>Front-end</Th>
                        <Th>Back-end</Th>
                        <Th>Other skills</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>HTML</Td>
                        <Td>Node.js</Td>
                        <Td>Git + GitHub</Td>
                    </Tr>
                    <Tr>
                        <Td>CSS</Td>
                        <Td>Express.js</Td>
                        <Td>Jest testing</Td>
                    </Tr>
                    <Tr>
                        <Td>JavaScript</Td>
                        <Td>PostGreSQL</Td>
                        <Td>Agile development</Td>
                    </Tr>
                    <Tr>
                        <Td>React</Td>
                        <Td>MongoDB</Td>
                        <Td>Project development</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default List;