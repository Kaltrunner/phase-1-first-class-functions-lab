//Code your solution in this file!
// const returnFirstTwoDrivers = function (driver) {
//     return driver.slice(0,2);
// }

// const returnLastTwoDrivers = function (driver) {
//     return driver.slice(-2);
// }

// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// const fareMultiplier = createFareMultiplier
// function createFareMultiplier(num1) {
//     return function (num2){
//         return num1 * num2;
//     }
// }

// function fareDoubler(num3) {
//     return num3 * 2;
// }

// function fareTripler(num4) {
//     return num4 * 3;
// }

// function selectDifferentDrivers(arrayOfDrivers, newFunction) {
//     return newFunction(arrayOfDrivers);
// }





//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//  const returnFirstTwoDrivers = function(drivers){
//     return drivers.slice(0,2);
//  }

//  const returnLastTwoDrivers = function(drivers){
//     return drivers.splice(2,3)
//  }

//  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//  const createFareMultiplier = function (multiplyValue) {
//   return function (value) {
//     return multiplyValue * value;
//   };
// };

// const fareDoubler = createFareMultiplier(2);

// const fareTripler = createFareMultiplier(3);

// const selectDifferentDrivers = function (drivers, driversToReturn) {
//   return driversToReturn(drivers);
// };



const drivers = (['Antonia', 'Nuru', 'Amari', 'Mo']);

const returnFirstTwoDrivers = drivers => {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = drivers => {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplyNumber) => {
    return Number1 => {
        return Number1 * multiplyNumber;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
    
const selectDifferentDrivers = (drivers, returnLastTwoDrivers) => {
    return returnLastTwoDrivers(drivers);
}