using System.ComponentModel.DataAnnotations;

namespace BCA_Repo.Server.Models
{
    public class ContactUs
    {
        [Key]
        public int ContactID { get; set; }
      
        public int UserID { get; set; }  


        [Required]
        [StringLength(100)]
        public string Name { get; set; }  // User's full name

        [Required]
        [EmailAddress]
        [StringLength(255)]
        public string Email { get; set; }  // User's email (unique)

        [Required]
        public string Reason { get; set; }



        [Required]
        public string Subject { get; set; }
        [Required]
        public string Description { get; set; }


    }
}