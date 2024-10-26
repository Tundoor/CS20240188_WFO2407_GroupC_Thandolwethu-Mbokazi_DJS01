/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

const timeInHrs = time/3600

const d2 = distance + (velocity * timeInHrs) //calcultes new distance
const rf = fuel - (fbr*time) //calculates remaining fuel


const vel2 = calcNewVel(velocity, acceleration, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel (velocity, acceleration, time)  { 
  return velocity + ((acceleration * time) * 3.6)
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);



/* New Velocity: Approximately 48880 km/h after correction.
New Distance: Approximately 10000 km after correction.
Remaining Fuel: Approximately 3,200 kg after correction.
*/


