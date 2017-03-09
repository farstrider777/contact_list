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

  **Title**
----
  <_Additional information about your API call. Try to use verbs that match both request type (fetching vs modifying) and plurality (one vs multiple)._>

* **URL**

  <_The URL Structure (path only, no root url)_>

* **Method:**

  <_The request type_>

  `GET` | `POST` | `DELETE` | `PUT`

*  **URL Params**

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._>

   **Required:**

   `id=[integer]`

   **Optional:**

   `photo_id=[alphanumeric]`

* **Data Params**

  <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

* **Success Response:**

  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** `{ id : 12 }`

* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Email Invalid" }`

* **Sample Call:**

  <_Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable._>

* **Notes:**

  <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._>
