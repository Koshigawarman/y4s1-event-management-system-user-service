const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile
} = require('../controllers/userController');
const { protect, validateTokenForServices } = require('../middleware/auth');

router.post('/users/register', registerUser);
router.post('/users/login', loginUser);
router.get('/users/profile', protect, getUserProfile);
router.put('/users/profile', protect, updateUserProfile);

// For other microservices to validate token
router.post('/users/validate-token', validateTokenForServices);

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'User Service' });
});

module.exports = router;