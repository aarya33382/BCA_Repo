using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BCA_Repo.Server.Models
{
    public class Resources
    {
        public IFormFile File { get; set; }
        [Key]
        public int ResourceID { get; set; } 

        [Required]
        [StringLength(255)]
        public string Title { get; set; } 

        [StringLength(1000)]
        public string Description { get; set; } 

        [StringLength(500)]
        public string FilePath { get; set; }  

        [Required]
        [StringLength(100)]
        public string Category { get; set; } 

        //[Required]
        public int UploadedBy { get; set; }  

        public bool IsApproved { get; set; }  

        public DateTime UploadedAt { get; set; }

        
    }
}
