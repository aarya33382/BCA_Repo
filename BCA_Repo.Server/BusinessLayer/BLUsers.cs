using BCA_Repo.Server.SqlOperations;
using BCA_Repo.Server.Models;
using Microsoft.Data.SqlClient;

namespace BCA_Repo.Server.BusinessLayer
{
    public class BLUsers
    {
        SqlClass sql;

        public BLUsers(SqlClass DI)
        {
            sql = DI;
        }

        public int InsertUser(Users user)
        {
            string spQuery = "InsertUser";  

            SqlParameter[] parameters = {
                new SqlParameter("@Name", user.Name),
                new SqlParameter("@Email", user.Email),
                new SqlParameter("@PasswordHash", user.PasswordHash),
                new SqlParameter("@RoleId", user.RoleId),
                new SqlParameter("@Gender", user.Gender),
                new SqlParameter("@DateOfBirth", user.DateOfBirth)
            };
          

            int result =sql.ExecuteNonQuery(spQuery, parameters);
            return result ;
        }

        public List<Users> GetUsers()
        {
            string spQuery = "GetUsers"; // your stored procedure name
            List<Users> users = new List<Users>();

            using (SqlDataReader reader = sql.ExecuteReader(spQuery, null))
            {
                while (reader.Read())
                {
                    Users u = new Users
                    {
                        UserID = Convert.ToInt32(reader["UserID"]),
                        Name = reader["Name"].ToString(),
                        Email = reader["Email"].ToString(),
                        PasswordHash = reader["PasswordHash"].ToString(),
                        RoleId = Convert.ToInt32(reader["RoleId"]),
                        Gender = Convert.ToInt32(reader["Gender"]),
                        DateOfBirth = Convert.ToDateTime(reader["DateOfBirth"]),
                        CreatedAt = Convert.ToDateTime(reader["CreatedAt"])
                    };

                    users.Add(u);
                }
            }

            return users;
        }

        public bool DeleteUserById(int userId)
        {
            string spQuery = "DeleteUserById"; // Name of your stored procedure

            SqlParameter[] parameters = {
        new SqlParameter("@UserID", userId)
    };

            int rowsAffected = sql.ExecuteDeleteUser(spQuery, parameters);
            return rowsAffected > 0;
        }


    }
}
