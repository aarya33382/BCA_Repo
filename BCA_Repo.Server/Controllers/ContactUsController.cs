using BCA_Repo.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BCA_Repo.Server.BusinessLayer;
using Microsoft.AspNetCore.Authorization;

namespace BCA_Repo.Server.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class ContactUsController : ControllerBase
    {
        private readonly BLContact bl;
        public ContactUsController(BLContact DI)
        {
            bl = DI;
        }

        [HttpGet]
        [Route("GetAllContactUsDetails")]
        public IActionResult GetAllEmployee()
        {
            List<ContactUs> contactUs = bl.GetAllContactUsDetails();
            return Ok(contactUs);

        }


        [Authorize]
        [HttpPost]
        [Route("AddContact")]
        public IActionResult AddContactUs([FromBody] ContactUs contactUs)
        {
            if (contactUs == null)
            {
                return BadRequest("Contact data is required.");
            }

            bool isAdded = bl.AddContactUs(contactUs);
            if (isAdded)
            {
                return Ok("Message added successfully!");
            }
            else
            {
                return BadRequest("Some error occurred");
            }
        }

        [HttpDelete("DeleteContactUs/{id}")]
        public IActionResult DeleteContactUs(int id)
        {
            bool isDeleted = bl.DeleteContactUs(id);

            if (isDeleted)
                return Ok(new { message = "Query deleted successfully." });
            else
                return NotFound(new { message = "Query not found or deletion failed." });
        }

    }
}