/*
 *  Document   : be_forms_validation.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Form Validation Page
 */

var BeFormValidation = function() {
    // Init Bootstrap Forms Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
    var initValidationBootstrap = function(){
        jQuery('.js-validation-bootstrap').validate({
            ignore: [],
            errorClass: 'invalid-feedback animated fadeInDown',
            errorElement: 'div',
            errorPlacement: function(error, e) {
                jQuery(e).parents('.form-group > div').append(error);
            },
            highlight: function(e) {
                jQuery(e).closest('.form-group').removeClass('is-invalid').addClass('is-invalid');
            },
            success: function(e) {
                jQuery(e).closest('.form-group').removeClass('is-invalid');
                jQuery(e).remove();
            },
            rules: {
                'val-username': {
                    required: true,
                    minlength: 3
                },
                'val-email': {
                    required: true,
                    email: true
                },
                'val-password': {
                    required: true,
                    minlength: 5
                },
                'val-confirm-password': {
                    required: true,
                    equalTo: '#val-password'
                },
                'val-select2': {
                    required: true
                },
                'val-select2-multiple': {
                    required: true,
                    minlength: 2
                },
                'val-suggestions': {
                    required: true,
                    minlength: 5
                },
                'val-skill': {
                    required: true
                },
                'val-currency': {
                    required: true,
                    currency: ['$', true]
                },
                'val-website': {
                    required: true,
                    url: true
                },
                'val-phoneus': {
                    required: true,
                    phoneUS: true
                },
                'val-digits': {
                    required: true,
                    digits: true
                },
                'val-number': {
                    required: true,
                    number: true
                },
                'val-range': {
                    required: true,
                    range: [1, 5]
                },
                'val-terms': {
                    required: true
                }
            },
            messages: {
                'val-username': {
                    required: 'enter a username',
                    minlength: 'Your username must consist of at least 3 characters'
                },
                'val-email': 'enter a valid email address',
                'val-password': {
                    required: 'provide a password',
                    minlength: 'Your password must be at least 5 characters long'
                },
                'val-confirm-password': {
                    required: 'provide a password',
                    minlength: 'Your password must be at least 5 characters long',
                    equalTo: 'enter the same password as above'
                },
                'val-select2': 'select a value!',
                'val-select2-multiple': 'select at least 2 values!',
                'val-suggestions': 'What can we do to become better?',
                'val-skill': 'select a skill!',
                'val-currency': 'enter a price!',
                'val-website': 'enter your website!',
                'val-phoneus': 'enter a US phone!',
                'val-digits': 'enter only digits!',
                'val-number': 'enter a number!',
                'val-range': 'enter a number between 1 and 5!',
                'val-terms': 'You must agree to the service terms!'
            }
        });
    };

    // Init Material Forms Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
    var initValidationMaterial = function(){
        jQuery('.js-validation-material').validate({
            ignore: [],
            errorClass: 'invalid-feedback animated fadeInDown',
            errorElement: 'div',
            errorPlacement: function(error, e) {
                jQuery(e).parents('.form-group').append(error);
            },
            highlight: function(e) {
                jQuery(e).closest('.form-group').removeClass('is-invalid').addClass('is-invalid');
            },
            success: function(e) {
                jQuery(e).closest('.form-group').removeClass('is-invalid');
                jQuery(e).remove();
            },
            rules: {
                'val-username2': {
                    required: true,
                    minlength: 3
                },
                'val-email2': {
                    required: true,
                    email: true
                },
                'val-password2': {
                    required: true,
                    minlength: 5
                },
                'val-confirm-password2': {
                    required: true,
                    equalTo: '#val-password2'
                },
                'val-select22': {
                    required: true
                },
                'val-select2-multiple2': {
                    required: true,
                    minlength: 2
                },
                'val-suggestions2': {
                    required: true,
                    minlength: 5
                },
                'val-skill2': {
                    required: true
                },
                'val-currency2': {
                    required: true,
                    currency: ['$', true]
                },
                'val-website2': {
                    required: true,
                    url: true
                },
                'val-phoneus2': {
                    required: true,
                    phoneUS: true
                },
                'val-digits2': {
                    required: true,
                    digits: true
                },
                'val-number2': {
                    required: true,
                    number: true
                },
                'val-range2': {
                    required: true,
                    range: [1, 5]
                },
                'val-terms2': {
                    required: true
                }
            },
            messages: {
                'val-username2': {
                    required: 'enter a username',
                    minlength: 'Your username must consist of at least 3 characters'
                },
                'val-email2': 'enter a valid email address',
                'val-password2': {
                    required: 'provide a password',
                    minlength: 'Your password must be at least 5 characters long'
                },
                'val-confirm-password2': {
                    required: 'provide a password',
                    minlength: 'Your password must be at least 5 characters long',
                    equalTo: 'enter the same password as above'
                },
                'val-select22': 'select a value!',
                'val-select2-multiple2': 'select at least 2 values!',
                'val-suggestions2': 'What can we do to become better?',
                'val-skill2': 'select a skill!',
                'val-currency2': 'enter a price!',
                'val-website2': 'enter your website!',
                'val-phoneus2': 'enter a US phone!',
                'val-digits2': 'enter only digits!',
                'val-number2': 'enter a number!',
                'val-range2': 'enter a number between 1 and 5!',
                'val-terms2': 'You must agree to the service terms!'
            }
        });
    };

    return {
        init: function () {
            // Init Bootstrap Forms Validation
            initValidationBootstrap();

            // Init Material Forms Validation
            initValidationMaterial();

            // Init Validation on Select2 change
            jQuery('.js-select2').on('change', function(){
                jQuery(this).valid();
            });
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BeFormValidation.init(); });
