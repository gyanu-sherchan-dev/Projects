import AdminUserSchema from "./adminUserSchema.js";

export const createAdminUser = (obj) => {
  return AdminUserSchema(obj).save();
};
