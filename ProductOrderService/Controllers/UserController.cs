using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ProductOrderService.Database;
using System.Threading.Tasks;


namespace ProductOrderService.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        DatabaseContext _dbContext;
        ILogger<UserController> _logger;
        public UserController(DatabaseContext dbContext, ILogger<UserController> logger)
        {
            _dbContext = dbContext;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get(int userId)
        {
            var user = await _dbContext.User
                    .SingleOrDefaultAsync(x => x.UserId == userId);

            return user == null ? NotFound(userId + " Not present in database") : Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> Post(User user)
        {
            if (user == null)
            {
                return BadRequest();
            }
            await _dbContext.User.AddAsync(user);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = user.UserId }, user);
        }
    }
}
