const webPush = require('web-push');

// Genera las claves VAPID
const vapidKeys = webPush.generateVAPIDKeys();
console.log(vapidKeys);
