import React, { useEffect } from 'react'
import { formatDate } from '../helpers'
import {
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react';

const PersonaForm = ({ personaFormData, persona, setPersonaFormData }) => {
    
    useEffect(() => {
        setPersonaFormData({
            nombre: persona.nombre || '',
            fechaDeNacimiento: formatDate(persona.fechaDeNacimiento) || ''
        })
    }, [])
    const { nombre, fechaDeNacimiento } = personaFormData;

    const updateState = e => {
        setPersonaFormData({
            ...personaFormData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form>
            <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input
                    name="nombre"
                    onChange={updateState}
                    value={nombre}
                    placeholder="Ingrese el nombre"
                />
                <FormLabel>Fecha de nacimiento</FormLabel>
                <Input
                    isRequired
                    name="fechaDeNacimiento"
                    type="date"
                    onChange={updateState}
                    value={fechaDeNacimiento}
                    placeholder="Ingrese la fecha de nacimiento"
                />
            </FormControl>
        </form>
    )
}

export default PersonaForm