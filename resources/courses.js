/**
 * Resource: Course
 */

// Dependencies
const Joi = require('joi');
const {InvalidInputError} = require('./../errors.js');

// Class
class Course{
    constructor(){
        this.courses = 
        [
            {id:1,name:"ALGEBRA"},
            {id:2,name:"PHYSICS"},
            {id:3,name:"ACCOUNTING"},
            {id:4,name:"ELECTRONICS"},
        ];
    }

    get(){
        return this.courses;
    }

    find(id){
        return this.courses.find((course)=>{
            return course.id == parseInt(id);
        });
    }

    findIndex(id){
        return this.courses.findIndex((course)=>{
            return course.id == parseInt(id);
        });
    }

    create( course ){
        course['id'] = this.courses.length+1;
        this.courses.push(course);
        return course;
    }    

    update( courseDBIndex, course ){
        course.id = this.courses[courseDBIndex].id;
        console.log(course);
        this.courses[courseDBIndex] = course;
        return course;
    }

    validateCourse( course ){
        // Reference
        const schema = Joi.object({
            name: Joi.string().min(3).required()
        });
    
        // Validate
        const { error, result } = schema.validate(course);
        if( error ){
            const details = error.details.map((error)=>{
                let detail = {};
                detail[ error.context.key ] = error.message;
                return detail;
            });
            return new InvalidInputError('Course', {
                original:error._original, 
                errors:details
            });
        }else{
            return null;
        }
    }
}


// Export class
module.exports = Course;