# ParkingLot

### Desctiprion

REST API service developed with NodeJS & MongoDB and use OCR API.
This service gets an image of a license plate and returns a
decision whether the vehicle may enter the parking lot.

#### How to start

1. Configure local MongoDB:  
   download and install MongoDB -> https://www.mongodb.com/try/download/community  
   run as explained (windows/mac) -> https://docs.mongodb.com/guides/server/install/
2. Clone this project
3. Open terminal and run:  
   "npm i"  
   "npm start" to run the server
4. Here you can find plates images and Postman collection -> https://drive.google.com/drive/folders/1FaAQ46yHGxEkDKgXe-BWr0rfXpEGnSox?usp=sharing
5. Open postman:  
   Get request to "http://localhost:5000/api/park" In body mention the requested image path {"path": "path to image"}.  
   Get request to "http://localhost:5000/api/decisions" to get all decisiond from database.  
   Delete request to "http://localhost:5000/api/decisions" to DELETE all decisiond from database.
