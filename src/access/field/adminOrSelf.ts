import type { FieldAccess } from "payload";

export const adminOrSelf: FieldAccess = ({ req: { user }, id }) => {
  if (!user) return false;
  if (user.role === "admin") return true;

  return user.id === id;
};
