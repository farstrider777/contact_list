const Contacts = require("../models").Contacts;

  module.exports = {
    create (req, res) {
     //res.status(200).send("Hello world!");
        Contacts.create({
        name: req.body.name,
        phone_number: req.body.phone_number,
        city: req.body.city,
        state: req.body.state,
        photo_url: req.body.photo_url,
        email: req.body.email,
      })
      .then(contacts => res.status(201).send(contacts))
      .catch(error => res.status(400).send(error));
    },

    listContacts (req, res) {
        Contacts.findAll({
          // where: {
          //   id: req.params.id
          // }
        })
        .then(contacts => res.status(201).send(contacts))
        .catch(error => res.status(400).send(error));
      },

    listOneContact (req, res) {
        Contacts.findAll({
          where: {
            id: req.params.id
          }
        })
        .then(contacts => res.status(201).send(contacts))
        .catch(error => res.status(400).send(error));
      },

      // updateContact (req, res) {
      //     Contacts.update({
      //
      //       updatedAt: null,
      //       }, {
      //       where: {
      //         deletedAt: {
      //           $ne: null
      //         }
      //       }
      //
      //     })
      //     .then(contacts => res.status(201).send(contacts))
      //     .catch(error => res.status(400).send(error));
      //   },



  };
