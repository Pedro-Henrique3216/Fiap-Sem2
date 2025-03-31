using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TDSPJ.API.Domain.Entities;

namespace TDSPJ.API.Infrastructure.Mappings
{
    public class CustomerMapping : IEntityTypeConfiguration<Customer>
    {
        public void Configure(EntityTypeBuilder<Customer> builder)
        {
            builder.ToTable("Customer");

            builder.HasKey("Id");

            builder
                .Property(customer => customer.Name)
                .HasMaxLength(10)
                .IsRequired();

            builder
                .Property(customer => customer.Document)
                .HasMaxLength(20)
                .IsRequired();

            builder
                .Property(customer => customer.Status)
                .IsRequired();

            builder
                .Property(customer => customer.UserCreated)
                .HasMaxLength(20)
                .IsRequired();

            
        }
    }
}
