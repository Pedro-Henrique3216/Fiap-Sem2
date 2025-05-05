using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TDSPJ.API.Domain.Entities;

namespace TDSPJ.API.Infrastructure.Mappings
{
    public class CarMapping : IEntityTypeConfiguration<Car>
    {
        public void Configure(EntityTypeBuilder<Car> builder)
        {
            builder
                .ToTable("Car");

            builder
                .HasKey("Id");

            builder.Property(x => x.Plate)
                .HasMaxLength(20)
                .IsRequired();

            builder
                .Property(car => car.Color)
                .HasMaxLength(20)
                .IsRequired();

            builder
                .Property(car => car.Motorization)
                .HasMaxLength(20)
                .IsRequired();

            builder
                .HasOne(car => car.Customer)
                .WithMany(cust => cust.Cars)
                .HasForeignKey(car => car.CustomerId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
