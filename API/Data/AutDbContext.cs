﻿using API.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class AutDbContext : IdentityDbContext<User>
    {
        public AutDbContext(DbContextOptions<AutDbContext> options) : base(options)
        {
            
        }
    }
}
