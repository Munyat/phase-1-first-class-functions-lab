// Code your solution is in this file!
const drivers = ['Antonia','Nuru','Amari','Mo'];
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(2, 4);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fare){
    return function fareQuintupler(fare){
        return fare * 5;
    };
}
const fareDoubler = function(fare){
    return fare * 2;
}
const fareTripler = function(fare){
    return fare * 3;
}
const selectDifferentDrivers = function (drivers, funct){
    return funct(drivers)
}