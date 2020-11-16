const accountSid = process.env['TWILIO_SID'];
const authToken = process.env['TWILIO_TOKEN'];
const client = require('twilio')(accountSid, authToken);

client.messages.create({
  from: '+12058556471',
  to: '+50377777777',
  body: 'This is my first message',
}).then((message) => console.log(message)).catch((error) => console.error(error));
