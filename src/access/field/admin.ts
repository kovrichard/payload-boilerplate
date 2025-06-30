import type { FieldAccess } from 'payload';

export const admin: FieldAccess = ({ req: { user } }) => {
  if (!user) return false;

  return user.role === 'admin';
};
