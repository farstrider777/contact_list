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
        Contacts.findById(req.params.id)
        .then(contacts => res.status(201).send(contacts))
        .catch(error => res.status(400).send(error));
      },


      updateContact (req, res) {
          // Contacts.findById(req.params.id)
          // return Contacts

          Contacts.update({
            name: req.body.name || Contacts.name,
            phone_number: req.body.phone_number || Contacts.phone_number,
            city: req.body.city || Contacts.city,
            state: req.body.state || Contacts.state,
            photo_url: req.body.photo_url || Contacts.photo_url,
            email: req.body.email || Contacts.email,
          }, {where: {
                      id:req.params.id
                    }
            })
          .then(contacts => res.status(201).send(contacts))
          .catch(error => res.status(400).send(error));
        }



        // update(req, res) {
        //   return Todo
        //     .findById(req.params.todoId, {
        //       include: [{
        //         model: TodoItem,
        //         as: 'todoItems',
        //       }],
        //     })
        //     .then(todo => {
        //       if (!todo) {
        //         return res.status(404).send({
        //           message: 'Todo Not Found',
        //         });
        //       }
        //       return todo
        //         .update({
        //           title: req.body.title || todo.title,
        //         })
        //         .then(() => res.status(200).send(todo))  // Send back the updated todo.
        //         .catch((error) => res.status(400).send(error));
        //     })
        //     .catch((error) => res.status(400).send(error));
        // },
      //
      // deleteContact (req, res) {
      //   Contacts.destroy({
      //
      //   })
      //   .then(contacts => res.status(201).send(contacts))
      //   .catch(error => res.status(400).send(error));
      // }

//       destroy(req, res) {
//   return Todo
//     .findById(req.params.todoId)
//     .then(todo => {
//       if (!todo) {
//         return res.status(400).send({
//           message: 'Todo Not Found',
//         });
//       }
//       return todo
//         .destroy()
//         .then(() => res.status(204).send())
//         .catch(error => res.status(400).send(error));
//     })
//     .catch(error => res.status(400).send(error));
// },

  };
