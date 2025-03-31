namespace TDSPJ.API.Domain.DTO.Request
{
    public class CustomerRequest
    {
        public Guid Id { get; private set; }
        public string Name { get; private set; }
        public string Document { get; private set; }
    }
}
