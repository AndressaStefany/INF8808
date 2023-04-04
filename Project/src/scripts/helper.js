/**
 * Sets the size of the SVG canvas containing the graph.
 *
 * @param {number} width The desired width
 * @param {number} height The desired height
 */
export function setCanvasSize (width, height) {
  // the id (#) can be change
  d3.select('#map').select('svg')
    .attr('width', width)
    .attr('height', height)
}