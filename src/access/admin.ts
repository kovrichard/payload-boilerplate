import type { Access } from 'payload';

export const admin: Access = ({ req: { user } }) => {
  if (!user) return false;

  return user.role === 'admin';
};
