/*

For a game of Dungeons & Dragons,
each player starts by generating a character they can play with.
This character has, among other things, six abilities;
strength, dexterity, constitution, intelligence, wisdom and charisma.
These six abilities have scores that are determined randomly.
You do this by rolling four 6-sided dice
and record the sum of the largest three dice.
You do this six times, once for each ability.

Your character's initial hitpoints are 10 + your character's constitution modifier.
You find your character's constitution modifier
by subtracting 10 from your character's constitution, divide by 2 and round down.

Write a random character generator that follows the rules above.
For example, the six throws of four dice may look like:

  5, 3, 1, 6: You discard the 1 and sum 5 + 3 + 6 = 14, which you assign to strength.
  3, 2, 5, 3: You discard the 2 and sum 3 + 5 + 3 = 11, which you assign to dexterity.
  1, 1, 1, 1: You discard the 1 and sum 1 + 1 + 1 = 3, which you assign to constitution.
  2, 1, 6, 6: You discard the 1 and sum 2 + 6 + 6 = 14, which you assign to intelligence.
  3, 5, 3, 4: You discard the 3 and sum 5 + 3 + 4 = 12, which you assign to wisdom.
  6, 6, 6, 6: You discard the 6 and sum 6 + 6 + 6 = 18, which you assign to charisma.

Because constitution is 3, the constitution modifier is -4 and the hitpoints are 6.


Notes:

Most programming languages feature (pseudo-)random generators,
but few programming languages are designed to roll dice.
One such language is Troll.

*/

export const abilityModifier = score => {
  if (score < 3) throw new Error('Ability scores must be at least 3')
  if (score > 18) throw new Error('Ability scores can be at most 18')
  return Math.floor((score - 10) / 2)
}

export const rollDice = (diceThrows = 4, sides = 6) => {
  return [...new Array(diceThrows)].map(() => Math.floor(Math.random() * sides + 1))
}

export const abilityScore = rolls => {
  const lowestRollIndex = rolls.indexOf(Math.min(...rolls))
  const largestRolls = rolls.slice(0, lowestRollIndex).concat(rolls.slice(lowestRollIndex + 1))

  return largestRolls.reduce((acc, currentRoll) => acc + currentRoll, 0)
}

export class Character {
  constructor() {
    this.rolledStrength = Character.rollAbility()
    this.rolledDexterity = Character.rollAbility()
    this.rolledConstitution = Character.rollAbility()
    this.rolledIntelligence = Character.rollAbility()
    this.rolledWisdom = Character.rollAbility()
    this.rolledCharisma = Character.rollAbility()
    this.initialHitpoints = 10 + abilityModifier(this.rolledConstitution)
  }

  static rollAbility() {
    return abilityScore(rollDice())
  }

  get strength() {
    return this.rolledStrength
  }

  get dexterity() {
    return this.rolledDexterity
  }

  get constitution() {
    return this.rolledConstitution
  }

  get intelligence() {
    return this.rolledIntelligence
  }

  get wisdom() {
    return this.rolledWisdom
  }

  get charisma() {
    return this.rolledCharisma
  }

  get hitpoints() {
    return this.initialHitpoints
  }
}
