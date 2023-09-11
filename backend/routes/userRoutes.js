const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserData,
} = require('../controller/userController');

const { protect } = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/login', loginUser);
//protected route
router.get('/me', protect, getUserData);

module.exports = router;
