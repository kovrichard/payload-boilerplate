import { CollectionConfig } from 'payload';
import { admin } from '@/access/admin';
import { slugField } from '@/fields/slug';

export const Roles: CollectionConfig = {
  slug: 'roles',
  access: {
    create: admin,
    delete: admin,
    read: admin,
    update: admin,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    ...slugField(),
  ],
};
