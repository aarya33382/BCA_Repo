using BCA_Repo.Server.Models;
using BCA_Repo.Server.SqlOperations;
using Microsoft.Data.SqlClient;
using System.Data;
using BCA_Repo.Server.Controllers;
namespace BCA_Repo.Server.BusinessLayer

{
    public class BLContact
    {
        SqlClass db = new SqlClass();
        string sqlQuery = string.Empty;

        public bool AddContactUs(ContactUs contactUs)
        {
            string procedureName = "sp_ContactUs_CRUD";


            SqlParameter[] parameters = new SqlParameter[]
             {
                new SqlParameter("@Action", "INSERT"),
                new SqlParameter("@UserId", contactUs.UserID),
                new SqlParameter("@Name", contactUs.Name),
                new SqlParameter("@Email", contactUs.Email),
                new SqlParameter("@Reason", contactUs.Reason),
                new SqlParameter("@Subject", contactUs.Subject),
                new SqlParameter("@Discription", contactUs.Discription),

            };

            int result = db.ExecuteOnlyQuery(procedureName, CommandType.StoredProcedure, parameters);

            return result > 0;

        }
        public List<ContactUs> GetAllContactUsDetails()
        {
            string procedureName = "sp_ContactUs_CRUD";

            SqlParameter[] parameters = new SqlParameter[]
            {
                    new SqlParameter("@Action", "SELECT") // Ensure this is passed
            };

            DataTable dt = db.GetContactUsDataTable(procedureName, CommandType.StoredProcedure, parameters);

            List<ContactUs> employeesList = new List<ContactUs>();

            foreach (DataRow dr in dt.Rows)
            {
                ContactUs employee = new ContactUs
                {
                    ContactID = Convert.ToInt32(dr["ContactID"]),
                    UserID = Convert.ToInt32(dr["UserID"]),
                    Name = dr["Name"].ToString(),
                    Email = dr["Email"].ToString(),
                    Reason = dr["Reason"].ToString(),
                    Subject = dr["Subject"].ToString(),
                    Discription = dr["Discription"].ToString(),

                };
                employeesList.Add(employee);
            }

            return employeesList;
        }

    }
}
