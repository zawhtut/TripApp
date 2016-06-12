namespace TripApp.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Third : DbMigration
    {
        public override void Up()
        {
           // DropForeignKey("dbo.Friends", "UserId", "dbo.AspNetUsers");
           // DropForeignKey("dbo.Friends", "FriendUserId", "dbo.AspNetUsers");
           // DropIndex("dbo.Friends", new[] { "UserId" });
           // DropIndex("dbo.Friends", new[] { "FriendUserId" });
            DropColumn("dbo.AspNetUsers", "FirstName");
            DropColumn("dbo.AspNetUsers", "LastName");
          //  DropTable("dbo.Friends");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Friends",
                c => new
                    {
                        FriendshipId = c.Int(nullable: false, identity: true),
                        UserId = c.String(maxLength: 128),
                        FriendUserId = c.String(maxLength: 128),
                        NickName = c.String(),
                    })
                .PrimaryKey(t => t.FriendshipId);
            
            AddColumn("dbo.AspNetUsers", "LastName", c => c.String());
            AddColumn("dbo.AspNetUsers", "FirstName", c => c.String());
            CreateIndex("dbo.Friends", "FriendUserId");
            CreateIndex("dbo.Friends", "UserId");
            AddForeignKey("dbo.Friends", "FriendUserId", "dbo.AspNetUsers", "Id");
            AddForeignKey("dbo.Friends", "UserId", "dbo.AspNetUsers", "Id");
        }
    }
}
