using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TDSPJ.API.Domain.Entities;

namespace TDSPJ.API.Infrastructure.Mappings
{
    public class UserMapping : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder
                .ToTable("Users");

            builder
                .HasKey("Email");

            builder
                .Property(user => user.Status)
                .IsRequired();
        }

        
    }
}
