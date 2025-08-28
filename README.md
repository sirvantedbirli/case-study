[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20107498&assignment_repo_type=AssignmentRepo)
# Cloud Engineer Case Study
## Description
This is a sample Node.js Restful CRUD API which uses Express as web framework and MySQL as database.
### Required Components
* Node.js v14
* MySQL 8
## Project setup
### Install necessary modules
```
npm install
```
### Database Config
* Run the script [db.sql](https://github.com/sinag/Cloud_Engineer_Case_Study/blob/master/app/config/db.sql) on MySQL to create database and table.
* Edit database configuration script [db.config.js](https://github.com/sinag/Cloud_Engineer_Case_Study/blob/master/app/config/db.config.js) file.
## Run
### Start express application
```
node server.js
```
Open your browser, enter the url http://localhost:3000/
### Test
| Method  | Url | Action |
| ------- | --- | ------ |
| GET | /customers | get all Customers |
| GET | /customers/1 |	get Customer with id=1 |
| POST | /customers |	add new Customer |
| PUT | /customers/1 |	update Customer with id=1 |
| DELETE | /customers/1 | remove Customer with id=1 |
| DELETE | /customers | remove all Customers |
