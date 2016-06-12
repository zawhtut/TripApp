using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TripApp.Models
{
    public class VacationListViewModel
    {
        public string UserName { get; set; }
        public List<VacationViewModel> Vacations { get; set; }
    }

    public class VacationViewModel
    {
        [Required]
        public int VacationId { get; set; }

        [Required]
        public string DestinationName { get; set; }
        public DateTime? DateStarted { get; set; }
        public DateTime? DateCompleted { get; set; }

    }
}