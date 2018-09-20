const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('../routes');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    routes(app);
};
