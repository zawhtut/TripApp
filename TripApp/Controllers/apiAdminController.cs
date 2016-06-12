using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using TripApp.Models;

namespace TripApp.Controllers
{
    //[Authorize(Roles = "Admin")]
    public class apiAdminController: ApiController
    {
        private VacationViewModel _model;
        public IHttpActionResult Get()
        {
            return Ok(_model);
        }

    }
}