using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TripApp.Data.Models;

namespace TripApp.Data
{

        public class TripDbContext : IdentityDbContext<User>
        {
            public TripDbContext()
                : base("DefaultConnection", throwIfV1Schema: false)
            {
            }

            public DbSet<Vacation> Vacations { get; set; }
            //public DbSet<Friend> Friends { get; set; }
            

            public static TripDbContext Create()
            {
                return new TripDbContext();
            }
        }
}
