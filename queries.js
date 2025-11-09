// Find all books in a specific genre
db.books.find({ genre: "Fantasy" })

// Find books published after a certain year
db.books.find({ published_year: { $gt: 2000 } })

// Find books by a specific author
db.books.find({ author: "George Orwell" })

// Update the price of a specific book
db.books.updateOne({ title: "The Alchemist" }, { $set: { price: 12.99 } })

// Delete a book by its title
db.books.deleteOne({ title: "Moby Dick" })
