/**
//  * ! Part 1: Humble Beginnings
//  **/

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    // add a companion to Robin
    companion: {
      name: "Leo",
      type: "Cat",
      //Add a companion to leo
      companion: {
        name: "Frank",
        type: "Flea",
        inventory: ["small hat", "sunglasses"]
      }
    }
  }
  console.log(adventurer);
  console.log(adventurer.companion);
  console.log(adventurer.companion.companion);
  
  
  /**
   * ! Part 2: Class Fantasy
   **/
  class Character {
    constructor (name) {
      this.name = name;
      this.max_health = 100;
      this.inventory = [];
    }
    roll(mod = 0) {
const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log('${this.name} rolled a ${result}');
  }
 }
  //Roll a 20-sided die
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
// Creating companions
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// console.log(robin)
// console.log(robin.companion.type)
// robin.companion.companion.roll()


//  // Part 3: Class Features
// class Adventurer extends Character {
//     constructor (name, role, alignment) {
//       super(name);
//       // Adventurers have specialized roles.
//       this.role = role;
//       // Every adventurer starts with a bed and 50 gold coins.
//       this.inventory.push("bedroll", "50 gold coins");
//       this.alignment = alignment;
//     }
//     // Adventurers have the ability to scout ahead of them.
//     scout () {
//       console.log(`${this.name} is scouting ahead...`);
//       super.roll();
//     }
//     investigate() {
//         console.log(`${this.name} is investigating...`);
//         super.roll();
//     }
//     charm () {
//         console.log(`${this.name} is putting on the charm...`);
//         super.roll();
//     }
//   }

//   let Keothi = new Adventurer('Keothi', 'Rogue', 'Lawful Neutral');
//   // change the declaration of Robin and the companions to use the new Adventurer and Companion classes.
//   let Robin = new Adventurer('Robin', 'Fighter', 'Chaotic Good');// figure out how to make it run with the proper inventory
//   console.log(Keothi.investigate());
// Keothi.charm();
// Keothi.investigate();
// Robin.scout();
// console.log(Robin);
// console.log('--------------')

// // Now, let's change the declaration of Robin and the companions to use the new classes.

// class Companions extends Character{
//     constructor(name, type){
//         super(name);
//         this.type = type;
//     }
//     investigate(){
//         console.log(`${this.name} is investigating...`);
//         super.roll();
//     }
//     stealth(){
//         console.log(`${this.name} is trying to be stealthy...`);
//         super.roll();
//     }
// }
// let Fluffy = new Companions('Fluffy', 'void dog');
// let Beastie = new Companions('Beastie','raven')
//   //change the declaration of Robin and the companions to use the new Adventurer and Companion classes.
// let Leo = new Companions('Leo', 'cat')
// let Frank = new Companions('Frank', 'flea'); // figure out how to make it run with the proper inventory
// console.log(Fluffy);
// console.log(Beastie);
// Fluffy.stealth();
// Beastie.investigate();
// console.log(Companions);
// Leo.investigate();
// Frank.stealth();
// console.log(Frank);


// // Now, let's change the declaration of Robin and the companions to use the new classes.
// // (Assuming Robin is an adventurer and has a companion named Sparrow)
// const sparrowCompanion = new companion("Sparrow", "Songbird");

// // Continue their epic journey!
//     constructor(type, coins, role, legs, companion, wish, weapon); {
//       type(type);
//       this.isAgile = true;
//       this.legs = legs;
//       this.strength = 100;
//       this.inventory.push("bedroll", "50 gold coins", "toilet paper");
//       this.coins = this.getCoins();
//       const rollResult = this.roll();
//       this.wish = adventurer.WISHES[rollResult % 10];
  
//       if (!adventurer.WISHES.includes(wish)) {
//         throw new Error("Sorry, I can't grant that wish");
//       }
  
//       if (!adventurer.ROLES.includes(role)) {
//         throw new Error("Role is not in the ROLES");
//       }
//       this.role = role;
//       this.companion = companion;
//       this.weapon = weapon;
//       this.scout = this.scout();
//       this.move = this.move();
//       this.preoccupied = this.isPreoccupied();
//     }
//     scout(); {
//       //player checks out the terrain
//       let movement = this.move();
//       return `${this.name} is scouting ahead, -${movement}.`;
//     }
  
//     duel(adventurer); {
//       let round = 1;
  
//       // If a character is peeing, grooming, sexing, resting, or pooping, then they are occupied and can't fight
//       if (this.isPreoccupied() || adventurer.isPreoccupied()) {
//         return "We can't duel right now, we are occupied.";
//       } else {
//         //TODO:Update the health of the characters also!!!
//         while (this.health > 50 && adventurer.health > 50) {
//           // Both characters make a roll
//           const adventurerRoll = this.roll();
//           const opponentRoll = adventurer.roll();
//         }
//           // Ask losing Character if they want to use a weapon after a certain amount of health left
  
//           // Subtract health based on lowest rolls
//           if (adventurerRoll > opponentRoll) {
//             adventurer.health -= 1;
//           } else if (adventurerRoll === opponentRoll) {
//             adventurer.health -= 0;
//           } else {
//             this.health -= 1;
//         }
  
//           // Subtract health based on weapon used
  
//           // Log the result of the round
//           console.log(
//             `Round ${round} ${this.name}'s health: ${this.health}, ${adventurer.name}'s health: ${adventurer.health}\n`,
//           );
//           round++;
//         }
//       }
  
//         // Determine a winner
//         if (this.health > adventurer.health) {
//           return `${this.name} is the winner with health of ${this.health}`;
//         } else {
//           return `${adventurer.name} is the winner with health of ${adventurer.health} `;
//         }
  
  // // /**
  // //  * ! Part 4: Class Uniforms
  // //  **/
  // class character {
  //   static MAX_HEALTH = 100;

  //   constructor(name) {
  //     this.name = name;
  //     this.health = character.MAX_HEALTH;
  //     this.inventory = [];
  //   }
  // }

  // // //create static roles in the adventurer's class
  //  class Adventurer {'externds'}; class character  {
  //   static ROLES = ["Fighter", "Healer", "Wizard"];

  //   constructor(name, role) {
  //     super(name);
  //     if (!AdventurerFactory.ROLES.includes(role)) {
  //       throw new Error('Invalid role: ${role}. valid roles are: ${Adventurer.ROLES.join(",")}');
  //     }
  //     this.role = role;
  // this.inventory.push("bedroll", "50 gold coins");
  //   }
  //   scout() {
  //     console.log('${this.name} is scouting ahead...');
  //     super.roll()
  //   };
  // }
  /**
  //  * ! Part 5: Gather Your Party
  //  **/
  class AdventurerFactory {
    constructor(role) {
      this.role = role;
      this.adventurers = [];
    }
    generate(name) {
      const newAdventurer =  Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex(index) {
      return this.adventurers[index];
    }
    findByName(name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
    const Healer = healers.generate("");
  
  // /**
  //  * ! Part 6:  Developing Skills