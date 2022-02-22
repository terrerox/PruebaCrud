import React from 'react'
import { formatDate } from '../helpers'
import PersonaService from '../services/PersonaService'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
    Flex,
    useToast
} from '@chakra-ui/react'
import {
    FiPenTool,
    FiDelete
} from "react-icons/fi";

const PersonasTable = ({ personas, onOpen, setPersona, setPersonas }) => {
    const toast = useToast()

    const updatePersona = (persona) => {
        setPersona(persona)
        onOpen()
    }

    const deletePersona = (id) => {
        PersonaService.delete(id)
            .then( personas => {
                    setPersonas(personas)
                    return toast({
                        title: "Eliminado",
                        description: "Prestamo eliminado con éxito",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    })
                }
            )
    }
    return (
        <Table variant='striped' colorScheme='teal'>
            <TableCaption>
                Esto son todas las personas registradas hasta el momento
            </TableCaption>
            <Thead>
                <Tr>
                    <Th>Id</Th>
                    <Th>Nombre</Th>
                    <Th>Fecha de nacimiento</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    personas.map(persona => (
                        <Tr key={persona.id}>
                            <Td>{persona.id}</Td>
                            <Td>{persona.nombre}</Td>
                            <Td>{formatDate(persona.fechaDeNacimiento)}</Td>
                            <Td>
                                <Flex alignItems="center" justifyContent="space-around">
                                    <Button
                                        leftIcon={<FiPenTool />}
                                        colorScheme='blue'
                                        variant='solid'
                                        onClick={() => updatePersona(persona)}
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        leftIcon={<FiDelete />}
                                        colorScheme='red'
                                        variant='solid'
                                        onClick={() => deletePersona(persona.id)}
                                    >
                                        Eliminar
                                    </Button>
                                </Flex>
                            </Td>
                        </Tr>
                    ))
                }
            </Tbody>
            <Tfoot>
                <Tr>
                    <Th>Id</Th>
                    <Th>Nombre</Th>
                    <Th>Fecha de nacimiento</Th>
                </Tr>
            </Tfoot>
        </Table>
    )
}

export default PersonasTable