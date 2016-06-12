using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity.Migrations;
using TripApp.Data.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity;


namespace TripApp.Data
{
    public static class Seeder
    {


        public static void Seed(TripDbContext db)
        {

            UserStore<User> userStore = new UserStore<User>(db);
            UserManager<User> userManager = new UserManager<User>(userStore);

            RoleStore<Role> roleStore = new RoleStore<Role>(db);
            RoleManager<Role> roleManager = new RoleManager<Role>(roleStore);

            if (!roleManager.RoleExists("Admin"))
            {
                roleManager.Create(new Role { Name = "Admin" });
            }

            if (!roleManager.RoleExists("General"))
            {
                roleManager.Create(new Role { Name = "General" });
            }

            string vanessasEmail = "vanessa@codercamps.com";
            User vanessa = userManager.FindByEmail(vanessasEmail);

            if (vanessa == null)
            {
                vanessa = new User
                {
                    UserName = vanessasEmail,
                    Email = vanessasEmail
                };

                userManager.Create(vanessa, "123456");
                vanessa = userManager.FindByEmail(vanessasEmail);

                userManager.AddToRole(vanessa.Id, "Admin");
            }
            else
            {
                if (!userManager.IsInRole(vanessa.Id, "Admin"))
                {
                    userManager.AddToRole(vanessa.Id, "Admin");
                }
            }

            string arunsEmail = "arun@codercamps.com";
            User arun = userManager.FindByEmail(arunsEmail);

            if (arun == null)
            {
                arun = new User
                {
                    UserName = arunsEmail,
                    Email = arunsEmail
                };

                userManager.Create(arun, "123456");
                arun = userManager.FindByEmail(arunsEmail);
                userManager.AddToRole(arun.Id, "General");
            }
            else
            {
                if (!userManager.IsInRole(arun.Id, "General"))
                {
                    userManager.AddToRole(arun.Id, "General");
                }
            }



          db.Vacations.AddOrUpdate(v => v.DestinationName,
               new Vacation
               {
                   DestinationName = "New York City",
                   DateStarted = DateTime.UtcNow,
                   DateCompleted = DateTime.UtcNow,
                   UserId = vanessa.Id

               },
            new Vacation
               {
                   DestinationName = "Chicago",
                   DateStarted = DateTime.UtcNow,
                   DateCompleted = DateTime.UtcNow,
                   UserId = arun.Id
               },
            new Vacation
               {
                   DestinationName = "San Francisco",
                   DateStarted = DateTime.UtcNow,
                   DateCompleted = DateTime.UtcNow,
                   UserId = arun.Id

               });

        }
    }
}
