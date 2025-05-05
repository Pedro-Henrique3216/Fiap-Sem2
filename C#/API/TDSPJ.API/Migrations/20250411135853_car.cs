using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TDSPJ.API.Migrations
{
    /// <inheritdoc />
    public partial class car : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Car",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "RAW(16)", nullable: false),
                    Plate = table.Column<string>(type: "NVARCHAR2(20)", maxLength: 20, nullable: false),
                    Color = table.Column<string>(type: "NVARCHAR2(20)", maxLength: 20, nullable: false),
                    Motorization = table.Column<string>(type: "NVARCHAR2(20)", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Car", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Car");
        }
    }
}
