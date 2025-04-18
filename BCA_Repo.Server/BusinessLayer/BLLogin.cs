using BCA_Repo.Server.Models;
using Microsoft.Data.SqlClient;
using Microsoft.IdentityModel.Tokens;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BCA_Repo.Server.BusinessLayer
{
    public class BLLogin
    {
        private readonly string _connectionString;
        private readonly JwtSettings _jwtSettings;

        public BLLogin(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("BCA_repo_conn");
            _jwtSettings = configuration.GetSection("JwtSettings").Get<JwtSettings>();
        }

        public object CheckLogin(Login loginDetails)
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

            if (user == null)
                return null;

            // Generate JWT token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_jwtSettings.SecretKey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, user.UserID.ToString()),
                    new Claim(ClaimTypes.Name, user.Name),
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(ClaimTypes.Role, user.RoleId.ToString())
                }),
                Expires = DateTime.UtcNow.AddMinutes(_jwtSettings.ExpiresInMinutes),
                Issuer = _jwtSettings.Issuer,
                Audience = _jwtSettings.Audience,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = tokenHandler.WriteToken(token);

            return new
            {
                Token = jwtToken,
                UserId = user.UserID,
                Name = user.Name,
                Email = user.Email,
                Gender = user.Gender,
                DateOfBirth = user.DateOfBirth,
                CreatedAt = user.CreatedAt,
                RoleId = user.RoleId
            };
        }
    }
}
