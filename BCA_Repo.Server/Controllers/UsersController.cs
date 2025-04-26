using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using  BCA_Repo.Server.Models;
using BCA_Repo.Server.BusinessLayer;
using Microsoft.Identity.Client;
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
           
            int result =_bl.InsertUser(user);
            if (result == -1)
            {
                return Conflict(new { message = "Email already exists. Please log in." });
            }
            else if (result > 0)
            {
                return Ok(new { message = "Registration successful!" ,UserId=result});
            }
            else
            {
                return BadRequest(new { message = "Registration failed." });
            }
        }


        [HttpGet]
        public IActionResult CGetUsers()
        {
            var users = _bl.GetUsers();

            if (users == null || users.Count == 0)
                return NotFound(new { message = "No users found." });

            return Ok(users);
        }

        [HttpDelete("{id}")]
        public IActionResult CDeleteUserById([FromRoute]int id)
        {
            bool result = _bl.DeleteUserById(id);

            if (result)
                return Ok(new { message = "User deleted successfully." });
            else
                return NotFound(new { message = "User not found or deletion failed." });
        }



    }
}
