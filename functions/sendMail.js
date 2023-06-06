import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

const sendEmail = (req, res) => {
   
   dotenv.config();
   const { MAIL_ADDRESS, MAIL_PASSWORD } = process.env
   
   const transporter = nodemailer.createTransport({
      service: 'outlook',
      auth: {
         user: MAIL_ADDRESS,
         pass: MAIL_PASSWORD
      }
   });

   const mailBody = `
      Bateu requisição no webhook hein! <br><br>

      Objeto request: ${JSON.stringify(req)}
   `

   const mailOptions = {
      from: MAIL_ADDRESS,
      to: 'andreluismoura22@gmail.com',
      subject: 'Webhook whatsapp acionado!',
      text: 'Webhook whatsapp acionado!',
      html: mailBody
   };

   transporter.sendMail(mailOptions, (error, info) => {
      if(error) {
         console.log(error);
         return;
      }
   
      console.log(`Email sent!: ${info.response}`);
   });
}

export default sendEmail;