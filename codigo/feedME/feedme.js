const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'seu_email@gmail.com',
        pass: 'sua_senha'
    }
});

let mailOptions = {
    from: 'FeedME <feed.ME@gmail.com>',
    to: 'destinatario@gmail.com',
    subject: 'FeedME te convida',
    text: 'Venha descobrir os mais badalados restaurante da sua cidade!!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('E-mail enviado: ' + info.response);
    }
});
