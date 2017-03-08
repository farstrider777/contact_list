// Require your controllers here
const ContactsController = require("../controllers/contacts");

module.exports = (app) => {
  app.post('/contacts', ContactsController.create);
};
