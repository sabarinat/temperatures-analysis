const mqtt = require('mqtt');

// Connect to the MQTT broker
const client = mqtt.connect('mqtt://mosquitto:1883'); // Adjust the URL as necessary

// When connected, subscribe to a topic
client.on('connect', () => {
    console.log('Connected to MQTT broker');
    setInterval(() => {
        const temperature = (Math.random() * 30 + 15).toFixed(1); // Random temperature between 15 and 45
        client.publish('home/livingroom/temperature', temperature, (err) => {
            if (!err) {
                console.log(`Published: ${temperature} to home/livingroom/temperature`);
            }
        });
    }, 5000);
    // Subscribe to a topic
    // client.subscribe('home/livingroom/temperature', (err) => {
    //     if (!err) {
    //         console.log('Subscribed to home/livingroom/temperature');

    //         // Publish a message every 5 seconds
    //          // Adjust the interval as needed
    //     } else {
    //         console.error('Subscription error:', err);
    //     }
    // });
});

// // Handle incoming messages
// client.on('message', (topic, message) => {
//     console.log(`Received message: ${message.toString()} from topic: ${topic}`);
// });

// Handle connection errors
client.on('error', (err) => {
    console.error('Connection error:', err);
});
