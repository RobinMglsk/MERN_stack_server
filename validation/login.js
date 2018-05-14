const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data){
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(Validator.isEmpty(data.email)){
        errors.email = 'Email field is required';
    }

    if(!Validator.isEmail(data.email)){
        errors.email = 'Email must be a valid email address';
    }

    if(Validator.isEmpty(data.password)){
        errors.password = 'Password field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}