using BCA_Repo.Server.Models;
using BCA_Repo.Server.SqlOperations;
using System.Data;

namespace BCA_Repo.Server.BusinessLayer
{
    public class blResourceIssue
    {
        private readonly SqlClass _sql;

        public blResourceIssue(SqlClass sql)
        {
            _sql = sql;
        }

        public bool RaiseIssue(ResourceIssue issue)
        {
            return _sql.InsertResourceIssue(issue);
        }
        public List<ResourceIssue> GetAllIssues()
        {
            return _sql.GetAllResourceIssues();
        }


    }

}
