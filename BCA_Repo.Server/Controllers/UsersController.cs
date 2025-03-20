using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using  BCA_Repo.Server.Models;
using BCA_Repo.Server.BusinessLayer;
namespace BCA_Repo.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        BLUsers _bl;
        public UsersController(BLUsers DI)
        {
            _bl = DI;
        }
        [HttpPost]
        public IActionResult CInsertUsers([FromBody] Users user )
        {
           
            return Ok(_bl.InsertUser(user));
        }
    }
}
