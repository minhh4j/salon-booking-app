import { clerkClient } from '@clerk/clerk-sdk-node';
import User from "../models/userModal.js";  

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({
        isAuthenticated: false,
        message: 'No token provided',
      });
    }

    const session = await clerkClient.sessions.verifySession(token);
    const userId = session.userId;

    if (!userId) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.isBlocked) {
      return res.status(403).json({
        message: 'User is blocked. Please contact support.',
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Auth error:', error);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({
      message: 'Access denied, only admins can access this',
    });
  }
};
