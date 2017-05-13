###Built API to manage a contact list###

Skills practiced

1. Sequelize
  * Used Sequelize to write migrations and models.
  * Edited my models to have all the properties I wanted.
  * Wrote routes to access my tables
  * Wrote controllers that defined the behavior of my Routes.
2. Node.js
  * Installed and ran a server in my terminal.
  * Debugged error codes and problems with connections.
3. Postman
  * Used Postman to test my routes and check my database.
4. API Documentation
  * Wrote thorough and organized documentation for my API.

###API Documentation###

----
  `Create A Contact`
  Welcome to Super Contacts!!! The contact manager of the future.
  We'll start by creating a contact.

* **URL**

  Here you are going to use `http://localhost:8000/contacts` nothing else is required in the URL for this route. You will need to put your contact's information in the request body.

* **Method:**

  This will be a `POST` request

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

  ----
  `Get All Contacts`
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

----
`Get One Contact`
This route allows you to get exactly one contact. You are going to need to put the id of the contact in the URL.

* **URL**

  `localhost:8000/contacts/id`

* **Method:**

  This is a `GET` request.

*  **URL Params**

  You will need the id number added to the URL

* **Success Response:**

  This route will return all the information for exactly one contact.

  * **Code:** 201 <br />
    **Content:**   `[{
        "id": 4,
        "name": "BIll",
        "phone_number": "567-787-7000",
        "city": "Athens",
        "state": "GA",
        "photo_url": "http://thisphotourl",
        "email": "billthegreat@fuzzy.com",
        "createdAt": "2017-03-09T11:58:35.879Z",
        "updatedAt": "2017-03-09T11:58:35.879Z"
      }
    ]`

* **Error Response:**

  If you get an error it's most likely an invalid id or you forgot to put the id at the end of your URL.

  * **Code:** 400 UNAUTHORIZED <br />


  ----
  `Update A Contact`
  Here's where we change the information for a contact we already have entered.

  * **URL**

    `localhost:8000/contacts/id`

  * **Method:**

    This is a `PUT` request.

  *  **URL Params**

    You will need the id parameter in the URL

  * **Data Params**

    You will also need Data parameters in the body. Make sure you list each field that you want to change eg. `name=[string]`

  * **Success Response:**

    You will get a number back showing you how many records you changed

    * **Code:** 201 <br />
      **Content:** `[1]`

  * **Error Response:**

    There are several ways you could get an error here. Don't forget the id in the URL. Also if you try to change the phone_number or name to null values you will get an error.

    * **Code:** 401 UNAUTHORIZED <br />

    ----
      `Delete A Contact`
      The last route that we will use with Super Contacts is for deleting a contact.

    * **URL**

      `localhost:8000/contacts/id`

    * **Method:**

      This is a `DELETE` request.

    *  **URL Params**

       You will need the user id in the URL.

    * **Success Response:**

      You will get an empty object when you delete someone.

      * **Code:** 201 <br/>
        **Content:** `{}`

    * **Error Response:**

      Most likely if you got an error response you put either no id in the URL or one that did not exist.

      * **Code:** 400 UNAUTHORIZED <br />
