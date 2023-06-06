import express from 'express';

import sendMessage from './functions/sendMessage.js';
import sendEmail from './functions/sendMail.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.post('/message', async (req, res) => {

   let { message } = req.body;
   if(!message) {
      message = `
         Olá Fulano, tudo bem? 
         Mensagem padrão!
      `.trim()
   }

   const response = await sendMessage(message);
   res.json({message_sent: message, ...response});

});


app.


app.listen(port, () => {
   console.log(`Server running at http://localhost:${port}`);
});