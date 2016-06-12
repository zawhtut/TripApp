using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TripApp.Models;

namespace TripApp.Adapters
{
    public class VacationMockAdapter : IVacationAdapter
    {

        public List<VacationViewModel> GetVacations(string userId)
        {
            List<VacationViewModel> models = new List<VacationViewModel>();

            //put in mock data to see if comes through into database
            models.Add(new VacationViewModel 
            {
                DestinationName = "New York City",
                DateStarted = DateTime.UtcNow,
                DateCompleted = DateTime.UtcNow
            });

            models.Add(new VacationViewModel {
                DestinationName = "Nevada",
                DateStarted = DateTime.UtcNow,
                DateCompleted = DateTime.UtcNow
            });

            return models;
        }

        public void CreateVacation(VacationViewModel model, string userId)
        {
            throw new NotImplementedException();
        }

        public VacationViewModel GetVacation(int VacationId)
        {
            throw new NotImplementedException();
        }

        public void UpdateVacation(VacationViewModel model)
        {
            throw new NotImplementedException();
        }

    }

}
    
