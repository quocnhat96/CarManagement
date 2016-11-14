namespace CarManagement.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeatributePageTable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Pages", "Alias", c => c.String(nullable: false, maxLength: 256, unicode: false));
            AddColumn("dbo.Pages", "CreatedDate", c => c.DateTime());
            AddColumn("dbo.Pages", "CreatedBy", c => c.String(maxLength: 256));
            AddColumn("dbo.Pages", "UpdatedDate", c => c.DateTime());
            AddColumn("dbo.Pages", "UpdatedBy", c => c.String(maxLength: 256));
            AlterColumn("dbo.Pages", "Name", c => c.String(nullable: false, maxLength: 256));
            AlterColumn("dbo.Pages", "MetaKeyword", c => c.String(maxLength: 256));
            AlterColumn("dbo.Pages", "MetaDescription", c => c.String(maxLength: 256));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Pages", "MetaDescription", c => c.String());
            AlterColumn("dbo.Pages", "MetaKeyword", c => c.String());
            AlterColumn("dbo.Pages", "Name", c => c.String());
            DropColumn("dbo.Pages", "UpdatedBy");
            DropColumn("dbo.Pages", "UpdatedDate");
            DropColumn("dbo.Pages", "CreatedBy");
            DropColumn("dbo.Pages", "CreatedDate");
            DropColumn("dbo.Pages", "Alias");
        }
    }
}
