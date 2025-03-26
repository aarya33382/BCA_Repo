using BCA_Repo.Server.SqlOperations;
using BCA_Repo.Server.Models;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;

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

            int result = sql.ExecuteNonQuery(spQuery, parameters);
            return result;
        }

        public List<Users> GetUsers()
        {
            List<Users> usersList = new List<Users>();
            using (SqlDataReader reader = sql.ExecuteReader("GetUsers", null))
            {
                while (reader.Read())
                {
                    usersList.Add(new Users
                    {
                        UserID = reader.GetInt32(0),
                        Name = reader.GetString(1),
                        Email = reader.GetString(2),
                        PasswordHash = reader.GetString(3),
                        RoleId = reader.GetInt32(4),
                        Gender = reader.GetInt32(5),
                        DateOfBirth = reader.GetDateTime(6),
                        CreatedAt = reader.GetDateTime(7)
                    });
                }
            }
            return usersList;
        }

        public int DeleteUser(int userId)
        {
            string spQuery = "DeleteUser";  // Stored Procedure Name

            SqlParameter[] parameters = {
                new SqlParameter("@UserID", userId)
            };

            return sql.ExecuteNonQuery(spQuery, parameters);
        }

        public int UpdateUser(int userId, Users user)
        {
            string spQuery = "UpdateUser";  // Stored Procedure Name

            SqlParameter[] parameters = {
                new SqlParameter("@UserID", userId),
                new SqlParameter("@Name", user.Name),
                new SqlParameter("@Email", user.Email),
                new SqlParameter("@RoleId", user.RoleId),
                new SqlParameter("@Gender", user.Gender),
                new SqlParameter("@DateOfBirth", user.DateOfBirth)
            };

            return sql.ExecuteNonQuery(spQuery, parameters);
        }
    }
}
