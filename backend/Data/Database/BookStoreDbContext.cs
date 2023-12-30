using backend.Data.Model;
using Microsoft.EntityFrameworkCore;

namespace backend.Data.Database
{
    public class BookStoreDbContext: DbContext
    {
        public BookStoreDbContext(DbContextOptions options):base(options) 
        {
            
        }   

        public DbSet<Book> Books { get; set; }
    }
}
