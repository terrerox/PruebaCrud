using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonaController : ControllerBase
    {
        private readonly IPersonaService _personaService;
        public PersonaController(IPersonaService PersonaService)
        {
            _personaService = PersonaService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _personaService.GetAllPersonas());
        }

        [HttpPost]
        public async Task<IActionResult> AddPersona(AddPersonaDto newPersona)
        {
            return Ok(await _personaService.AddPersona(newPersona));
        }

        [HttpPut]
        public async Task<IActionResult> UpdatePersona(UpdatePersonaDto updatedPersona)
        {
            ServiceResponse<List<GetPersonaDto>> response = await _personaService.UpdatePersona(updatedPersona);
            if (response.Data == null)         
                return NotFound(response);
            
            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            ServiceResponse<List<GetPersonaDto>> response = await _personaService.DeletePersona(id);
            if (response.Data == null)
                return NotFound(response);
            
            return Ok(response);
        }
    }
}