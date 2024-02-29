const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/birthday", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:wght@200&display=swap" rel="stylesheet">
            <title>Birthday countdown timer</title>
            <style>
        * {
            font-family: "Lato", sans-serif;
            font-weight: 300;
            font-style: normal;
        }
        body {
            text-align: center;
            background-image: url('https://flagcdn.com/dk.svg');
            background-size: cover; 
            background-repeat: no-repeat; 
            background-position: center; 
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
                    
                }
                .date {
                    padding-bottom: 20px;
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
                    background-color:#B72B35;
                    color: #fff;
                    cursor: pointer;
                }
                button:hover {
                    background-color: white;
                    color:#B72B35;
                }
                #countdown {
                    font-size: 24px;
                    margin-bottom: 20px;
                }
                .section {
                    background-color: #FFFFFF; 
                    border: 5px solid #B72B35;
                    padding: 20px;
                    border-radius: 5px; 
                    max-width: 600px; 
                }
            </style>
        </head>
        <body>
        <section class="section">
            <h1>Birthday countdown timer</h1>

            <form action="/countdown" method="post">
                <label for="date">Select the birthday date and time:</label><br>
                <input type="datetime-local" id="date" name="date" required><br>
                <button type="submit">Start Countdown</button>
            </form>
            <div id="countdown"></div>
            </section>
        </body>
        </html>
    `);
});

app.post("/countdown", (req, res) => {
  const { date } = req.body;

  const now = moment();
  const selectedDate = moment(date, "YYYY-MM-DDTHH:mm");
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
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:wght@200&display=swap" rel="stylesheet">
            <style>
            * {
            font-family: "Lato", sans-serif;
            font-weight: 300;
            font-style: normal;
         
        }
        body {
            text-align: center;
            background-image: url('https://flagcdn.com/dk.svg');
            background-size: cover; 
            background-repeat: no-repeat; 
            background-position: center; 
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
       
        }
                #countdown {
                    font-size: 24px;
                    margin-bottom: 20px;
                         text-align: center;
               

                }
                section {
                    background-color: #FFFFFF; 
                    border: 5px solid #B72B35;
                    padding: 20px;
                    border-radius: 5px; 
                    max-width: 600px; 
                    margin: 0 auto; 
                    position: absolute; 
                    top: 50%; 
                    left: 50%; 
                    transform: translate(-50%, -50%); 
                }
                
            </style>
        </head>
        <body>
        <section>
            <h1>Birthday countdown</h1>
            <div id="countdown">${days} days or, ${hours} hours or, ${minutes} minutes or, ${seconds} seconds untill its your birthday!</div>
            </section>
        </body>
        </html>
    `);
});

module.exports = app;
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
