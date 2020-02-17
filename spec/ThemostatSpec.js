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
})