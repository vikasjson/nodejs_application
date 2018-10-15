const { User } = require('../../conn/sqldb');

exports.index = (req, res) => {
  res.send('address Route is callling');
  User.find(1).then((data) => {
    console.log('Vikas kumar', data);
  });
};

exports.create = (req) => {
  User.create(req.body).then((data) => {
    console.log('Response Data', data);
  });
}
