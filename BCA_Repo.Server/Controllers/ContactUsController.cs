using BCA_Repo.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BCA_Repo.Server.BusinessLayer;

namespace BCA_Repo.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactUsController : ControllerBase
    {
        BLContact BL = new BLContact();
        [HttpGet]
        [Route("GetAllContactUsDetails")]
        public IActionResult GetAllEmployee()
        {
            List<ContactUs> contactUs = BL.GetAllContactUsDetails();
            return Ok(contactUs);

        }
        [HttpPost]
        [Route("AddContact")]
        public IActionResult AddContactUs([FromBody] ContactUs contactUs)
        {
            if (contactUs == null)
            {
                return BadRequest("Contact data is required.");
            }

            bool isAdded = BL.AddContactUs(contactUs);
            if (isAdded)
            {
                return Ok("Employee added successfully!");
            }
            else
            {
                return BadRequest("Some error occurred");
            }
        }
    }
}


