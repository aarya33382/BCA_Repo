using BCA_Repo.Server.BusinessLayer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using BCA_Repo.Server.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

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




                int resourceId = _bl.InsertResource(new Resources
                {
                    Title = resource.Title,
                    Description = resource.Description,
                    Category = resource.Category,
                    UploadedBy = resource.UploadedBy,
                    FilePath = fileUrl
                });

                return Ok(new
                {
                    resource.Title,
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
        [HttpGet("getResources")]
        public IActionResult GetResources()
        {
            try
            {
                var resources = _bl.GetResources();
                return Ok(resources);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred.", error = ex.Message });
            }
        }
        [HttpGet("download/{resourceId}")]
        public IActionResult DownloadFile(int resourceId)
        {
            var resource = _bl.GetResourceById(resourceId);
            if (resource == null)
            {
                return NotFound(new { message = "File not found." });
            }

            // Ensure the file path is absolute
            string rootFolder = Directory.GetCurrentDirectory();
            string filePath = @"C:\Users\aarya\source\repos\BCA_Repo\BCA_Repo.Server\wwwroot" + resource.FilePath;


            if (!System.IO.File.Exists(filePath))
            {
                return NotFound(new { message = "File not found on the server." });
            }

            string contentType = GetContentType(filePath);
            return PhysicalFile(filePath, contentType, Path.GetFileName(filePath)); // Return only the file name
        }

        // Helper method to get MIME type
        private string GetContentType(string filePath)
        {
            var provider = new Microsoft.AspNetCore.StaticFiles.FileExtensionContentTypeProvider();
            if (!provider.TryGetContentType(filePath, out string contentType))
            {
                contentType = "application/octet-stream"; // Default if unknown
            }
            return contentType;
        }



        //[HttpGet("files")]
        //public IActionResult GetUploadedFiles()
        //{
        //    string uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");

        //    if (!Directory.Exists(uploadsFolder))
        //    {
        //        return NotFound("Upload directory does not exist.");
        //    }

        //    var files = Directory.GetFiles(uploadsFolder)
        //                         .Select(file => new
        //                         {
        //                             FileName = Path.GetFileName(file),
        //                             FileUrl = $"/uploads/{Path.GetFileName(file)}"
        //                         })
        //                         .ToList();

        //    return Ok(files);
        //}

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


