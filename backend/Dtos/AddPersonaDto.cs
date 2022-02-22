using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Dtos
{
    public class AddPersonaDto
    {
        [Required]
        public string Nombre { get; set; }
        [Required]
        public DateTime FechaDeNacimiento { get; set; }
    }
}