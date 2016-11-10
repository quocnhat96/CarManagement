using CarManagement.Data.Infrastructure;
using CarManagement.Model.Models;
using System.Collections.Generic;
using System.Linq;

namespace CarManagement.Data.Repository
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetByAlias(string alias);
    }

    public class ProductRepository : RepositoryBase<Product>, IProductRepository
    {
        public ProductRepository(DbFactory dbFactory)
            : base(dbFactory)
        {
        }

        public IEnumerable<Product> GetByAlias(string alias)
        {
            return this.DbContext.Products.Where(x => x.Alias == alias);
        }
    }
}