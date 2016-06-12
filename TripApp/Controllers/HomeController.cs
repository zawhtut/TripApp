﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TripApp.Adapters;
using TripApp.Models;
using Microsoft.AspNet.Identity;
using System.Web.Http;
using System.Net.Http;
using TripApp.Data.Models;
using TripApp.Data;



namespace TripApp.Controllers
{
   public class HomeController: Controller
   {
       public ActionResult Index()
       {
           ViewBag.Title = "Home Page";

           return View();
       }

   }
        
}

