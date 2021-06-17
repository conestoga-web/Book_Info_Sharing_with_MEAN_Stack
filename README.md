# Book Information Sharing Website

![Book Information Sharing](/document/mean_stack.JPG)

# Overview

**1. This Online Book Information Website is for users to *Create, Update, Share*, and *Get book information* and *Review* with others.**

**2. Project Performing: MEAN stack**
&nbsp; &nbsp; * Structured Design Pattern: 	MVC
&nbsp; &nbsp; * Database:			        MongoDB (online)
&nbsp; &nbsp; * Server Environment: 		Node.js
&nbsp; &nbsp; * Server Side Framework: 	    Express.js
&nbsp; &nbsp; * Client Side Framework: 	    Angular
&nbsp; &nbsp; * Online Hosting: 			Heroku

# Main Features

**1. Sign-up / Log-in**
&nbsp; &nbsp; * Sign-up: for new user, encrypt with Hash and Salt
&nbsp; &nbsp; * Log-in: Authentication and Token

**2. Data Access Authority by Classified Account Grades**
&nbsp; &nbsp; * User without login: 	just can get data about books and reviews
&nbsp; &nbsp; * User with login:	can create reviews on books and edit only one’s own reviews
&nbsp; &nbsp; * administrator (admin):	can create, read, update, delete book information

**3. Product Search**
&nbsp; &nbsp; * Category search by genre
&nbsp; &nbsp; * Text search by book name
&nbsp; &nbsp; * Search by Genre category + text

**4. Review and Rating System**
&nbsp; &nbsp; * Create review on books
&nbsp; &nbsp; * Input stars from 1 to 5 with review
&nbsp; &nbsp; * Representative stars in the book list with the average value from each review star

**5. History Service for Routing**
&nbsp; &nbsp; * Avoid redirect to unnecessary pages 	(ex) sign-up or log-in page
&nbsp; &nbsp; * Redirect to just before the page when sign-up or log-in being performed
&nbsp; &nbsp; * Don’t redirect to the log-in page after completing sign-up  complete sign-up and log-in concurrently

**6. File Uploading**
&nbsp; &nbsp; * Upload images from client to server when creating and updating
&nbsp; &nbsp; * Display the images on each page required

