namespace backend.Data.Model
{
    public class Book
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Author { get; set; }

        public double? Rate { get; set; }

        public DateTime? DateStarted  { get; set; }

        public DateTime? DateRead { get; set; }

        public string user { get; set; }
    }
}
