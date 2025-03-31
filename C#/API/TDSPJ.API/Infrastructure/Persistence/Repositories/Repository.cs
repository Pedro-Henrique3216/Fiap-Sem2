using Microsoft.EntityFrameworkCore;
using TDSPJ.API.Domain.Entities;
using TDSPJ.API.Infrastructure.Context;

namespace TDSPJ.API.Infrastructure.Persistence.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly TDSPJContext _context;

        private readonly DbSet<T> _dbSet;

        public Repository(TDSPJContext context)
        {
            _context = context;
            _dbSet = context.Set<T>();
        }
        public void Delete(T entity)
        {
            _dbSet.Remove(entity);
        }

        public async Task<IEnumerable<T>> GetAll()
        {
           return await _dbSet.ToListAsync();
        }

        public async Task<T?> GetById(Guid id)
        {
            return await _dbSet.FindAsync(id);
        }

        public async Task Save(T entity)
        {
            await _dbSet.AddAsync(entity);
        }

        public void Update(T entity)
        {
            _dbSet.Update(entity);
        }
    }
}
