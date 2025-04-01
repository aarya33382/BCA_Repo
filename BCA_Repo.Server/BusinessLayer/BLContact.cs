using BCA_Repo.Server.Models;
using BCA_Repo.Server.SqlOperations;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;

namespace BCA_Repo.Server.BusinessLayer
{
    public class BLContact
    {
        private readonly SqlClass _sqlClass;

        public BLContact(SqlClass sqlClass)
        {
            _sqlClass = sqlClass;
        }

        public bool AddContactUs(ContactUs contactUs)
        {
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@UserId", contactUs.UserID), // Added UserId parameter
                new SqlParameter("@Name", contactUs.Name),
                new SqlParameter("@Email", contactUs.Email),
                new SqlParameter("@Reason", contactUs.Reason),
                new SqlParameter("@Subject", contactUs.Subject),
                new SqlParameter("@Message", contactUs.Description)
            };

            int result = _sqlClass.ExecuteNonQuery("sp_AddContactUs", parameters);

            return result>0;
        }

        public List<ContactUs> GetAllContactUsDetails()
        {
            List<ContactUs> contactList = new List<ContactUs>();
            using (SqlDataReader reader = _sqlClass.ExecuteReader("sp_GetAllContactUs", null))
            {
                while (reader.Read())
                {
                    contactList.Add(new ContactUs
                    {
                        UserID = (int)reader["UserID"], // Retrieve UserId
                        Name = reader["Name"].ToString(),
                        Email = reader["Email"].ToString(),
                        Reason = reader["Reason"].ToString(),
                        Subject = reader["Subject"].ToString(),
                        Description = reader["Description"].ToString()
                    });
                }
            }
            return contactList;
        }
    }
}
