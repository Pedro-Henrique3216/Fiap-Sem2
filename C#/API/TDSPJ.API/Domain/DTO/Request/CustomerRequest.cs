using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace TDSPJ.API.Domain.DTO.Request
{
    public class CustomerRequest
    {
        [JsonIgnore]
        public Guid Id { get; private set; }
        [MaxLength(50, ErrorMessage = "O campo name devera ter no maximo 50 caracteres")]
        public string Name { get; private set; }
        public string Document { get; private set; }
    }
}
