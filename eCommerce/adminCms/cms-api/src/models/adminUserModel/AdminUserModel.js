import AdminUserSchema from "./adminUserSchema.js";

export const createAdminUser = (obj) => {
  return AdminUserSchema(obj).save();
};

//findByIdAndUpdate
export const findByIdAndUpdate = (filter, obj) => {
  return AdminUserSchema.findOneAndUpdate(filter, obj);
};
