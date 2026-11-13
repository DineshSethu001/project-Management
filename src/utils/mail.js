
import Mailgen from 'mailgen';

const emailVerificationMailgenContent = (username, verificationUrl)=>{return{
    body: {
        name: username,
        intro: 'Welcome to Mailgen! We\'re very excited to have you on board.',
        action: {
            instructions: 'To verify the mail please click the following button',
            button: {
                color: '#22BC66', // Optional action button color
                text: 'verify your emai',
                link: verificationUrl
            }
        },
        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
}};

// forgotPassword

const forgotPasswordMailgenContent = (username, passwordResetUrl)=>{return{
    body: {
        name: username,
        intro: 'We got a request to reset the apssword of your accound',
        action: {
            instructions: 'To reset the your password click on the following button or link',
            button: {
                color: '#22BC66', // Optional action button color
                text: 'Reset password',

                link: passwordResetUrl,
            }
        },
        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
}};


export {
    emailVerificationMailgenContent, forgotPasswordMailgenContent}

