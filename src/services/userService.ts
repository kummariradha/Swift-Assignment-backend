import { client } from '../config/db';
import { User } from '../types/user';

const users = client.db().collection<User>('users');

export const findUserById = async (id: number) => {
  return await users.findOne({ id });
};

export const removeAllUsers = async () => {
  await users.deleteMany({});
};

export const removeUserById = async (id: number) => {
  const result = await users.deleteOne({ id });
  return result.deletedCount > 0;
};

export const insertUser = async (user: User): Promise<{ success: boolean; user?: User; message?: string }> => {
  const exists = await users.findOne({ id: user.id });
  if (exists) return { success: false, message: 'User already exists' };
  await users.insertOne(user);
  return { success: true, user };
};
