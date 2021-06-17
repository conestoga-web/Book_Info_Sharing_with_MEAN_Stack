# Book Information Sharing Website

![Book Information Sharing](/document/mean_stack.JPG)

# Overview

**1. This Online Book Information Website is for users to *Create, Update, Share*, and *Get book information* and *Review* with others.**

**2. Project Performing: MEAN stack**  
&nbsp; &nbsp; * Structured Design Pattern: 	MVC <br />
&nbsp; &nbsp; * Database:			        MongoDB (online) <br />
&nbsp; &nbsp; * Server Environment: 		Node.js <br />
&nbsp; &nbsp; * Server Side Framework: 	    Express.js <br />
&nbsp; &nbsp; * Client Side Framework: 	    Angular <br />
&nbsp; &nbsp; * Online Hosting: 			Heroku <br />

# Main Features

**1. Sign-up / Log-in**  
&nbsp; &nbsp; * Sign-up: for new user, encrypt with Hash and Salt <br />
&nbsp; &nbsp; * Log-in: Authentication and Token <br />

**2. Data Access Authority by Classified Account Grades**  
&nbsp; &nbsp; * User without login: 	just can get data about books and reviews <br />
&nbsp; &nbsp; * User with login:	can create reviews on books and edit only one’s own reviews <br />
&nbsp; &nbsp; * administrator (username: 'stevejobs', pw: '1234qwer'):	can create, read, update, delete book information <br />

**3. Product Search**  
&nbsp; &nbsp; * Category search by genre <br />
&nbsp; &nbsp; * Text search by book name <br />
&nbsp; &nbsp; * Search by Genre category + text <br />

**4. Review and Rating System**  
&nbsp; &nbsp; * Create review on books <br />
&nbsp; &nbsp; * Input stars from 1 to 5 with review <br />
&nbsp; &nbsp; * Representative stars in the book list with the average value from each review star <br />

**5. History Service for Routing**  
&nbsp; &nbsp; * Avoid redirect to unnecessary pages 	(ex) sign-up or log-in page <br />
&nbsp; &nbsp; * Redirect to just before the page when sign-up or log-in being performed <br />
&nbsp; &nbsp; * Don’t redirect to the log-in page after completing sign-up  complete sign-up and log-in concurrently <br />

**6. File Uploading**  
&nbsp; &nbsp; * Upload images from client to server when creating and updating <br />
&nbsp; &nbsp; * Display the images on each page required <br />

