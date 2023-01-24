/**
 * Defines the contents of the tooltip.
 *
 * @param {object} d The data associated to the hovered element
 * @returns {string} The tooltip contents
 */
export function getContents (d) {
  const tooltip = d3.create()

  tooltip.append('div')
    .append('text')
    .style('font-size', '24px')
    .style('font-family', 'Grenze Gotish')
    .style('font-weight', 'bold')
    .text(d.target.__data__.Player.Player)
    .append('p')

  tooltip.append('div')
    .append('text')
    .style('font-weight', 'normal')
    .text(d.target.__data__.Player.Count)
    .append('b')
    .style('font-weight', 'normal')
    .text(' lines')

  return tooltip.html()
}
