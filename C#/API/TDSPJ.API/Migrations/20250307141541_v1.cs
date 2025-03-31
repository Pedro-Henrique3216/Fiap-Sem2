using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TDSPJ.API.Migrations
{
    /// <inheritdoc />
    public partial class v1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Document",
                table: "Customer",
                type: "NVARCHAR2(20)",
                maxLength: 20,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "NVARCHAR2(2000)");

            migrationBuilder.AddColumn<DateTime>(
                name: "DataCreated",
                table: "Customer",
                type: "TIMESTAMP(7)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DateUpdated",
                table: "Customer",
                type: "TIMESTAMP(7)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "Customer",
                type: "NUMBER(10)",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "UserCreated",
                table: "Customer",
                type: "NVARCHAR2(20)",
                maxLength: 20,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "UserUpdated",
                table: "Customer",
                type: "NVARCHAR2(2000)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DataCreated",
                table: "Customer");

            migrationBuilder.DropColumn(
                name: "DateUpdated",
                table: "Customer");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Customer");

            migrationBuilder.DropColumn(
                name: "UserCreated",
                table: "Customer");

            migrationBuilder.DropColumn(
                name: "UserUpdated",
                table: "Customer");

            migrationBuilder.AlterColumn<string>(
                name: "Document",
                table: "Customer",
                type: "NVARCHAR2(2000)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "NVARCHAR2(20)",
                oldMaxLength: 20);
        }
    }
}
