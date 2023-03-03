import axios from "axios";

const baseUrl = "http://localhost:8000/api/v1";
const userUrl = baseUrl + "/user";

//creating user
export const axiosCreateUser = async (userData) => {
  try {
    const { data } = await axios.post(userUrl, userData);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const verifyAdminUser = async (obj) => {
  try {
    const { data } = await axios.post(userUrl + "/verifyEmail", obj);
    return data;
  } catch (error) {
    return {
      status: error,
      message: error.message,
    };
  }
};
