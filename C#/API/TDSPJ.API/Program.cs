using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using TDSPJ.API.Domain.Entities;
using TDSPJ.API.Infrastructure.Context;
using TDSPJ.API.Infrastructure.Persistence.Repositories;

namespace TDSPJ.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            //criado uma vez por requisição
            //builder.Services.AddScoped();

            //Criado uma unica vez
            //builder.Services.AddSingleton();

            //criado e destruido
            //builder.Services.AddTransient();

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(swagger =>
            {
                swagger.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = builder.Configuration["Swagger:Title"],
                    Description = builder.Configuration["Swagger:Description"] + DateTime.Now.Year,
                    Contact = new OpenApiContact()
                    {
                        Email = "pedro@Teste",
                        Name = "Pedro Henrique"
                    }
                });
            });

            builder.Services.AddDbContext<TDSPJContext>(options =>
            {
                options.UseOracle(builder.Configuration.GetConnectionString("Oracle"));
            });

            builder.Services.AddScoped<IRepository<Customer>, Repository<Customer>>();


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
