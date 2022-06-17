/*

Manage a game player's High Score list.

Your task is to build a high-score component of the classic Frogger game,
one of the highest selling and addictive games of all time, and a classic of the arcade era.
Your task is to write methods that return the highest score from the list,
the last added score and the three highest scores.

*/

export class HighScores {
  constructor(scoresList) {
    this.scoresList = scoresList
  }

  get scores() {
    return this.scoresList
  }

  get latest() {
    return this.scoresList.slice(-1)[0]
  }

  get personalBest() {
    return Math.max(...this.scoresList)
  }

  get personalTopThree() {
    if (this.scoresList.length <= 1) return this.scoresList
    if (this.scoresList.length === 2) return this.scoresList.sort((numA, numB) => numB - numA)
    return this.scoresList.sort((numA, numB) => numB - numA).slice(0, 3)
  }
}
