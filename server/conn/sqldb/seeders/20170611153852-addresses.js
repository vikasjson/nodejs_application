const { address } = require('./../constants');

module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      'addresses', address,
      {},
    );
  },
  down(queryInterface) {
    return queryInterface.bulkDelete('addresses', { id: address.map(x => x.id) });
  },
};
