# TempSense
Temperature Sensor made for Raspberry Pi, built for COMP264 at Loyola. 

## Setup

### Temperature Sensor

Use this video as a reference to setup the TC74 Temperature Sensor: https://youtu.be/gI_yYXKaehw?t=1500

### Software

To start, install the necessary libraries referenced in this video: https://youtu.be/gI_yYXKaehw?t=2008

Then, clone this repository locally. You'll need to change the address in `update_temperature.sh` to match the address of your temperature sensor.

To setup the web server, you'll need to run `apt-get install node` and `apt-get install npm`. Then, run `npm i` (or `npm install`) to install the necessary packages.

### Usage

#### Command Line
Simply run `python3 main.py` to start the program.

#### Web Server
Run `npm start` to start up the web server. The site will be available at your Raspberry Pi's local IP address at the port specified in the console output.

## Resources

- https://www.studentcompanion.co.za/interfacing-the-tc74-i2c-digital-thermal-sensor-with-pic-microcontroller-xc8/
- https://www.youtube.com/watch?v=gI_yYXKaehw&feature=youtu.be

`<script src="https://gist.github.com/TechplexEngineer/9373080.js"></script>`
