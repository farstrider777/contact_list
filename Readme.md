###Built API to manage a contact list###

Skills practiced

1. Sequelize
  * Wrote and managed migrations


###API Documentation###

1. No Authentication needed.
2. POST - Creating a contact, Params -
  * name: First and last (this field is required)
  * phone_number: Include area code (this field is required)
  * city:
  * state:
  * photo_url: Include entire url (http://etc)
  * email: A full email address
3. Response - If the contact was created successfully you should receive status code 201 and -
  * {
  * "id": 4,
  * "name": "BIll",
  * "phone_number": "567-787-7000",
  * "city": "Athens",
  * "state": "GA",
  * "photo_url": "http://thisphotourl",
  * "email": "billthegreat@fuzzy.com",
  * "updatedAt": "2017-03-09T11:58:35.879Z",
  * "createdAt": "2017-03-09T11:58:35.879Z"
  * }
4. GET - Getting the entire contacts list - no Params - you should recieve
status code 201 and - every contact listed in this form:
  * {
  * "id": 4,
  * "name": "BIll",
  * "phone_number": "567-787-7000",
  * "city": "Athens",
  * "state": "GA",
  * "photo_url": "http://thisphotourl",
  * "email": "billthegreat@fuzzy.com",
  * "updatedAt": "2017-03-09T11:58:35.879Z",
  * "createdAt": "2017-03-09T11:58:35.879Z"
  * }
5. GET individual contact - Get one contact from the list - Params
  * id : id of contact
6. Response - You should receive response 201 and -
  * {
  * "id": 4,
  * "name": "BIll",
  * "phone_number": "567-787-7000",
  * "city": "Athens",
  * "state": "GA",
  * "photo_url": "http://thisphotourl",
  * "email": "billthegreat@fuzzy.com",
  * "updatedAt": "2017-03-09T11:58:35.879Z",
  * "createdAt": "2017-03-09T11:58:35.879Z"
  * }
