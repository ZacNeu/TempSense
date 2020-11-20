#!/bin/bash

sudo i2cget -y 1 0x48 > temperature.txt
date +"%D %T" >> temperature.txt
