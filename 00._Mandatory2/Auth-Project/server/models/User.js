import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

// Correctly define __dirname in the context of an ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a new database instance with a correctly resolved path
const db = new sqlite3.Database(path.join(__dirname, 'auth.db'));

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
)`);

export default db;
