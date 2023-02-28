import bcryptjs from "bcryptjs";

const salt = 10;
export const hassPassword = (plainPassword) => {
  return bcryptjs.hashSync(plainPassword, salt);
};
