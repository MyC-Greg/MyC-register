const User = require('./user_model');
const nodemailer = require('nodemailer');

module.exports = {

    checkEmail(req, res, next) {
        console.log('req.params.email', req.params.email)
        const getEmail = async() => {
            try {
                const user = await User.find({ email: req.params.email}, function( err, user ) {
                    if (err) {
                            return res.status(500).json({
                                title: 'An error to find user occurred',
                                error: err
                            });
                        }
                        if (user.length === 0) {
                            return res.status(204).json();
                        } else {
                            console.log('user', user)
                                res.status(200).json({
                                message: 'This email address seems to be already registered, try another one.',
                                obj: user
                            });
                        }
                    })
                    
            } catch (error) { 
                console.log(error)
            }
        }
        getEmail();
    },



    signup(req, res, next) {
       
        function sendEmail(user) {
            let smtpConfig = {
                host: 'ssl0.ovh.net',
                sendMail: true,
                port: 587,
                secure: false, // upgrade later with STARTTLS
                auth: {
                    user: 'charlotte@mycharlotte.co',
                    pass: 'Chamonix1'
                }
            };
              let transporter = nodemailer.createTransport(smtpConfig);
        
              var mailOptions = {
                from: {name: 'Charlotte', address: 'charlotte@mycharlotte.co'},
                to: user.email,
                subject: 'Willkommen bei myCharlotte',
                text: 'Herzlichen Dank fūr Deine Anmeldung! Wir melden uns in Kürze bei Dir.'
              };
        
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log('mailOptions', mailOptions)
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
              
        };

        console.log('req.body',req.body)
        const user = new User({
        firstName: req.body.user.firstName,
        lastName: req.body.user.lastName,
        email: req.body.user.email,
        country: req.body.user.country,
        city: req.body.user.city
    });
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        } else {
            sendEmail(user);
        }

        res.status(200).json({
            message: 'User created',
            obj: result
        });
    });
}

}