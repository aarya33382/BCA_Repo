using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Threading.Tasks;



namespace BCA_Repo.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        private readonly string _fileStoragePath;

        public UploadController(IConfiguration configuration)
        {
            _fileStoragePath = configuration["FileStoragePath"] ?? "wwwroot/uploads";
        }

        [HttpPost("save")]
        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest("No file uploaded.");

            string uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), _fileStoragePath);
            if (!Directory.Exists(uploadsFolder))
            {
                Directory.CreateDirectory(uploadsFolder); // Ensure the directory exists
            }

            string uniqueFileName = $"{Guid.NewGuid()}_{file.FileName}"; // Unique filename to avoid conflicts
            string filePath = Path.Combine(uploadsFolder, uniqueFileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            // Return the file path (relative URL) to be stored in the database
            string fileUrl = $"/uploads/{uniqueFileName}";

            return Ok(new { FileUrl = fileUrl });
        }
        [HttpGet("files")]
        public IActionResult GetUploadedFiles()
        {
            string uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");

            if (!Directory.Exists(uploadsFolder))
            {
                return NotFound("Upload directory does not exist.");
            }

            var files = Directory.GetFiles(uploadsFolder)
                                 .Select(file => new
                                 {
                                     FileName = Path.GetFileName(file),
                                     FileUrl = $"/uploads/{Path.GetFileName(file)}"
                                 })
                                 .ToList();

            return Ok(files);
        }

    }
}
