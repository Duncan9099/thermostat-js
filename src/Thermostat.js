'use strict'; 

class Thermostat {
    constructor(minimumTemp = 10) {
        this.temperature = 20
        this.MINIMUMTEMP = minimumTemp
    }

    increaseTemperature = () => {
        this.temperature += 1
    }

    decreaseTemperature = () => {
        return this.temperature === this.MINIMUMTEMP ? "Error: Minimum temp is 10" : this.temperature -= 1
    }
}
