namespace TripApp.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Fourth : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Vacations", "DateStarted", c => c.DateTime());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Vacations", "DateStarted", c => c.DateTime(nullable: false));
        }
    }
}
