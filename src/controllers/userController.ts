import { Request, Response } from 'express';
import {
  findUserById,
  removeAllUsers,
  removeUserById,
  insertUser,
} from '../services/userService';

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  const user = await findUserById(Number(userId));
  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  res.json(user);
};

export const deleteAllUsers = async (_req: Request, res: Response): Promise<void> => {
  await removeAllUsers();
  res.json({ message: 'All users deleted' });
};

export const deleteUserById = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  const success = await removeUserById(Number(userId));
  if (!success) {
    res.status(404).json({ error: 'User not found' });
    return;
  }
  res.json({ message: 'User deleted' });
};

export const addUser = async (req: Request, res: Response): Promise<void> => {
  const result = await insertUser(req.body);
  if (!result.success) {
    res.status(400).json({ error: result.message });
    return;
  }
  res.status(201).json(result.user);
};
