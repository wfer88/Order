﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductOrderService.Database
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }
        public DbSet<User> User { get; set; }
        public DbSet<UserAddress> UserAddress { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<Order> Order { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserAddress>()
                .HasOne<User>(s => s.User)
                .WithMany(g => g.UserAddresses)
                .HasForeignKey(s => s.UserId);

            modelBuilder.Entity<OrderDetail>()
                .HasOne<Order>(s => s.Order)
                .WithMany(g => g.OrderDetails)
                .HasForeignKey(s => s.OrderID);



            modelBuilder.Entity<Product>()
                       .HasData(
                        new Product { ProductID = 1, Title = "Mobile", Description = "Mobile", Price = 10000, ImagePath = "\\Images\\Mobile.png" },
                        new Product { ProductID = 2, Title = "Fan", Description = "Fan", Price = 1000, ImagePath = "\\Images\\Fan.png" },
                        new Product { ProductID = 3, Title = "Watch", Description = "Watch", Price = 3000, ImagePath = "\\Images\\Watch.png" },
                        new Product { ProductID = 4, Title = "Table", Description = "Table", Price = 1200, ImagePath = "\\Images\\Table.png" },
                        new Product { ProductID = 5, Title = "Laptop", Description = "Laptop", Price = 20000, ImagePath = "\\Images\\Laptop.png" },
                        new Product { ProductID = 6, Title = "Bag", Description = "Bag", Price = 1700, ImagePath = "\\Images\\Bag.png" },
                        new Product { ProductID = 7, Title = "Wallet", Description = "Wallet", Price = 600, ImagePath = "\\Images\\Wallet.png" },
                        new Product { ProductID = 8, Title = "Belt", Description = "Belt", Price = 700, ImagePath = "\\Images\\Belt.png" },
                        new Product { ProductID = 9, Title = "Chair", Description = "Chair", Price = 1100, ImagePath = "\\Images\\Chair.png" },
                        new Product { ProductID = 10, Title = "Bottle", Description = "Bottle", Price = 300, ImagePath = "\\Images\\Bottle.png" }
                        );
            base.OnModelCreating(modelBuilder);
        }
    }
}
