
// Given 'statistics' Object
let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

// Only print out the value of the property only if  the property starts with
// letter r or if the value of the property is an odd number.
for (const car in statistics) {
  if (`${car}`.charAt(0) == 'r' || (`${statistics[car]}` % 2) != 0) {
    console.log(`${statistics[car]}`)
  }
}