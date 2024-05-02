import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/validate-session', (req, res) => {
  if (req.session.userId) {
    res.json({ isLoggedIn: true });
  } else {
    res.status(401).json({ isLoggedIn: false });
  }
});

  router.get('/logout', (req, res) => {
    req.session.destroy(err => {
      if (err) {
        return res.status(500).send('Failed to log out');
      }
      res.clearCookie('connect.sid');
      res.status(200).send('Logged out successfully');
    });
  });

export default router;
