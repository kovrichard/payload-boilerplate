import type { GlobalConfig } from "payload";
import { admin } from "@/access/admin";
import { link } from "@/fields/link";
import { revalidateFooter } from "./hooks/revalidateFooter";

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: admin,
  },
  fields: [
    {
      name: "navItems",
      type: "array",
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: "@/Footer/RowLabel#RowLabel",
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
};
