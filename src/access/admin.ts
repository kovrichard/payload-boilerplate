import type { Access } from 'payload';
import { Role } from '@/payload-types';

export const admin: Access = ({ req: { user } }) => {
  if (!user) return false;

  if (!user?.roles) return false;

  return user.roles.some((role: number | Role) => {
    if (typeof role === 'number') {
      return role === 1;
    }

    return role.slug === 'admin';
  });
};
