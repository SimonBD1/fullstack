import express from 'express';
import session from 'express-session';
import connectSqlite3 from 'connect-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors'; 
import authRoutes from './routes/auth.js'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SQLiteStore = connectSqlite3(session);
const app = express();

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
  }));
  
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public'))); 

app.use(session({
    store: new SQLiteStore({ db: 'sessions.db' }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } 
}));

app.use('/api/auth', authRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));