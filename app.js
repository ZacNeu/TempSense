// Load the http module to create an http server.
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const fs = require('fs')
const CronJob = require('cron').CronJob;
const exec = require('child_process').exec;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));

const job = new CronJob('* * * * * *', () => {
  const script = exec('sh update_temperature.sh')
}, null, true, 'America/New_York')
job.start();

router.get("/", (req, res) => {
  // read contents of the file
  const data = fs.readFileSync('temperature.txt', 'UTF-8');

  // split the contents by new line
  const lines = data.split(/\r?\n/);

  const c = parseInt(lines[0]);
  const f = c * 1.8 + 32
  const timestamp = lines[1];
  
  res.render("index", { c, f, timestamp });
});

const PORT = process.env.port || 3000;
app.use("/", router);
app.listen(PORT)

 
// Put a friendly message on the terminal
console.log(`Server running at http://127.0.0.1:${PORT}/`);
