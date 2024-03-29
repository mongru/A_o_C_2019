/* 
    to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2
*/

const arrOfMass = [
  50811,
  128897,
  89996,
  149611,
  141114,
  135923,
  111930,
  92803,
  55111,
  114261,
  149401,
  121105,
  89980,
  146337,
  128900,
  51762,
  127032,
  57866,
  72814,
  70392,
  148287,
  51967,
  55537,
  61690,
  121273,
  122763,
  149371,
  130761,
  109332,
  102438,
  116529,
  83874,
  78013,
  75757,
  54385,
  65358,
  94688,
  123967,
  127817,
  115897,
  113593,
  99937,
  68431,
  113574,
  115052,
  54020,
  99599,
  133442,
  121435,
  117860,
  67436,
  54157,
  147123,
  54878,
  50710,
  105304,
  91777,
  122063,
  61713,
  79487,
  149776,
  79763,
  80542,
  86260,
  60863,
  83083,
  127211,
  146648,
  52711,
  90278,
  130288,
  77677,
  142894,
  106849,
  103233,
  95229,
  51169,
  127162,
  66614,
  134157,
  81357,
  143084,
  127415,
  99257,
  131490,
  117657,
  137687,
  85974,
  80270,
  104257,
  141006,
  51197,
  133995,
  62314,
  84078,
  141718,
  140422,
  140680,
  125301,
  59677
];

const getArrSum = arr => arr.reduce((acc, value) => acc + value)

function getSingleFuelAmount(mass) {
  let aux = 0
  let fuel = Math.floor(mass/3) - 2
  if (fuel > 6) {
    aux += getSingleFuelAmount(fuel)
  }
  aux += fuel
  return aux
}

const getTotalFuelAmount = (arr, cb) => {
  const arrOfFuel = arr.map(mass => cb(mass))
  const totalFuel = getArrSum(arrOfFuel)
  return totalFuel
}

// console.log(getSingleFuelAmount(14))
// console.log(getSingleFuelAmount(1969))
// console.log(getSingleFuelAmount(100756))

console.log(getTotalFuelAmount(arrOfMass, getSingleFuelAmount))