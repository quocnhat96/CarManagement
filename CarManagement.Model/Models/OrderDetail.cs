using CarManagement.Model.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CarManagement.Model.Models
{
    [Table("OrderDetails")]
    public class OrderDetail
    {
        [Key]
        [Column(Order=1)]
        public int OrderID { set; get; }

        [Key]
        [Column(Order = 2)]
        public int ProductID { set; get; }

        public int Quantitty { set; get; }

        [ForeignKey("OrderID")]
        public virtual Order Order { set; get; }

        [ForeignKey("ProductID")]
        public virtual Product Products { set; get; }
    }
}