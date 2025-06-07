const returnFirstTwoDrivers = function(driverList=['Antonia', 'Nuru', 'Amari', 'Mo']){
    return driverList.slice(0,2);
}

const returnLastTwoDrivers = function(driverList=['Antonia', 'Nuru', 'Amari', 'Mo']){
    return driverList.slice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers 
]

function createFareMultiplier(number){
    return function(fare){
        return fare * number;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverList=['Antonia', 'Nuru', 'Amari', 'Mo'], argument){
    if (argument==returnFirstTwoDrivers){
        return returnFirstTwoDrivers();
    }
    if (argument==returnLastTwoDrivers){
        return returnLastTwoDrivers();
    }
}