using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BCA_Repo.Server.Models;
using BCA_Repo.Server.BusinessLayer;
using System;

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
        public IActionResult CInsertUsers([FromBody] Users user)
        {
            int result = _bl.InsertUser(user);
            if (result == -1)
            {
                return Conflict(new { message = "Email already exists. Please log in." });
            }
            else if (result > 0)
            {
                return Ok(new { message = "Registration successful!", UserId = result });
            }
            else
            {
                return BadRequest(new { message = "Registration failed." });
            }
        }

        [HttpGet]
        public IActionResult CGetUserDetails()
        {
            try
            {
                var result = _bl.GetUsers();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred.", error = ex.Message });
            }
        }

        // DELETE endpoint to remove a user
        [HttpDelete("{id}")]
        public IActionResult CDeleteUser(int id)
        {
            try
            {
                int result = _bl.DeleteUser(id);
                if (result > 0)
                {
                    return Ok(new { message = "User deleted successfully." });
                }
                else
                {
                    return NotFound(new { message = "User not found." });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred.", error = ex.Message });
            }
        }

        // PUT endpoint to update user details
        [HttpPut("{id}")]
        public IActionResult CUpdateUser(int id, [FromBody] Users user)
        {
            try
            {
                int result = _bl.UpdateUser(id, user);
                if (result > 0)
                {
                    return Ok(new { message = "User updated successfully." });
                }
                else
                {
                    return NotFound(new { message = "User not found or no changes made." });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred.", error = ex.Message });
            }
        }
    }
}
