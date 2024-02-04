function findMatching(driversList, matchingString) {
  return driversList.filter((driversName) => {
    return driversName.toUpperCase() === matchingString.toUpperCase()
  })
}

function fuzzyMatch(driversList, matchingString) {
  return driversList.filter((driversName) => {
    return driversName.slice(0, matchingString.length) === matchingString
  })

}

function matchName(driversList, matchingString = 'Bobby') {
  return driversList.filter((driversName) => {
    return driversName.hometown && driversName.name  === matchingString
  })
}