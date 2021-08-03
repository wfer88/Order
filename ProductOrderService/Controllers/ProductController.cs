using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductOrderService.Database;

namespace ProductOrderService.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        DatabaseContext _dbContext;
        ILogger<ProductController> _logger;
        public ProductController(DatabaseContext dbContext, ILogger<ProductController> logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<Product> products = new List<Product>();
            products= await _dbContext.Product.ToListAsync();

            return products == null || products.Count()==0 ? NotFound("There are no products available") : Ok(products);
        }

        
    }
}
