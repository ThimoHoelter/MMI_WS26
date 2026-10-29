const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')

describe("celsiusToFahrenheit()", function(){

    it('0 Celsius should be 32 Fahrenheit', function () {
        expect(apiTemperature.celsiusToFahrenheit(0)).to.equal(32);
    })

    it('100 Celsius should be 212 Fahrenheit', function () {
        expect(apiTemperature.celsiusToFahrenheit(100)).to.equal(212);
    })

    it('-40 Celsius should be -40 Fahrenheit', function () {
        expect(apiTemperature.celsiusToFahrenheit(-40)).to.equal(-40);
    })

});

describe("fahrenheitToCelsius()", function(){

    it('32 Fahrenheit should be 0 Celsius', function () {
        expect(apiTemperature.fahrenheitToCelsius(32)).to.equal(0);
    })

    it('212 Fahrenheit should be 100 Celsius', function () {
        expect(apiTemperature.fahrenheitToCelsius(212)).to.equal(100);
    })

});
