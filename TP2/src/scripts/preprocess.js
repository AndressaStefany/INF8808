
/**
 * Sanitizes the names from the data in the "Player" column.
 *
 * Ensures each word in the name begins with an uppercase letter followed by lowercase letters.
 *
 * @param {object[]} data The dataset with unsanitized names
 * @returns {object[]} The dataset with properly capitalized names
 */
export function cleanNames (data) {
  // TODO: Clean the player name data
  data.map(dataCSV => {
    const capLetter = dataCSV.Player.charAt(0).toUpperCase()
    const lwrLetters = dataCSV.Player.slice(1).toLowerCase()
    dataCSV.Player = capLetter + lwrLetters
  })

  return data
}

/**
 * Finds the names of the 5 players with the most lines in the play.
 *
 * @param {object[]} data The dataset containing all the lines of the play
 * @returns {string[]} The names of the top 5 players with most lines
 */
export function getTopPlayers (data) {
  // TODO: Find the five top players with the most lines in the play
  var top5names = []
  var top5namesOnly = []
  const nameResultMap = new Map()
  data.forEach(dataCSV => {
    if (nameResultMap.has(dataCSV.Player)) nameResultMap.set(dataCSV.Player, nameResultMap.get(dataCSV.Player) + 1)
    else nameResultMap.set(dataCSV.Player, 1)
  })

  const nameResultMapSorted = new Map([...nameResultMap.entries()].sort((a, b) => b[1] - a[1]))
  const array = Array.from(nameResultMapSorted, ([name, result]) => ({ name, result }))

  top5names = array.slice(0, 5)
  for (var i in top5names) {
    top5namesOnly.push(top5names[i].name)
  }
  return top5namesOnly
}

/**
 * Transforms the data by nesting it, grouping by act and then by player, indicating the line count
 * for each player in each act.
 *
 * The resulting data structure ressembles the following :
 *
 * [
 *  { Act : ___,
 *    Players : [
 *     {
 *       Player : ___,
 *       Count : ___
 *     }, ...
 *    ]
 *  }, ...
 * ]
 *
 * The number of the act (starting at 1) follows the 'Act' key. The name of the player follows the
 * 'Player' key. The number of lines that player has in that act follows the 'Count' key.
 *
 * @param {object[]} data The dataset
 * @returns {object[]} The nested data set grouping the line count by player and by act
 */
export function summarizeLines (data) {
  // TODO : Generate the data structure as defined above
  const acts = []
  const summarizedData = []

  // [1, 2, 3, 4, 5]
  data.forEach(dataCSV => {
    if (!acts.includes(dataCSV.Act)) acts.push(dataCSV.Act)
  })

  acts.forEach(act => {
    const players = []
    const playerCount = []

    data.forEach(dataCSV => {
      if (dataCSV.Act === act) {
        if (!players.includes(dataCSV.Player)) {
          players.push(dataCSV.Player)
          playerCount.push({ Player: dataCSV.Player, Count: 1 })
        } else {
          playerCount.forEach(count => {
            if (count.Player === dataCSV.Player) count.Count++
          })
        }
      }
    })

    summarizedData.push({ Act: act, Players: playerCount })
  })

  return summarizedData
}

/**
 * For each act, replaces the players not in the top 5 with a player named 'Other',
 * whose line count corresponds to the sum of lines uttered in the act by players other
 * than the top 5 players.
 *
 * @param {object[]} data The dataset containing the count of lines of all players
 * @param {string[]} top The names of the top 5 players with the most lines in the play
 * @returns {object[]} The dataset with players not in the top 5 summarized as 'Other'
 */
export function replaceOthers (data, top) {
  // TODO : For each act, sum the lines uttered by players not in the top 5 for the play
  // and replace these players in the data structure by a player with name 'Other' and
  // a line count corresponding to the sum of lines
  data.forEach(act => {
    const newPlayers = []
    var countOther = 0
    act.Players.forEach(player => {
      if (top.includes(player.Player)) {
        newPlayers.push(player)
      } else {
        countOther += player.Count
      }
    })
    newPlayers.push({ Player: 'Other', Count: countOther })
    act.Players = newPlayers
  })
  return data
}
