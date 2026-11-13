const bedrock = require('bedrock-protocol');
const express = require('express');

// --- 1. Web Server (Koyeb ko active rakhne ke liye) ---
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bedrock AFK Bot is running 24/7!');
});

app.listen(PORT, () => {
    console.log(`Web server is listening on port ${PORT}`);
});

// --- 2. Minecraft Bedrock Bot Setup ---
function createBot() {
    const bot = bedrock.createClient({
        host: 'happysmp.playserver.pro', // Small letters me server IP
        port: 19132,                     // Aapka server Port
        username: 'BedrockBot',          // Bot ka naam jo game me dikhega
        offline: true                    // Cracked/offline server ke liye true
    });

    bot.on('spawn', () => {
        console.log("Bedrock Bot server me successfully join ho gaya hai!");
    });

    bot.on('disconnect', (packet) => {
        console.log("Bot disconnect ho gaya:", packet);
        console.log("5 second me dobara connect ho raha hai...");
        setTimeout(createBot, 5000);
    });

    bot.on('error', (err) => {
        console.log("Error aaya:", err);
    });
}

createBot();
