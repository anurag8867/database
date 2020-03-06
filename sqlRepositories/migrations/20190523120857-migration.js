"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        "checks_tat",
        "candidate_id",
        Sequelize.STRING(256)
      )
    ]);
  }
};
