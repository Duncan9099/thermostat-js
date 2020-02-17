'use strict'; 

describe("Thermostat", function() {
    let thermostat; 

    beforeEach(function() {
        thermostat = new Thermostat
    })

    describe("increaseTemperature", function() {
        it("increases by 1", function() {
            expect(thermostat.temperature).toEqual(20)
            thermostat.increaseTemperature() 
            expect(thermostat.temperature).toEqual(21)
        })

        it("if power saving on max temp is 25", function() {
            expect(thermostat.powerSavingMode).toEqual(true)
            for (let i = 0; i < 5; i++) {
                thermostat.increaseTemperature()
            }
            expect(thermostat.increaseTemperature()).toEqual("Error: Max temp reached")
            expect(thermostat.temperature).toEqual(25)
        })
    })

    describe("decreaseTemperature", function() {
        it("decreases by 1", function() {
            expect(thermostat.temperature).toEqual(20) 
            thermostat.decreaseTemperature() 
            expect(thermostat.temperature).toEqual(19)
        })

        it("cannot go below 10", function() {
            for (let i = 0; i < 10; i++) {
                thermostat.decreaseTemperature()
            }
            expect(thermostat.decreaseTemperature()).toEqual("Error: Minimum temp is 10")
            expect(thermostat.temperature).toEqual(10)
        })
    })

    describe("set power saving mode", function() {
        it("sets power saving to false", function() {
            thermostat.switchPowerSavingMode() 
            expect(thermostat.powerSavingMode).toEqual(false)
        })

        it("sets power saving to false then to true", function() {
            thermostat.switchPowerSavingMode() 
            thermostat.switchPowerSavingMode() 
            expect(thermostat.powerSavingMode).toEqual(true)
        })
    })

    describe("reset", function() {
        it("resets temperature to 20", function() {
            expect(thermostat.temperature).toEqual(20)
            thermostat.increaseTemperature() 
            expect(thermostat.temperature).toEqual(21)
            thermostat.reset()
            expect(thermostat.temperature).toEqual(20)
        })
    })

    describe("check usage", function() {
        it("is low usage", function() {
            for (let i = 0; i < 4; i++) {
                thermostat.decreaseTemperature()     
            }
            expect(thermostat.checkUsage()).toEqual("low-usage")
        })

        it("is medium usage", function() {
            expect(thermostat.checkUsage()).toEqual("medium-usage")
        })

        it("is high usage", function() {
            for (let i = 0; i < 10; i++) {
                thermostat.increaseTemperature()     
            }
            expect(thermostat.checkUsage()).toEqual("high-usage")
        })
    })
})