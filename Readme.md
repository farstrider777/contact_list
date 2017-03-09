###Built API to manage a contact list###

Skills practiced

1. Sequelize
  * Wrote and managed migrations


###API Documentation###

  **Title**
----
  Welcome to Super Contacts!!! The contact manager of the future.
  We'll start by creating a contact.

* **URL**

  Here you are going to use `localhost:8000/contacts` nothing else is required in the URL for this route. You will need to put your contact's information in the request body.

* **Method:**

  This will be a `GET` request

* **Data Params**

  **Required:**

  `name=[string]`
  `phone_number=[string]`

  **Optional:**

  `city=[string]`
  `state=[string]`
  `photo_url=[string]`
  ` email=[string]`

* **Success Response:**

  This route will return the contact you just posted with all the information that was saved.

  * **Code:** 201 <br/>
    **Content:**
  `[{
    "id": 1,
    "name": "Josh",
    "phone_number": "567-787-7778",
    "city": Tallahassee,
    "state": Florida,
    "photo_url": null,
    "email": fun@yahoo.com,
    "createdAt": "2017-03-08T21:21:53.898Z",
    "updatedAt": "2017-03-08T21:21:53.898Z"
  }]`


* **Error Response:**

  If you get an error response the most likely problem is that you didn't include infomation for the two mandatory fields which are name and phone_number.

  * **Code:** 400 BAD REQUEST <br/>

  **Title**
  ----
  The next route we are going to use is a get request to look at all the contacts in Super Contacts. This is useful to make sure that the first contact you entered has all the information and also later if you want to export your whole contact list.

  * **URL**

    Again we will be using `localhost:8000/contacts` we don't need any other information in the URL or any information in the request body.

  * **Method:**

    This will be a `GET` request    

  * **Success Response:**

    You will be getting your entire contact list

    * **Code:** 201 <br/>
      **Content:** `  [{
    "id": 1,
    "name": "Josh",
    "phone_number": "567-787-7778",
    "city": null,
    "state": null,
    "photo_url": null,
    "email": null,
    "createdAt": "2017-03-08T21:21:53.898Z",
    "updatedAt": "2017-03-08T21:21:53.898Z"
  },
  {
    "id": 2,
    "name": "Kurt",
    "phone_number": "567-787-6969",
    "city": "Atlanta",
    "state": "GA",
    "photo_url": "thisphotourl",
    "email": "kurtthegreat@fuzzy.com",
    "createdAt": "2017-03-08T21:28:12.521Z",
    "updatedAt": "2017-03-08T21:28:12.521Z"
  }]`

  * **Error Response:**

    If you get an error response from this route most likely you tried put extra info in there, try it again with just the base url.

    * **Code:** 400 BAD REQUEST <br/>
