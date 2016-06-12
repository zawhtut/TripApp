using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TripApp.Data.Models;
using TripApp.Models;

namespace TripApp.Adapters
{
    public interface IVacationAdapter
    {
        
       

        VacationViewModel SaveVacation(int VacationId); //save specific vacation

        Vacation CreateVacation(Vacation model, string userId); //create a vacation in under user account when saved

        List<VacationViewModel> GetVacations(string userId); //Only add vacation that belong to the user signed in and place into list

        //void UpdateVacation(VacationViewModel model); //edit vacation
    }

}
