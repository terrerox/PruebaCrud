import React, { useState, useEffect } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useToast
} from '@chakra-ui/react'
import PersonaForm from './PersonaForm'
import PersonaService from '../services/PersonaService'

const PersonaModal = ({ isOpen, onClose, persona, setPersonas }) => {
    const [personaFormData, setPersonaFormData] = useState({
        nombre: '',
        fechaDeNacimiento: ''
    });
    const toast = useToast()

    const { nombre, fechaDeNacimiento } = personaFormData
    const handleSubmit = async e => {
        e.preventDefault()
        if (nombre === '' || fechaDeNacimiento === '') {
            return toast({
                title: "Error",
                description: "Favor completar todos los campos",
                status: "error",
                duration: 9000,
                isClosable: true,
            })
        }
        persona.id
            ? (
                PersonaService.update({
                    id: persona.id,
                    ...personaFormData
                })
                    .then( personas => {
                            setPersonas(personas)
                            onClose()
                            return toast({
                                title: "Actualizado",
                                description: "¡Cuenta actualizada correctamente!",
                                status: "success",
                                duration: 9000,
                                isClosable: true,
                            })
                        }
                    )
            )
            : (
                PersonaService.add(personaFormData)
                    .then( personas => {
                            onClose()
                            setPersonas(personas)
                            return toast({
                                title: "Agregado",
                                description: "¡Cuenta agregada correctamente!",
                                status: "success",
                                duration: 9000,
                                isClosable: true,
                            })
                        }
                    )
            )
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    {
                        persona.id
                            ? 'Actualizar Persona'
                            : 'Agregar Persona'
                    }
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <PersonaForm
                        persona={persona}
                        personaFormData={personaFormData}
                        setPersonaFormData={setPersonaFormData}
                    />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Cerrar
                    </Button>
                    <Button
                        isLoading={status.isLoading}
                        onClick={handleSubmit}
                        colorScheme='teal'
                    >
                        {persona.id ? 'Actualizar' : 'Agregar'}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default PersonaModal