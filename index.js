// Code your solution here
function findMatching(drivers, string) {
   return drivers.filter(driver => {
        return driver.toUpperCase() === string.toUpperCase()
    })
}

function fuzzyMatch(drivers, string) {
    const size = string.length
    return drivers.filter(driver => {
        return driver.slice(0,size).toUpperCase() === string.toUpperCase()
    })
}

function matchName(drivers,string) {
    return drivers.filter(driver => {
        return driver.name === string
    })  
}