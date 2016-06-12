using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TripApp.Models
{
    public class FriendListViewModel
    {
        public string UserName { get; set; }
        public List<FriendViewModel> Friends { get; set; }

    }

    public class FriendViewModel
    {
         
        public int FriendshipId { get; set; }
        public int UserId { get; set; }
        public int FriendUserId { get; set; }
        public string NickName { get; set; }
    }
}