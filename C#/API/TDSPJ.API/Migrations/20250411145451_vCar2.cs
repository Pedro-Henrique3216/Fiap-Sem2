using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TDSPJ.API.Migrations
{
    /// <inheritdoc />
    public partial class vCar2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "CustomerId",
                table: "Car",
                type: "RAW(16)",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<DateTime>(
                name: "DataCreated",
                table: "Car",
                type: "TIMESTAMP(7)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DateUpdated",
                table: "Car",
                type: "TIMESTAMP(7)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "UserCreated",
                table: "Car",
                type: "NVARCHAR2(2000)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "UserUpdated",
                table: "Car",
                type: "NVARCHAR2(2000)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Car_CustomerId",
                table: "Car",
                column: "CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Car_Customer_CustomerId",
                table: "Car",
                column: "CustomerId",
                principalTable: "Customer",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Car_Customer_CustomerId",
                table: "Car");

            migrationBuilder.DropIndex(
                name: "IX_Car_CustomerId",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "CustomerId",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "DataCreated",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "DateUpdated",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "UserCreated",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "UserUpdated",
                table: "Car");
        }
    }
}
