using backend.Data.Database;
using backend.Data.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookController : Controller
    {
        private readonly BookStoreDbContext _dbcontext;

        public BookController(BookStoreDbContext context)
        {
            _dbcontext = context;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllBooks([FromQuery] string email) 
        {
            var books = await _dbcontext.Books
           .Where(b => b.user == email)
           .ToListAsync();

            return Ok(books);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetSingleBook([FromRoute] Guid id)
        {
            var book = await _dbcontext.Books.FirstOrDefaultAsync(x => x.Id == id);
            if(book == null) 
            {
                return NotFound();
            }
            return Ok(book);
        }

        [HttpPost]
        public async Task<IActionResult> AddBook([FromBody] Book bookdata)
        {
            bookdata.Id = Guid.NewGuid();
            await _dbcontext.Books.AddAsync(bookdata);
            await _dbcontext.SaveChangesAsync();

            return Ok(bookdata);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateBook([FromRoute] Guid id, Book updatedbook)
        {
            var book = await _dbcontext.Books.FindAsync(id);

            if(book == null)
            {
                return NotFound();
            }

            book.Title = updatedbook.Title;
            book.Description = updatedbook.Description;
            book.Author = updatedbook.Author;
            book.Rate   = updatedbook.Rate;
            book.DateStarted = updatedbook.DateStarted;
            book.DateRead   = updatedbook.DateRead;


            await _dbcontext.SaveChangesAsync();
            return Ok(book);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteBook([FromRoute] Guid id)
        {
            var book = await _dbcontext.Books.FindAsync(id);
            if(book == null)
            {
                return NotFound();
            }
            _dbcontext.Books.Remove(book);
            await _dbcontext.SaveChangesAsync();

            return Ok();
        }

    }
}
