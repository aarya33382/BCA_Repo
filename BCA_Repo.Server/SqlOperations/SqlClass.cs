
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Data;

namespace BCA_Repo.Server.SqlOperations
{
    public class SqlClass
    {
        private readonly string con_string;

        public SqlClass(IConfiguration configuration)
        {
            con_string = configuration.GetConnectionString("BCA_repo_conn");
        }

        public int ExecuteNonQuery(string sp, SqlParameter[] parameters)
        {
            using (SqlConnection con = new SqlConnection(con_string))
            {
                using (SqlCommand cmd = new SqlCommand(sp, con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;

                    if (parameters != null)
                    {
                        cmd.Parameters.AddRange(parameters);
                    }

                    //con.Open();
                    //return (int)cmd.ExecuteScalar();
                    try
                    {
                        con.Open();
                        return (int)cmd.ExecuteScalar();  
                    }
                    catch (SqlException ex)
                    {
                        if (ex.Number == 2627 || ex.Number == 2601) // Unique constraint violation
                        {
                            return -1;  // Return -1 when email already exists
                        }
                        throw;  // Re-throw for other SQL errors
                    }
                }
            }
        }
        public SqlDataReader ExecuteReader(string sp, SqlParameter[] parameters)
        {
            SqlConnection con = new SqlConnection(con_string);
            SqlCommand cmd = new SqlCommand(sp, con)
            {
                CommandType = CommandType.StoredProcedure
            };

            if (parameters != null)
            {
                cmd.Parameters.AddRange(parameters);
            }

            con.Open();
            return cmd.ExecuteReader(CommandBehavior.CloseConnection);
        }

        public int ExecuteDeleteUser(string sp, SqlParameter[] parameters)
        {
            using (SqlConnection con = new SqlConnection(con_string))
            {
                using (SqlCommand cmd = new SqlCommand(sp, con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;

                    if (parameters != null)
                    {
                        cmd.Parameters.AddRange(parameters);
                    }

                    con.Open();
                    return cmd.ExecuteNonQuery(); // returns the number of rows affected
                }
            }
        }
        public bool ExecuteApprovalUpdate(string sp, SqlParameter[] parameters)
        {
            using (SqlConnection con = new SqlConnection(con_string))
            {
                using (SqlCommand cmd = new SqlCommand(sp, con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;

                    if (parameters != null)
                    {
                        cmd.Parameters.AddRange(parameters);
                    }

                    con.Open();
                    int rowsAffected = cmd.ExecuteNonQuery();
                    return rowsAffected > 0;
                }   
            }
        }
        public int ExecuteDeleteResource(string sp, SqlParameter[] parameters)
        {
            int rowsAffected = 0;

            using (SqlConnection con = new SqlConnection(con_string))
            {
                using (SqlCommand cmd = new SqlCommand(sp, con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;

                    if (parameters != null)
                    {
                        cmd.Parameters.AddRange(parameters);
                    }

                    con.Open();
                    rowsAffected = cmd.ExecuteNonQuery();
                }
            }

            return rowsAffected;
        }
        public int ExecuteNormalQuery(string sp, SqlParameter[] parameters)
        {
            using (SqlConnection con = new SqlConnection(con_string))
            {
                using (SqlCommand cmd = new SqlCommand(sp, con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    if (parameters != null)
                    {
                        cmd.Parameters.AddRange(parameters);
                    }
                    con.Open();
                        return cmd.ExecuteNonQuery();
                }
            }
        }




    }
}
