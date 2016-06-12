using System.Web;
using System.Web.Optimization;

namespace TripApp
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap-theme-united.css",
                      "~/Content/autocomplete.css",
                      "~/Content/site.css"));
            //here we add the script bundle below for all of our angular javascript files
            //that contain the controllers and the services
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
            "~/Scripts/angular.js",
            "~/Scripts/angular-route.js",
            "~/Scripts/googlePlaces.js",
            "~/Scripts/autocomplete.js",
            "~/Scripts/ui-bootstrap-tpls-0.12.1.js",
            "~/app/app.js",
            "~/app/services/AuthService.js",
            "~/app/services/LoginService.js",
            "~/app/services/RegistrationService.js",
            "~/app/services/VacationService.js",
            "~/app/services/WeatherService.js",
            "~/app/services/GoogleMapsService.js",
            "~/app/services/GooglePlacesService.js",
            "~/app/services/SearchService.js",
            "~/app/controllers/MenuController.js",
            "~/app/controllers/LoginController.js",
            "~/app/controllers/HomePageController.js",
            "~/app/controllers/RegistrationController.js",
            "~/app/controllers/FriendsController.js",
            "~/app/controllers/UsersController.js",
            "~/app/controllers/WeatherController.js",
            "~/app/controllers/GoogleMapsController.js",
            "~/app/controllers/GooglePlacesController.js",
            "~/app/controllers/VacationsController.js",
            "~/app/controllers/ContactUsController.js"
                ));

        }
    }
}
