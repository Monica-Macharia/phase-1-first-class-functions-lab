// Code your solution in this file!
const returnFirstTwoDrivers = function(){
    let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return (drivers.slice(0, 2));
}

const returnLastTwoDrivers = function(){
    let drivers2 = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers2.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

let createFareMultiplier = function (val){
    return function fare (param1) 
    {
    return val * param1; 
};
}
  
let fareDoubler = createFareMultiplier (2);


let fareTripler = createFareMultiplier (3);

const selectDifferentDrivers = function (drivers, arrayOfDrivers){
        return arrayOfDrivers(drivers);
};

