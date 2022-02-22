using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using backend.Dtos;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class PersonaService : IPersonaService
    {
        private readonly IMapper _mapper;
        private readonly PruebaTecnicaContext _context;

        public PersonaService(IMapper mapper, PruebaTecnicaContext context)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<ServiceResponse<List<GetPersonaDto>>> AddPersona(AddPersonaDto newPersona)
        {
            ServiceResponse<List<GetPersonaDto>> serviceResponse = new ServiceResponse<List<GetPersonaDto>>();
            Persona Persona = _mapper.Map<Persona>(newPersona);

            await _context.Personas.AddAsync(Persona);
            await _context.SaveChangesAsync();
            serviceResponse.Data = (_context.Personas.Select(c => _mapper.Map<GetPersonaDto>(c))).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetPersonaDto>>> DeletePersona(int id)
        {
            ServiceResponse<List<GetPersonaDto>> serviceResponse = 
                new ServiceResponse<List<GetPersonaDto>>();
            try
            {
                Persona Persona = await _context.Personas.FirstOrDefaultAsync(c => c.Id == id);
                if (Persona != null)
                {
                    _context.Personas.Remove(Persona);
                    await _context.SaveChangesAsync();
                    serviceResponse.Data = (_context.Personas.Select(c => _mapper.Map<GetPersonaDto>(c))).ToList();
                }
                else
                {
                    serviceResponse.Success = false;
                    serviceResponse.Message = "Persona not found.";
                }
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetPersonaDto>>> GetAllPersonas()
        {
            ServiceResponse<List<GetPersonaDto>> serviceResponse = new ServiceResponse<List<GetPersonaDto>>();
            List<Persona> dbPersonas = await _context.Personas.ToListAsync();
            serviceResponse.Data = dbPersonas.Select(c => _mapper.Map<GetPersonaDto>(c)).ToList();
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<GetPersonaDto>>> UpdatePersona(UpdatePersonaDto updatedPersona)
        {
            ServiceResponse<List<GetPersonaDto>> serviceResponse = new ServiceResponse<List<GetPersonaDto>>();
            try
            {
                Persona Persona = await _context.Personas.FirstOrDefaultAsync(c => c.Id == updatedPersona.Id);
                if (Persona != null)
                {
                    Persona.Nombre = updatedPersona.Nombre;
                    Persona.FechaDeNacimiento = updatedPersona.FechaDeNacimiento;
                    _context.Personas.Update(Persona);
                    await _context.SaveChangesAsync();
                    serviceResponse.Data = (_context.Personas.Select(c => _mapper.Map<GetPersonaDto>(c))).ToList();      
                }
                else
                {
                    serviceResponse.Success = false;
                    serviceResponse.Message = "Persona not found.";
                }
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }
            return serviceResponse;
        }
    }
}