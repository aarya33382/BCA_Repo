using BCA_Repo.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BCA_Repo.Server.BusinessLayer;
namespace BCA_Repo.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResourceIssueController : ControllerBase
    {
        private readonly blResourceIssue _bl;

        public ResourceIssueController(blResourceIssue bl)
        {
            _bl = bl;
        }

        [HttpPost("raise")]
        public IActionResult RaiseIssue([FromBody] ResourceIssue issue)
        {
            if (_bl.RaiseIssue(issue))
            {
                return Ok("Issue raised successfully.");
            }
            return BadRequest("Failed to raise issue.");
        }

        [HttpGet("getAll")]
        public IActionResult GetAllIssues()
        {
            try  
            {
                var issues = _bl.GetAllIssues();
                return Ok(issues);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Failed to retrieve issues: {ex.Message}");
            }
        }


    }

}
