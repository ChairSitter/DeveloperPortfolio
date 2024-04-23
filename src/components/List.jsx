import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Heading,
} from '@chakra-ui/react'

const breakpoints = {
    base: '0em', // 0px
    sm: '30em', // ~480px. em is a relative unit and is dependant on the font-size.
    md: '48em', // ~768px
    lg: '62em', // ~992px
    xl: '80em', // ~1280px
    '2xl': '96em', // ~1536px
}

const List = () => {
    return (
        <TableContainer mb={75}>
            <Heading textAlign={'center'}>Web Development Skills:</Heading>
            <Table size={{base: 'sm', md: 'md', lg: 'lg'}}>
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