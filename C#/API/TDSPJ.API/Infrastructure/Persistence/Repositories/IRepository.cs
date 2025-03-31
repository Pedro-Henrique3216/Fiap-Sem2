namespace TDSPJ.API.Infrastructure.Persistence.Repositories
{
    public interface IRepository <T> where T : class
    {
        Task Save(T entity);

        Task<IEnumerable<T>> GetAll();

        void Delete(T entity);

        Task<T?> GetById(Guid id);

        void Update(T entity);



    }
}
