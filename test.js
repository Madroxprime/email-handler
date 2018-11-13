let transporter = require('./index.js');

let options = {
    from : 'andersj5@fargoschools.org',
    to : 'andersj5@fargoschools.org',
    subjext : 'Test',
    text : 'THis is a test of my node mailer tool'
}

transporter.sendMail(options, function(err,info){
    if (err) {
        console.log(err);
    }
    if(info){
        console.log(info);
    }
});
