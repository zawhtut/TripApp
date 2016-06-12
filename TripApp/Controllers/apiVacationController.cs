using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using TripApp.Adapters;
using Microsoft.AspNet.Identity;
using TripApp.Models;
using System.Web.Mvc;
using TripApp.Data.Models;

namespace TripApp.Controllers
{
    // [Authorize]
    public class apiVacationController : ApiController
    {
        private IVacationAdapter _adapter; //here I want the data adapter so I can use the home controller to get the data from the database repository

        public apiVacationController()
        {
            _adapter = new VacationDataAdapter();
        }

        public apiVacationController(IVacationAdapter adapter){
            _adapter = adapter;
          
        }

         public IHttpActionResult Get()
        {
            string userId = User.Identity.GetUserId();
            
            List<VacationViewModel> models =  _adapter.GetVacations(userId);
            return Ok(models);
        }

         public IHttpActionResult Post(Vacation model)
        {
            string userId = User.Identity.GetUserId();
            Vacation vacation = _adapter.CreateVacation(model, userId);
            return Ok(vacation);
        }

       //we have to put an update funciton here
        
       //put a delete function here
        public IHttpActionResult Delete()
        {
           
            VacationViewModel model = null;
            return Ok(model);
        }

        
        
        //public ActionResult create(VacationViewModel model)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return View(model);
        //    }
        //    string userId = User.Identity.GetUserId();


        //    _adapter.CreateVacation(model, userId);

        //    return RedirectToAction("index");
        //}
    }
}