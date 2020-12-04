import subprocess
import time


while True:    
    subprocess.call("./update_temperature.sh")

    file = open("temperature.txt", "r")
    hex = file.readline().strip()
    timestamp = file.readline().strip()
    file.close()

    celsius = int(hex, 16)
    fahrenheit = celsius * 1.8 + 32
    print(timestamp + ": " + str(celsius) + "°C or", str(fahrenheit) + '°F')

    time.sleep(1)
