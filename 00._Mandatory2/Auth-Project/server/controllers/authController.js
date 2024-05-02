import bcrypt from 'bcryptjs';
import db from '../models/User.js';
import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password'
  }
});

export async function register(req, res) {
  console.log("registerfunciton hit");
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);

  db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], function(err) {
    if (err) {
      return res.status(500).json({ error: 'User could not be created' });
    }
    res.status(201).json({ message: 'User created', userId: this.lastID });

    transporter.sendMail({
      from: 'simsim@gmail.com',
      to: username,
      subject: 'Welcome to our website!',
      text: 'Thank you for registering!'
    }, (error, info) => {
      if (error) {
        return console.log(`Error sending email: ${error}`);
      }
      console.log(`Email sent: ${info.response}`);
    });
  });
};

export async function login(req, res) {
  const { username, password } = req.body;

  db.get('SELECT * FROM users WHERE username = ?', [username], async function(err, user) {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    req.session.userId = user.id; 
    res.json({ message: 'Logged in successfully' });
  });
};
