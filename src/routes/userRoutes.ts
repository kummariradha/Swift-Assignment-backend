import express from 'express';
import {
  getUserById,
  deleteAllUsers,
  deleteUserById,
  addUser,
} from '../controllers/userController';

const router = express.Router();

router.get('/:userId', getUserById);
router.delete('/', deleteAllUsers);
router.delete('/:userId', deleteUserById);
router.put('/', addUser);

export default router;
