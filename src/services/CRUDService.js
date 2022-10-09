import bcrypt from "bcryptjs";
import db from "../models";

var salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === "1" ? true : false,

        roleId: data.roleId,
      });
      resolve("a new user have been created");
    } catch (error) {
      reject(error);
    }
  });
};
let hashUserPassword = () => {
  return new Promise(async (resolve, reject) => {
    try {
      var hashPassWord = await bcrypt.hashSync("B4c0//", salt);
      resolve(hashPassWord);
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  createNewUser: createNewUser,
};
