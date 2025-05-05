
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using TDSPJ.API.Domain.Exceptions;

namespace TDSPJ.API.Domain.Entities
{
    public class Car : Audit
    {
        public Guid Id { get; private set; }

        public string Plate { get; private set; }

        public string Color { get; private set; }

        public string Motorization { get; private set; }

        //1..1
        public Guid CustomerId { get; private set; }
        public Customer Customer { get; private set; }

        public Car(string plate, string color, string motorization)
        {
            ValidatePlate(plate);
            Id = Guid.NewGuid();  
            Plate = plate;
            Color = color;
            Motorization = motorization;
        }

        private void ValidatePlate(string plate)
        {
            if (string.IsNullOrEmpty(plate))
            {
                throw new DomainException("Plate must not be null");
            }
            if (plate.Length != 8)
            {
                throw new DomainException("License plate must have 8 characters");
            }

            if (char.IsLetter(plate, 4))
            {
                var padraoMercosul = new Regex("[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}");
                if (!padraoMercosul.IsMatch(plate)) throw new DomainException("Placa inválida");
            }
            else
            {
                var padraoNormal = new Regex("[a-zA-Z]{3}[0-9]{4}");
                if (!padraoNormal.IsMatch(plate)) throw new DomainException("Placa inválida!");
            }

        }
    }
}
