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

            
            Users user = _bl.CheckLogin(loginDetails);

            if (user == null)
                return Unauthorized("Invalid email or password");

            // Return user details if login is successful (You can later replace this with a JWT token)
            return Ok(new
            {
                UserId = user.UserID,
                Name = user.Name,
                Email = user.Email,
                Gender = user.Gender,
                DateOfBirth = user.DateOfBirth,
                CreatedAt = user.CreatedAt,
                RoleId = user.RoleId
            });
        }
    }
}
