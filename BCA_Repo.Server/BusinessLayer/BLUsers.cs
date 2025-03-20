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
                new SqlParameter("@Role", user.Role),
                new SqlParameter("@Gender", user.Gender),
                new SqlParameter("@DateOfBirth", user.DateOfBirth)
            };
          

            return sql.ExecuteNonQuery(spQuery, parameters);
        }
    }
}
