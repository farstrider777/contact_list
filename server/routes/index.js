// Require your controllers here
const ContactsController = require("../controllers/contacts");

module.exports = (app) => {
  app.post('/contacts', ContactsController.create);
  app.get('/contacts', ContactsController.listContacts);
  app.get('/contacts', ContactsController.listOneContact);
  app.put('/contacts', ContactsController.updateContact);
  app.delete('/contacts', ContactsController.deleteContact);
};
