import React, { useEffect, useState } from 'react'
import PersonaService from './services/PersonaService'
import { Text, Flex, Button, Container, useDisclosure } from "@chakra-ui/react";
import PersonasTable from './components/PersonasTable'
import PersonaModal from './components/PersonaModal'


const App = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [personas, setPersonas] = useState([])
    const [persona, setPersona] = useState({})

    useEffect(() => {
        PersonaService.getAll()
            .then(personas => {
                setPersonas(personas)
            })
    }, [])

    const addPersona = () => {
      onOpen()
      setPersona({})
    }

    return (
        <Container maxW='container.xl'>
            <Flex alignItems="center" justifyContent="space-between">
                <Text my="2" fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Personas
                </Text>
                <Button colorScheme='teal' variant='outline' onClick={addPersona}>
                    Nuevo
                </Button>
            </Flex>
            <PersonaModal 
                isOpen={isOpen}
                persona={persona}
                onClose={onClose}
                setPersonas={setPersonas}
            />
            <PersonasTable 
                personas={personas}
                setPersona={setPersona}
                setPersonas={setPersonas}
                onOpen={onOpen}
            />
        </Container>
    )
}

export default App