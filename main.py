import subprocess
import time

while True:    
    subprocess.call("./update_temperature.sh")

    file = open("temperature.txt", "r")
    hex = file.readline().strip()
    timestamp = file.readline().strip()
    file.close()

    celsius = int(hex, 16)
    print(timestamp + ": " + str(celsius) + "°C")

    time.sleep(1)
