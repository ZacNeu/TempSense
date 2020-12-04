// Load the http module to create an http server.
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const fs = require('fs')
const CronJob = require('cron').CronJob;
const exec = require('child_process').exec;
const fetch = require('node-fetch')

// A key and API to get the current temperature of Chicago
const key = '3010a4137160bda6d8b4750c2731ec2d'

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));

const job = new CronJob('* * * * * *', () => {
  const script = exec('sh update_temperature.sh')
}, null, true, 'America/New_York')
job.start();

router.get("/", async (req, res) => {
  // read contents of the file
  const data = fs.readFileSync('temperature.txt', 'UTF-8');

  let c = 0;
  let f = 0;
  let timestamp = "Error fetching temperature data."

  // split the contents by new line
  const lines = data.split(/\r?\n/);

  if (lines.length === 3) {
    c = parseInt(lines[0]);
    f = c * 1.8 + 32
    timestamp = lines[1];
  }

  // TODO: Add temperature data from API
  const weatherRes = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid='+key)
  const weather = await weatherRes.json() 
  const api_c = Math.round((weather.main.temp - 273.15) * 10) / 10;
  const api_f = Math.round((api_c * 1.8 + 32) * 10) / 10;

  res.render("index", { api_c, api_f, c, f, timestamp });
});

const PORT = process.env.port || 3000;
app.use("/", router);
app.listen(PORT)

 
// Put a friendly message on the terminal
console.log(`Server running at http://127.0.0.1:${PORT}/`);
