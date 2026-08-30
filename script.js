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

//Phase 3: Training Montage (Loops)
//Instead of manually updating numbers, we will now use loops to simulate the passage of time and effort.

//The hero decides to train for 5 days. Create a for loop that runs 5 times.

for (let dayCount = 0; dayCount < 5; dayCount++) {
    
    //Inside the loop, increase experiencePoints by 20 for each day of training.
    experiencePoints += 20;

    //Use console.log inside the loop to print a message like "Day X: Training hard... XP is now Y".
    console.log("Day " + (dayCount + 1) + ": Moving some major lbs...XP is now " + experiencePoints);
}

//After the loop finishes, print the final total of experiencePoints.
console.log("Chad's XP is holding at a " + experiencePoints + "...for now.");

//Journal Prompt 3
