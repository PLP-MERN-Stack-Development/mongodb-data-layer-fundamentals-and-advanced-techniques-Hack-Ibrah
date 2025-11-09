const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('library');
    const books = db.collection('books');

    // 🟢 CREATE
    const newBook = { title: 'The Power of Now', author: 'Eckhart Tolle', year: 1997 };
    await books.insertOne(newBook);
    console.log('✅ Book added:', newBook);

    // 🔵 READ
    const orwellBooks = await books.find({ author: 'George Orwell' }).toArray();
    console.log('📖 George Orwell books:', orwellBooks);

    // 🟠 UPDATE
    await books.updateOne({ title: 'The Alchemist' }, { $set: { year: 1993 } });
    console.log('📝 Updated "The Alchemist" year to 1993');

    // 🔴 DELETE
    await books.deleteOne({ title: 'Moby Dick' });
    console.log('🗑️ Deleted "Moby Dick" from collection');
  } catch (err) {
    console.error('❌ Error:', err);
  } finally {
    await client.close();
  }
}

run();
