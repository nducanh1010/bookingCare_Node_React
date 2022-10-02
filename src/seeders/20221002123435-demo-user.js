"use strict";

module.exports = {
  // email: DataTypes.STRING,
  //     password: DataTypes.STRING,
  //     firstName: DataTypes.STRING,
  //     lastName: DataTypes.STRING,
  //     address: DataTypes.STRING,
  //     gender: DataTypes.BOOLEAN,
  //     roleid: DataTypes.STRING,
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return await queryInterface.bulkInsert("users", [
      {
        email: "admin@gmail.com",
        password: "123456",
        firstName: "duc anh",
        lastName: "nguyen",
        address: "vietnam",
        gender: 1,
        typeRole: "ROLE",
        keyRole: "R1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
