using BCA_Repo.Server.Models;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Data.SqlClient;
namespace BCA_Repo.Server.BusinessLayer
{
    public class BLLogin
    {
        private readonly string _connectionString;

        public BLLogin(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("BCA_repo_conn");
        }

        public Users CheckLogin(Login loginDetails)
        {
            Users user = null;

            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand("sp_Login", conn)
                {
                    CommandType = CommandType.StoredProcedure
                };

                cmd.Parameters.AddWithValue("@Email", loginDetails.Email);
                cmd.Parameters.AddWithValue("@Password", loginDetails.Password); 

               
                conn.Open();

                SqlDataReader reader = cmd.ExecuteReader();

                if (reader.Read())  
                {
                    user = new Users
                    {
                        UserID = Convert.ToInt32(reader["UserID"]),
                        Name = reader["Name"].ToString(),
                        Email = reader["Email"].ToString(),
                        Gender = Convert.ToInt32(reader["Gender"]),
                        DateOfBirth = Convert.ToDateTime(reader["DateOfBirth"]),
                        CreatedAt = Convert.ToDateTime(reader["CreatedAt"]),
                        RoleId = Convert.ToInt32(reader["RoleId"]) 
                    };
                }

                reader.Close();
            }

            return user; 
        }
    }
}
