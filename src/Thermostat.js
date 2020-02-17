'use strict'; 

class Thermostat {
    constructor(minimumTemp = 10) {
        this.temperature = 20
        this.MINIMUMTEMP = minimumTemp
        this.powerSavingMode = true
    }

    increaseTemperature = () => {
        return this.temperature >= this.checkMaximumTemperature() ? "Error: Max temp reached" : this.temperature += 1
    }

    decreaseTemperature = () => {
        return this.temperature === this.MINIMUMTEMP ? "Error: Minimum temp is 10" : this.temperature -= 1
    }

    checkMaximumTemperature = () => {
        return this.powerSavingMode ? 25 : 32
    }
}
