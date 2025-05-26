namespace BCA_Repo.Server.Models
{
    public class ResourceIssue
    {
        public int IssueID { get; set; }
        public int ResourceID { get; set; }
        public string Title { get; set; }
        public int UserID { get; set; }
        public string ActionType { get; set; } // "Permanent" or "Temporary"
        public string Message { get; set; }
    }

}
