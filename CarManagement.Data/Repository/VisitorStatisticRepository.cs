using CarManagement.Data.Infrastructure;
using CarManagement.Model.Models;

namespace CarManagement.Data.Repository
{
    public interface IVisitorStatisticRepository : IRepository<VisitorStatistic>
    {
    }

    public class VisitorStatisticRepository : RepositoryBase<VisitorStatistic>, IVisitorStatisticRepository
    {
        public VisitorStatisticRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }
    }
}