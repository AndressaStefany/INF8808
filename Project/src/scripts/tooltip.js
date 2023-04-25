/**
 * Viz 3:
 * Defines the contents of the tooltip.
 *
 * @param {object} d The data associated to the hovered element
 * @returns {string} The tooltip contents
 */
export function getContentsViz3 (d) {
  const createDataItem = (label, value) => ({ label, value })
  const data = [
    createDataItem('Player: ', d.player),
    createDataItem('Year: ', d.year),
    createDataItem('Games: ', d.games),
    createDataItem('Minutes: ', d.minutes),
    createDataItem('Position: ', d.position)
  ]

  const createContent = (data) => {
    const container = d3.create('div')
    data.forEach(({ label, value }) => {
      const itemContainer = container.append('div')
      itemContainer.append('span')
        .attr('class', 'tooltip-label')
        .text(label)
      itemContainer.append('span')
        .attr('class', 'tooltip-value')
        .text(value)
    })
    return container.html()
  }

  return createContent(data)
}

/**
 * Viz 3:
 * Defines the contents of the tooltip.
 *
 * @param {object} d The data associated to the hovered element
 * @returns {string} The tooltip contents
 */
export function getContentsViz2 (d) {
  // Assuming the 'd' parameter is an object representing a player
  // and has properties such as 'name' and 'Years' representing player's name and years respectively
  const playerName = d.Player
  const playerYears = d.Years.join(', ') // Assuming 'Years' is an array of years

  // Return the tooltip content as a string
  return 'Player: ' + playerName + '<br/>' + 'Years: ' + playerYears
}
