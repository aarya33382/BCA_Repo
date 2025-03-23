using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BCA_Repo.Server.Models
{
    public class Users
    {
        [Key]
        public int UserID { get; set; }  // Primary Key

        [Required]
        [StringLength(100)]
        public string Name { get; set; }  // User's full name

        [Required]
        [EmailAddress]
        [StringLength(255)]
        public string Email { get; set; }  // User's email (unique)

        [Required]
        public string PasswordHash { get; set; }


        public int RoleId { get; set; } = 0;

        [Required]
       
        public int Gender { get; set; }  // 0,1,2

        [Required]
        public DateTime DateOfBirth { get; set; } // User's date of birth

        public DateTime CreatedAt { get; set; } // Default to current time
    }
}
