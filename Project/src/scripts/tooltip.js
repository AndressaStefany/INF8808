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
