'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('quizzes', 'quizID', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: 'quizzes',
        key: 'id'
      },
      allowNull: true
    });
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('quizzes', 'quizID');
  }
};
