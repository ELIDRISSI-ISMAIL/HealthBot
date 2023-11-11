const express = require('express');
const app = express();
const port = 3000; // You can choose any port you prefer

app.get('/', (req, res) => {
    // Use the res.sendFile() method to send the HTML file
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
