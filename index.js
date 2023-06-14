// Code your solution in this file!


const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function returnFirstTwoDrivers(array) {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = function returnLastTwoDrivers(array) {
  return array.slice(-2);
};

const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]
console.log(selectingDrivers[1](drivers));

function createFareMultiplier(number) {

    return function(){
        return number*number
    }
}

function fareDoubler(fair){
    return fair*2
}

function fareTripler(fair){
    return fair* 3
}


function  selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
  return  returnFirstTwoDrivers(arrayOfDrivers)
}