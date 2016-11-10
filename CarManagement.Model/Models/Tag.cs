using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarManagement.Model.Models
{
    [Table("Tags")]
    public class Tag
    {
        [Key]
        [Required]
        [MaxLength(50)]
        [Column(TypeName = "varchar")]
        public string ID { get; set; }

        [MaxLength(250)]
        public string Name { get; set; }

        [MaxLength(50)]
        public string Type { get; set; }
    }
}
