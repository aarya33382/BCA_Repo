using BCA_Repo.Server.BusinessLayer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using BCA_Repo.Server.Models;

namespace BCA_Repo.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResourcesController : ControllerBase
    {
        private readonly string _fileStoragePath;
        private readonly BLResources _bl;

        public ResourcesController(IConfiguration configuration, BLResources DI)
        {
            _fileStoragePath = configuration["FileStoragePath"] ?? "wwwroot/uploads";
            _bl = DI;
        }


        [HttpPost("save")]
        public async Task<IActionResult> CUploadFile([FromForm] ResourceUploadDto resource)
        {
            try
            {
                if (resource.File == null || resource.File.Length == 0)
                    return BadRequest(new { message = "⚠️ No file uploaded." });

                // Ensure upload directory exists
                string uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), _fileStoragePath);
                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                // Generate unique filename
                string uniqueFileName = $"{Guid.NewGuid()}_{Path.GetFileName(resource.File.FileName)}";
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                // Save file
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await resource.File.CopyToAsync(stream);
                }

                // File URL (for database storage)
                string fileUrl = $"/uploads/{uniqueFileName}";

                // Log values for debugging
                Console.WriteLine($" File: {resource.File.FileName}");
                Console.WriteLine($" Title: {resource.Title}");
                Console.WriteLine($" Description: {resource.Description}");
                Console.WriteLine($" Category: {resource.Category}");
                Console.WriteLine($" UploadedBy: {resource.UploadedBy}");
                Console.WriteLine($"Saved Path: {filePath}");

                // Insert into database (Pass fileUrl, not the File object)
                int resourceId = _bl.InsertResource(new Resources
                {
                    Title = resource.Title,
                    Description = resource.Description,
                    Category = resource.Category,
                    UploadedBy = resource.UploadedBy,
                    FilePath = fileUrl // ✅ Store file path instead of File object
                });

                return Ok(new
                {
                    resourceId,
                    fileUrl,
                    message = " File uploaded successfully."
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine($" Upload Error: {ex.Message}");
                return StatusCode(500, new { message = " An error occurred.", error = ex.Message });
            }
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
    public class ResourceUploadDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public int UploadedBy { get; set; }
        public IFormFile File { get; set; }
    }
}
