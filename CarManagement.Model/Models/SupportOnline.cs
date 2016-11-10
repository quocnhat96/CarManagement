using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CarManagement.Model.Models
{
    [Table("SupportOnlines")]
    public class SupportOnline
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }

        [MaxLength(256)]
        public string Name { get; set; }

        [MaxLength(256)]
        public string Description { get; set; }

        [MaxLength(256)]
        public string Skype { get; set; }

        [MaxLength(256)]
        public string Mobile { get; set; }

        [MaxLength(256)]
        public string Facebook { get; set; }

        public bool? Status { get; set; }
    }
}