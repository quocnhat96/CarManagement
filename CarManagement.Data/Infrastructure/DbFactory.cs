using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarManagement.Data.Infrastructure
{
    public class DbFactory : Disposable, IDbFactory
    {
        private CarManagementDbContext dbContext;

        public CarManagementDbContext Init()
        {
            return dbContext ?? (dbContext = new CarManagementDbContext());
        }

        protected override void DisposeCore()
        {
            if (dbContext != null)
                dbContext.Dispose();
        }
    }
}
