const sendMessage = async (messageBody) => {

   const url   = "https://graph.facebook.com/v16.0/110626168721258/messages"
   const token = "Bearer EAANKETih6UEBAJwXPwO3BZCXw8VH3N4kkES8FdGZCrnXOZCagNZAKQEZCTPJi4qeCsW3dcrPkn8uZB1E7pTeewZAkCCIA2YFTIHZAj6gyh7KQwZCtgeXfvr5XFksKqbUOX6QO84CjwV3zvipzvzBPU0hPKMxCavLREouZBfOPkkLhJQI0KG5DH5mCFTQqxbX3ytvQiIW83ZCnh9HAZDZD"
   
   const messageTo   = "5521974480796"

   const response = await fetch(url, {
      method: 'POST',
      headers: {
         'Authorization': token,
         'Content-type': 'application/json',
      },
      body: JSON.stringify({
         messaging_product: "whatsapp", 
         recipient_type: "individual",
         to: messageTo,
         type: "text",
         text: {
            "preview_url": false,
            body: messageBody
         }
         
      })
   })

   return response.json();
};

export default sendMessage;