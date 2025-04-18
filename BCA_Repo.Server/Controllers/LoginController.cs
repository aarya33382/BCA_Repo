using Microsoft.AspNetCore.Mvc;
using BCA_Repo.Server.Models;
using BCA_Repo.Server.BusinessLayer;

namespace BCA_Repo.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly BLLogin _bl;

        public LoginController(BLLogin DI)
        {
            _bl = DI;
        }


        [HttpPost]
        public IActionResult CLogin([FromBody] Login loginDetails)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid login data");

            var userWithToken = _bl.CheckLogin(loginDetails);

            if (userWithToken == null)
                return Unauthorized("Invalid email or password");

            return Ok(userWithToken);  // This now includes the JWT token
        }
    }
}
