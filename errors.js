/**
 * Contains custom errors, 
 *  their names, status response, body response
 */

// When resource is not found
class NotFoundError extends Error{
    constructor(message){
        super(message);
        this.name = 'NOT_FOUND';
        this.status = 404;
        this.response = {
            'message': `${message} not found!`,
        }
    }

}

// When input is invalid
class InvalidInputError extends Error{
    constructor(message,errors){
        super(message);
        this.name = 'INVALID_INPUT';
        this.status = 400; 
        this.response = {
            'message':'Invalid input',
            'errors':errors.errors,
            'original':errors.original
        };
    }
}

// Export classes
module.exports = {
    NotFoundError,
    InvalidInputError
}