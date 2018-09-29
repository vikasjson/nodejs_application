const { user } = require('./../constants');

module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      'users', user,
      {},
    );
  },
  down(queryInterface) {
    return queryInterface.bulkDelete('users', { id: users.map(x => x.id) });
  },
};
