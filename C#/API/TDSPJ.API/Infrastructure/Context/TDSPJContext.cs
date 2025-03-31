using Microsoft.EntityFrameworkCore;
using TDSPJ.API.Domain.Entities;
using TDSPJ.API.Infrastructure.Mappings;

namespace TDSPJ.API.Infrastructure.Context
{
    public class TDSPJContext(DbContextOptions<TDSPJContext> options) : DbContext(options)
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CustomerMapping());
            modelBuilder.ApplyConfiguration(new UserMapping());
        }

    }
}
