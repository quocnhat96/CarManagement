﻿using CarManagement.Data.Infrastructure;
using CarManagement.Model.Models;
using System.Collections;
using System.Collections.Generic;
using System;
using System.Linq;

namespace CarManagement.Data.Repository
{
    public interface IPostRepository : IRepository<Post>
    {
        IEnumerable<Post> GetAllByTag(string tag, int pageIndex, int pageSize, out int totalRow);
    }

    public class PostRepository : RepositoryBase<Post>, IPostRepository
    {
        public PostRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }

        public IEnumerable<Post> GetAllByTag(string tag, int pageIndex, int pageSize, out int totalRow)
        {
            var query = from p in DbContext.Posts
                        join pot in DbContext.PostTags
                        on p.ID equals pot.PostID
                        where pot.TagID == tag && p.Status
                        orderby p.CreatedBy descending
                        select p;
            totalRow = query.Count();
            query = query.Skip((pageIndex - 1) * pageSize).Take(pageSize);

            return query;
        }
    }
}