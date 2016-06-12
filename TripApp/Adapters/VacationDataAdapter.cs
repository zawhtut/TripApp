using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TripApp.Data;
using TripApp.Data.Models;
using TripApp.Models;

namespace TripApp.Adapters
{
    public class VacationDataAdapter: IVacationAdapter
    {

        public List<VacationViewModel> GetVacations(string userId)
        {
            List<VacationViewModel> models = null;
            using (TripDbContext db = new TripDbContext())
            {
                models = db.Vacations
                   .Where(m => m.UserId == userId)
                    .Select(m => new VacationViewModel
                    {
                        VacationId = m.VacationId,
                        DestinationName = m.DestinationName,
                        DateStarted = m.DateStarted,
                        DateCompleted = m.DateCompleted
                        
                    })
                .ToList();
            }
            return models;

        }
        public Vacation CreateVacation(Vacation model, string userId)
        {
            using (TripDbContext db = new TripDbContext())
            {
                Vacation dbVacation = new Vacation
                {
                    VacationId = model.VacationId,
                    DestinationName = model.DestinationName,
                    DateStarted = model.DateStarted,
                    DateCompleted = model.DateCompleted,
                    UserId = userId
                };

                db.Vacations.Add(dbVacation);
                db.SaveChanges();
            }
            return model;
        }

    

        public VacationViewModel SaveVacation(int VacationId)
        {
            throw new NotImplementedException();
        }

        //public void UpdateVacation(VacationViewModel model)
        //{
        //    throw new NotImplementedException();
        //}

       
    }
}