import { CollectionConfig } from 'payload';
import { authenticated } from '@/access/authenticated';
import { slugField } from '@/fields/slug';

export const Roles: CollectionConfig = {
  slug: 'roles',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
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
