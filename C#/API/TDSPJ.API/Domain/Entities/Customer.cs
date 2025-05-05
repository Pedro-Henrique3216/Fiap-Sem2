using TDSPJ.API.Domain;
using TDSPJ.API.Domain.Enums;

namespace TDSPJ.API.Domain.Entities
{
    public class Customer : Audit
    {
        public Guid Id { get; private set; }
        public string Name { get; private set; }
        public string Document { get; private set; }
        public Gender Gender { get; private set; }
        public StatusEnum Status { get; private set; }
        public HashSet<Car> Cars { get; private set; };

        public Customer() { } 


        public Customer(string Name, string Document, Gender Gender)
        {
            this.Id = Guid.NewGuid();
            this.Name = Name;
            this.Document = Document;
            this.Gender = Gender;
            Status = StatusEnum.UNACTIVE;
        }

        public void ActivateCustomer()
        {
            if (Status == StatusEnum.ACTIVE)
            {
                throw new InvalidOperationException("Customer is already active.");
            }

            Status = StatusEnum.ACTIVE;
        }

        public void UnactiveCustomer()
        {
            if (Status == StatusEnum.UNACTIVE)
            {
                throw new InvalidOperationException("Customer is already unactive.");
            }

            Status = StatusEnum.UNACTIVE;
        }
    }
}
