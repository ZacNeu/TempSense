import subprocess
import time
import json
import requests

key = '3010a4137160bda6d8b4750c2731ec2d'
url = requests.get('http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid='+key)
weather = json.loads(url.text)

while True:    
    subprocess.call("./update_temperature.sh")

    file = open("temperature.txt", "r")
    hex = file.readline().strip()
    timestamp = file.readline().strip()
    file.close()

    celsius = int(hex, 16)
    fahrenheit = celsius * 0.8 + 32
    print(timestamp + ": " + str(celsius) + "°C or", str(fahrenheit) + '°F')
    print weather['main']['temp'],"Temperature"
    time.sleep(1)
