<div id="top"></div>

[![CodeFactor](https://www.codefactor.io/repository/github/mariano-farace/nuwe-csv-to-json/badge)](https://www.codefactor.io/repository/github/mariano-farace/nuwe-csv-to-json)
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">


<h3 align="center">Nuwe-csv-to-json</h3>

  <p align="center">
    A service to convert CSV files to JSON.
    <br />
    <a href="https://github.com/mariano-farace/Nuwe-CSV-to-JSON"><strong>Explore the docs »</strong></a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
# About The Project


Nuwe-csv-to-json is a CSV to JSON service made to participate at Red Cross's BCN Inclusive Coding Hackathon. The purpose of the app is to provide let the user upload a CSV file and return a JSON with numbers parsed as such.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With:

* <b>Node.js</b>
* <b>Express</b>
* <b>[multer](https://www.npmjs.com/package/multer)</b>  Middleware for handling multipart/form-data, used for uploading files.
* <b>[csvtojson](https://www.npmjs.com/package/csvtojson)</b> CSV parser to convert csv to json
  

### Development dependencies:

* <b>[nodemon](https://www.npmjs.com/package/nodemon) </b> Tool that automatically restarts the node application when file changes in the directory are detected
* <b>[eslint](https://www.npmjs.com/package/eslint) </b> Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
* <b>[eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) </b>Provides Airbnb's code style to be enforced by eslint 
  
<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
# Getting Started

### Prerequisites

* Clone the repo
   ```sh
   git clone https://github.com/mariano-farace/Nuwe-CSV-to-JSON
   ```
* Have node v16 or higher
### Installation

1. At the root folder install NPM packages
   ```sh
   npm install
   ```
2. Rename  `template.env` to `.env`
   
3. Run the server. Will run on port 5000. Use dev version for nodemon
   ```sh
   npm start || npm run dev
   ```



# API Documentation
This API uses `POST` request to communicate and HTTP [response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) to identify status and errors.

## Transform a CSV to JSON
Will transform an uploaded CSV to JSON.

**You send:**  A .CSV file.

**You get:** A response with a message and the resulting JSON as data.

**Request:**
```json

HEADERS

POST /cvstojson HTTP/1.1
Content-Type: multipart/form-data
Content-Length: xy

body:
some_csv: data.csv
```
**data.csv:**
```
id,firstname,lastname,salary,profession,age
535,Susette,Fancie,25862.22,police officer,36
158,Brooks,Timon,51312.86,doctor,68
957,Cyndie,Kare,54466.18,firefighter,62
```
**Successful Response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: xy
body:
{
    "message": "file transformed successfully",
    "data": [
        {
            "id": 535,
            "firstname": "Susette",
            "lastname": "Fancie",
            "salary": 25862.22,
            "profession": "police officer",
            "age": 36
        },
        {
            "id": 158,
            "firstname": "Brooks",
            "lastname": "Timon",
            "salary": 51312.86,
            "profession": "doctor",
            "age": 68
        },
        {
            "id": 957,
            "firstname": "Cyndie",
            "lastname": "Kare",
            "salary": 54466.18,
            "profession": "firefighter",
            "age": 62
        }
    ],
    "errors": []
}
```
**Fail Responses:**
```json
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: xy

{
    "message": "No file provided for upload.",
    "data": {},
    "errors": "No file provided for upload."
}
``` 

```json
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: xy

{
    "message": "Error uploading file.",
    "data": {},
    "errors": "File extension must be CSV"
}
``` 



<!-- CONTACT -->
# Contact
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/mariano-farace/) 



e-mail: mariano_farace@hotmail.com

Project Link: [https://github.com/mariano-farace/nuwe-mailer](https://github.com/mariano-farace/nuwe-mailer)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png

