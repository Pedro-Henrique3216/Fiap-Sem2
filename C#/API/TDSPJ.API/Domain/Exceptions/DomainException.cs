﻿namespace TDSPJ.API.Domain.Exceptions
{
    public class DomainException : Exception
    {
        public DomainException(string? message) : base(message)
        { 
            //Envie um email
        }
    }
}
