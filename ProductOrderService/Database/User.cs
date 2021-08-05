using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ProductOrderService.Database
{
    public class User
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }

        
        public  ICollection<UserAddress> UserAddresses { get; set; }
    }

    public class UserAddress
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserAddressId { get; set; }
        public int UserId { get; set; }
        public AddressType AddressType { get; set; }
        public string StreetAddress { get; set; }
        public string Suburb { get; set; }
        public string City { get; set; }
        public int PostalCode { get; set; }


        [JsonIgnore]
        public  User User { get; set; }
    }
    public enum AddressType
    {
        Residential,
        Business
    }
}
