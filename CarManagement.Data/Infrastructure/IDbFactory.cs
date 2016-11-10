using System;

namespace CarManagement.Data.Infrastructure
{
    public interface IDbFactory : IDisposable
    {
        CarManagementDbContext Init();
    }
}