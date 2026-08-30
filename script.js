//Phase 1: Character Creation (Bindings & Variables)

/*Define three contants (const) that cannot change:
the character's name
their homeWorld
their baseClass (e.g., "Warrior or "Mage").*/

const characterName = "Chad";
const homeWorld = "ESPN";
const baseClass = "Athlete";

/*Define two variables (let) that can change:
currentHealth and experiencePoints.
Initialize these with appropriate values 
(e.g., 100 for health, 0 for experience).*/

let currentHealth = 100;
let experiencePoints = 0;

/*Use console.log to print a summary of the character’s
starting stats.*/

console.log("Chad's current health is: " + currentHealth + " and his XP is " + experiencePoints);

//Journal Prompt 1

//Phase 2: Power Calculations (Arithmetic & Assignment Operators)
//The game needs a way to calculate “Power Level.”

//*Create a new variable called powerLevel.

let powerLevel;

//Calculate it using a formula: (currentHealth * 0.5) + (experiencePoints * 10).

powerLevel = (currentHealth * 0.5) + (experiencePoints * 10);

/*Now, simulate finding a “Health Potion.” Use compound assignment operators (like +=) to increase the currentHealth by 20 and the experiencePoints by 50.
Update your console.log to show the new health and the updated power level.*/

currentHealth += 20;
experiencePoints += 50;

powerLevel = (currentHealth * 0.5) + (experiencePoints * 10);
console.log("Health is now " + currentHealth + " and XP is now " + experiencePoints + "." + " Power level is at " + powerLevel + ".");

//Journal Prompt 2
