using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ProductOrderService.Database
{
    public class Order
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OrderID { get; set; }

       
        public  ICollection<OrderDetail> OrderDetails { get; set; }

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

        [JsonIgnore]
        public  Order Order { get; set; }

        [ForeignKey("ProductID")]
        public int ProductID { get; set; }

        [JsonIgnore]
        public  Product Product { get; set; }
    }

}
