using TDSPJ.API.Domain.Enums;

namespace TDSPJ.API.Domain.Entities
{
    public class User
    {

        public string Email { get; set; }

        public string Password { get; set; }

        public StatusEnum Status { get; private set; }


    }
}
