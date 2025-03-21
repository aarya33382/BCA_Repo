using BCA_Repo.Server.Models;
using BCA_Repo.Server.SqlOperations;
using Microsoft.Data.SqlClient;

namespace BCA_Repo.Server.BusinessLayer
{
    public class BLResources
    {
        SqlClass sql;
        public BLResources(SqlClass DI)
        {
            sql = DI;
        }
        public int InsertResource(Resources resource)
        {
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@Title",resource.Title),
                new SqlParameter("@Description",resource.Description),
                new SqlParameter("@FilePath",resource.FilePath),
                new SqlParameter("@Category",resource.Category),
                new SqlParameter("@UploadedBy",resource.UploadedBy)
            };

            return sql.ExecuteNonQuery("InsertResource", parameters);

        }
    }
}
