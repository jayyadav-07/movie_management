"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("User", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      HID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Hospital",
          key: "id",
        },
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      Phone: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: "active",
      },
      Role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Role",
          key: "id",
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("User");
  },
};
