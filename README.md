# 📚 MongoDB Week 1 Assignment – PLP Bookstore

This project demonstrates MongoDB fundamentals including setup, data insertion, CRUD operations, advanced queries, aggregation pipelines, and indexing. It is part of the PLP Software Development curriculum.
## 🛠️ Setup Instructions

### Requirements
- MongoDB Community Edition installed locally
- Node.js installed
- MongoDB Compass (optional for GUI testing)

### How to Start MongoDB
1. Create the data directory manually:
2. Start the MongoDB server:
3. Open MongoDB Compass and connect to:
4. Select the `plp_bookstore` database and open the `books` collection.

## 📂 Project Files

| File Name         | Description |
|------------------|-------------|
| `insert_books.js` | Inserts 12 sample books into the `books` collection |
| `crud.js`         | Demonstrates basic CRUD operations |
| `queries.js`      | Contains all MongoDB queries for Tasks 2–5 |
| `README.md`       | This guide |
| `screenshot.png`  | Screenshot of MongoDB Compass showing sample data |

## 🚀 How to Run Scripts

1. Open a terminal window
2. Navigate to your project folder:
```bash
cd path/to/your/project
node insert_books.js
node crud.js
🧪 How to Test Queries
Option 1: MongoDB Compass
Open the Filter tab to run queries like:

js
{ genre: "Fantasy" }
{ published_year: { $gt: 2000 } }
Use the Aggregation tab to run pipelines like:

js
[
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]
Option 2: MongoDB Shell (if installed)
bash
mongosh
use plp_bookstore
Then paste queries from queries.js one at a time.

✅ Submission Checklist
[x] insert_books.js created and tested

[x] crud.js created and tested

[x] queries.js with all required queries

[x] Screenshot of MongoDB Compass

[x] All files committed and pushed to GitHub

👨🏽‍🏫 Author
Ibrahim PLP Software Development Student MongoDB Explorer | Youth Curriculum Designer | Creative Educator

Code

---
