using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos;
using backend.Models;

namespace backend.Services
{
    public interface IPersonaService
    {
        Task<ServiceResponse<List<GetPersonaDto>>> GetAllPersonas();
        Task<ServiceResponse<List<GetPersonaDto>>> AddPersona(AddPersonaDto newPersona);
        Task<ServiceResponse<List<GetPersonaDto>>> UpdatePersona(UpdatePersonaDto updatedPersona);
        Task<ServiceResponse<List<GetPersonaDto>>> DeletePersona(int id); 
    }
}