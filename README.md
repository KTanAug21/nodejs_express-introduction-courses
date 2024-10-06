# NodeJS Express Introduction: Courses
An introductory refresher to the NodeJs REST api using the Express framework, exposing endpoints for CRUD operations on a (currently static) Course Resource.

## Follows The Tutorial 
Thank you to Programming with Mosh for the tutorial on NodeJS/Express, [here](https://www.youtube.com/watch?v=pKd0Rpw7O48&list=PLLWt78GEzpXvLBXClkO31tlFbMw_F-KmJ&index=2)!

## Topics
1. Server and route handling with express
2. Environment variable with `process.env`
3. Matching CRUD operations with HTTP verbs
4. Request parameters + body
5. Data Validation using [JOI](https://joi.dev/)

## Personal Touch!
Here are some key refactoring I've added:
1. Exporting and importing from different modules
1. Decoupled data operations+validation for the Course resource into a [resources/courses.js](https://github.com/KTanAug21/nodejs_express-introduction-courses/blob/master/resources/courses.js) module
2. Extending the Error Class:  Reusable Custom Error classes, declared in [errors.js](https://github.com/KTanAug21/nodejs_express-introduction-courses/blob/master/errors.js) module
3. [Global Error Handler Middleware](https://github.com/KTanAug21/nodejs_express-introduction-courses/blob/master/index.js#L80-L94) for a standardized response based on thrown errors
4. Create package.json start script to run `nodemon --env-file=.env .` to allow easy use of `npm start` to start the server

# Local Setup
1. Run `npm install` to install the dependencies
2. Copy contents of `.env.example` to `.env`
3. Run the server with `npm start`!

## NodeJS Notes + Node Express
For more notes about NodeJs, see my [NodeJS journal](https://cyber-mule-69b.notion.site/NodeJs-1135dc7862d980388e00f76eef706de9?pvs=74), and [express journal](https://cyber-mule-69b.notion.site/NodeJS-Express-1175dc7862d980198be3f00f7b82d395).
