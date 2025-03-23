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

        public List<Resources> GetResources()
        {
            List<Resources> resourceList = new List<Resources>();
            using (SqlDataReader reader = sql.ExecuteReader("GetResources", null))
            {
                while (reader.Read())
                {
                    resourceList.Add(new Resources
                    {
                        ResourceID= reader.GetInt32(0),
                        Title = reader.GetString(1),
                        Description = reader.GetString(2),
                        FilePath = reader.GetString(3),
                        Category = reader.GetString(4),
                        UploadedBy = reader.GetInt32(5),
                        UploadedAt = reader.GetDateTime(6)
                    });
                }
            }
            return resourceList;
        }
        public Resources GetResourceById(int resourceId)
        {
            SqlParameter[] parameters = new SqlParameter[]
            {
        new SqlParameter("@ResourceID", resourceId)
            };

            using (SqlDataReader reader = sql.ExecuteReader("GetResourceById", parameters))
            {
                if (reader.Read())
                {
                    return new Resources
                    {
                        ResourceID = reader.GetInt32(0),
                        Title = reader.GetString(1),
                        Description = reader.GetString(2),
                        FilePath = reader.GetString(5),
                        Category = reader.GetString(3),
                        UploadedBy = reader.GetInt32(4)
                    };
                }
            }
            return null; // If resource not found
        }


    }
}
