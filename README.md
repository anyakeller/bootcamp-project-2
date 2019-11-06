# bootcamp-project-2
## [On Heroku](https://nana-care.herokuapp.com/)

# Table of Contents
1. [About](#about)
2. [How To](#howto)
3. [run](#run)
4. [Screenshots](#screenshots)
5. [Reference](#reference)

## About
NanaCare is an application for daycare administrators to easily organize and register children.
Features:
- Easy week view to display the children who will be attending organized by the day of the week
- Clickable links to display more info on a child including age, gender, allergies, and other notes
- Includes form system for parents to register their children and select the days they will be attending
- Easy to access api system

## HowTo
- To register a parent, their child, assign the child days to attend, and register more children, use the form in the bottom right corner labeled "Begin Registration".
- Data will be displayed on the home route.
- Details about a child can be viewed and edited by clicking on a child's name in week view

## Run
To run the app locally, node must be installed in your terminal.
Run the following to initialize:
``` bash
$ npm init
$ npm instal
```
Run the following in the main directory to start app onl localhost port 3000 
``` bash
$ node server
```
## Screenshots
### App Views
<img src="reference/weekviewshot.png" width="500">
<img src="reference/childprofileshot.png" width="500">
### Form Views
<img src="reference/parentform.png" width="500">
<img src="reference/childform.png" width="500">
<img src="reference/scheduleform.png" width="500">
### Api Views
<img src="reference/childrenapi.png" width="500">
<img src="reference/parentapi.png" width="500">


## Reference
Website Schema
<img src="reference/websiteSchema.png" width="250">
Mockups
<img src="reference/childProfile.png?" width="250">
<img src="reference/weekView.png" width="250">

