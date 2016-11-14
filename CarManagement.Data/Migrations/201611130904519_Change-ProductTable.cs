namespace CarManagement.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeProductTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "OriginalPrice", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AddColumn("dbo.Products", "Quantity", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Products", "Quantity");
            DropColumn("dbo.Products", "OriginalPrice");
        }
    }
}
