using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ProductOrderService.Database;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductOrderService.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        DatabaseContext _dbContext;
        ILogger<OrderController> _logger;
        public OrderController(DatabaseContext dbContext, ILogger<OrderController> logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get(int userId)
        {
            List<Order> orders = new List<Order>();
            orders = await _dbContext.Order.Where(x=>x.UserID==userId).ToListAsync();

            return orders == null || orders.Count() == 0 ? NotFound("There are no orders available") : Ok(orders);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Order order)
        {
            if (order == null)
            {
                return BadRequest();
            }
            await _dbContext.Order.AddAsync(order);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(Post), new { id = order.OrderID }, order);
        }

    }
}
