using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProductOrderService.Database
{
    public class Order
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OrderID { get; set; }

       
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }

        [ForeignKey("UserID")]
        public int UserID { get; set; }
        public User User { get; set; }
    }

    public class OrderDetail
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OrderDetailId { get; set; }
        public int OrderID { get; set; }
      
        public int Quantity { get; set; }

        public virtual Order Order { get; set; }

        [ForeignKey("ProductID")]
        public int ProductID { get; set; }
        public virtual Product Product { get; set; }
    }

}
