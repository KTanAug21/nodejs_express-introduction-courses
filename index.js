/**
 * Entrypoint to server
 */

// Dependencies
const express = require('express');
const Course = require('./resources/courses');
const { NotFoundError } = require('./errors');

// Global constants
const PORT = process.env.PORT;
const courses = new Course();

// Express Set Up
const app = express();
app.use(express.json()); // Handle parsing req.body


// Handler: Read Course List  
app.get('/api/courses',(req,res)=>{
    res.send( courses.get() );
});

// Handler: Read Course
app.get('/api/courses/:id',(req, res)=>{
    // Find Course
    const id = req.params.id;
    const course = courses.find(id);

    if(!course){
       throw new NotFoundError('Course Not Found', {id:id});
    }else{
        res.send(course);
    }
});

// Handler: Create course
app.post('/api/courses',(req,res)=>{
    // Validate
    let course = {
        name: req.body.name
    };
    const valError = courses.validateCourse(course);
    if( valError ){
        throw valError;
    }
    
    // Create
    course = courses.create(course);
    res.send(course);
});

// Handler: Update course
app.put('/api/courses/:id',(req,res)=>{
    // Find Course Index
    const id = req.params.id;
    const courseIndex = courses.findIndex(id);

    if( courseIndex>-1 ){
        // Vadlidate 
        let courseBody = req.body;
        const valError = courses.validateCourse(courseBody);
        if( valError ){ 
            throw valError;
        }
        // Update
        courseBody = courses.update(courseIndex, courseBody);
        res.send(courseBody);
    }else{
        throw new NotFoundError('Course');
    }   
});

// Run Server
app.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`);
});


// Global: Error Handler
app.use((err,req,res,next)=>{
    let statusCode;
    let response;
    if( !err.status ){
        console.log(err);
        statusCode = 500;
        response = {'message':'Server Error'};
    }else{
        statusCode = err.status;
        response = err.response;
    }
    res.status(statusCode).send(response);
    next();
});