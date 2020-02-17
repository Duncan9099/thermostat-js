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