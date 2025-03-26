
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Data;
namespace BCA_Repo.Server.SqlOperations
{
    public class SqlClass
    {
        private readonly string con_string;
        public string conn = string.Empty;
        public SqlClass()
        {
            var connString = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("ConnectionStrings")["BCA_repo_conn"];
            conn = Convert.ToString(connString);
        }
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
        public DataTable GetContactUsDataTable(string procedureName, CommandType commandType, params SqlParameter[] parameters)
        {
            using (SqlConnection sqlConn = new SqlConnection(conn))
            {
                using (SqlCommand cmd = new SqlCommand(procedureName, sqlConn))
                {
                    cmd.CommandType = commandType;

                    if (parameters != null)
                    {
                        cmd.Parameters.AddRange(parameters);
                    }

                    sqlConn.Open();
                    using (SqlDataAdapter da = new SqlDataAdapter(cmd))
                    {
                        DataTable tblData = new DataTable();
                        da.Fill(tblData);
                        return tblData;
                    }
                }
            }
        }
        public int ExecuteOnlyQuery(string procedureName, CommandType commandType, params SqlParameter[] parameters)
        {
            using (SqlConnection sqlConn = new SqlConnection(conn))
            {
                using (SqlCommand sqlcommend = new SqlCommand(procedureName, sqlConn))
                {
                    sqlcommend.CommandType = CommandType.StoredProcedure;


                    if (parameters != null)
                    {
                        sqlcommend.Parameters.AddRange(parameters);
                    }

                    sqlConn.Open();
                    int count = sqlcommend.ExecuteNonQuery();
                    return count;
                }
            }
        }

    }
}

