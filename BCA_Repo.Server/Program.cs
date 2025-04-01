
using BCA_Repo.Server.BusinessLayer;
using BCA_Repo.Server.SqlOperations;

namespace BCA_Repo.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();


            //Dependency Injection 
            builder.Services.AddScoped<SqlClass>();
            builder.Services.AddScoped<BLUsers>();
            builder.Services.AddScoped<BLResources>();
            builder.Services.AddScoped<BLContact>();


            builder.Services.AddSwaggerGen();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigins",
                    policy =>
                    {
                        policy.WithOrigins("*") // Replace with your frontend URL
                              .AllowAnyMethod()
                              .AllowAnyHeader();
                    });
            });




            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseCors("AllowSpecificOrigins");
            app.UseStaticFiles();
            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();
            
            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }   
    }
}
