const express = require("express");
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json({limit:'50mb'})); 
app.listen(4000, () => console.log(`Example app listening on port port!m  and database`))

app.get('/', (req, res) => {

     return res.send("wwww")
}
)

app.post('/data', async(req, res) => {
  // console.log("sss",req.body.base64data)
  var nodemailer = require('nodemailer');
  var inlineBase64 = require('nodemailer-plugin-inline-base64');
var cat =req.body.base64data

console.log(cat)
 var  transporter = nodemailer.createTransport({
    // service: 'shubharambhproductions.com',
    
    host: "shubharambhproductions.com",
    port: 465,
    
    secure: true, 
    auth: {
      user: 'it@shubharambhproductions.com',
      pass: 'Niks1995@'
    },
    tls: {
      rejectUnauthorized:false
  }
  }).use('compile', inlineBase64({cidPrefix: 'somePrefix_'}));  
  var mailOptions = {
    from: 'it@shubharambhproductions.com',
    to: 'thinlimbsworking@gmail.com',
    subject: 'Sending Email using Node.js',
    // html: `<img src=${ff}/>`,
    text: 'That was easy!',
    attachments: [
      {   // encoded string as an attachment
        filename: 'cat.jpg',
        content: cat.split("base64,")[1],
        encoding: 'base64'
      }
   ]
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      return res.send("Email sent:")
    }
  })
}
)
