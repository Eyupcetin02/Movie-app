const nodemailer = require("nodemailer")



const sendMail = async(req , res) =>{
 const { to, subject, text } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', 
            pass: 'your-email-password'  
        }
    });

     let mailOptions = {
        from: 'your-email@gmail.com', 
        to: to,
        subject: subject,
        text: text
    };


      try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending email');
    }

    

}