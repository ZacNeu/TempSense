# TempSense
Temperature Sensor made for Raspberry Pi, built for COMP264 at Loyola. 

Resources:<n>
https://www.studentcompanion.co.za/interfacing-the-tc74-i2c-digital-thermal-sensor-with-pic-microcontroller-xc8/
https://www.youtube.com/watch?v=gI_yYXKaehw&feature=youtu.be

<script src="https://gist.github.com/TechplexEngineer/9373080.js"></script>

## Temperature Sensor Setup

Use this video as a reference to setup the TC74 Temperature Sensor: https://youtu.be/gI_yYXKaehw?t=1500

## Installation

To start, install the necessary libraries referenced in this video: https://youtu.be/gI_yYXKaehw?t=2008

Then, clone this repository locally. You'll need to change the address in `update_temperature.sh` to match the address of your temperature sensor.

## Usage

Simply run `python3 main.py` to start the program.
