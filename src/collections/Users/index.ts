import type { CollectionConfig } from "payload";
import { adminOrSelf } from "@/access/adminOrSelf";
import { admin } from "@/access/field/admin";
import { adminOrSelf as fieldAdminOrSelf } from "@/access/field/adminOrSelf";
import { authenticated } from "../../access/authenticated";

export const Users: CollectionConfig = {
  slug: "users",
  access: {
    admin: authenticated,
    create: admin,
    delete: admin,
    read: adminOrSelf,
    update: adminOrSelf,
  },
  admin: {
    defaultColumns: ["name", "email", "role"],
    useAsTitle: "name",
    hidden: ({ user }) => user?.role !== "admin",
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "role",
      type: "select",
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Editor",
          value: "editor",
        },
        {
          label: "User",
          value: "user",
        },
      ],
      required: true,
      defaultValue: "user",
      access: {
        read: fieldAdminOrSelf,
        create: admin,
        update: admin,
      },
    },
  ],
  timestamps: true,
};
