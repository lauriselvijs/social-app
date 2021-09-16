"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Post body has to be set" },
          notEmpty: { msg: "Post body cant be empty" },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Post category has to be set" },
          notEmpty: { msg: "Post cant be without category" },
          isIn: {
            args: [["Note", "Idea", "Request"]],
            msg: "Must be Note or Idea or Request",
          },
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable("posts");
  },
};
