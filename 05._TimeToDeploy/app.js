const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/birthday', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Birthday countdown timer</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                }
                h1 {
                    margin-bottom: 20px;
                }
                input[type="datetime-local"] {
                    width: 250px;
                    padding: 10px;
                    margin-bottom: 20px;
                    font-size: 16px;
                }
                button {
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                }
                #countdown {
                    font-size: 24px;
                    margin-bottom: 20px;
                }
            </style>
        </head>
        <body>
            <h1>Birhday countdown timer</h1>
            <form action="/countdown" method="post">
                <label for="date">Select the birthday date and time:</label><br>
                <input type="datetime-local" id="date" name="date" required><br>
                <button type="submit">Start Countdown</button>
            </form>
            <div id="countdown"></div>
        </body>
        </html>
    `);
});

app.post('/countdown', (req, res) => {
    const { date } = req.body;
    
    const now = moment();
    const selectedDate = moment(date, 'YYYY-MM-DDTHH:mm');
    const countdownDuration = moment.duration(selectedDate.diff(now));
    
    const days = Math.floor(countdownDuration.asDays());
    const hours = Math.floor(countdownDuration.asHours());
    const minutes = Math.floor(countdownDuration.asMinutes());
    const seconds = Math.floor(countdownDuration.asSeconds());
    
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Birthday countdown timer</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                }
                #countdown {
                    font-size: 24px;
                    margin-bottom: 20px;
                }
            </style>
        </head>
        <body>
            <h1>Countdown Timer</h1>
            <div id="countdown">${days} days or, ${hours} hours or, ${minutes} minutes or, ${seconds} seconds untill its your birthday!</div>
        </body>
        </html>
    `);
});

module.exports = app;
const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
