import { getContents } from './tooltip'

/**
 * Positions the x axis label and y axis label.
 *
 * @param {*} g The d3 Selection of the graph's g SVG element
 * @param {number} width The width of the graph
 * @param {number} height The height of the graph
 */
export function positionLabels (g, width, height) {
  const xLabel = g.select('.x.axis-text')
  xLabel.attr('x', width / 2).attr('y', height + 40)

  const yLabel = g.select('.y.axis-text')
  yLabel.attr('x', -40).attr('y', height / 2)
}

/**
 * Draws the circles on the graph.
 *
 * @param {object} data The data to bind to
 * @param {*} rScale The scale for the circles' radius
 * @param {*} colorScale The scale for the circles' color
 */
export function drawCircles (data, rScale, colorScale) {
  d3.select('#graph-g').append('g').attr('id', 'circles')

  d3.select('#circles')
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('r', d => rScale(d.Population))
    .attr('fill', d => colorScale(d.Continent))
    .attr('fill-opacity', 0.7)
    .attr('stroke', 'white')
}

/**
 * Sets up the hover event handler. The tooltip should show on on hover.
 *
 * @param {*} tip The tooltip
 */
export function setCircleHoverHandler (tip) {
  const circles = d3.select('#circles').selectAll('circle')

  circles.on('mouseover', (event, data) => {
    const circle = d3.select(data)._groups[0][0]
    const content = getContents(circle)

    d3.select(event.currentTarget).style('opacity', 1)
    tip.offsetX = event.offsetX
    tip.offsetY = event.offsetY
    tip.html(content)
    tip.style('left', event.pageX + 'px')
      .style('top', event.pageY + 'px')
      .style('font-weight', 300)
      .show(data, event.currentTarget)
  })

  circles.on('mouseout', (event) => {
    d3.select(event.currentTarget).style('opacity', 0.7)
    tip.hide()
  })
}

/**
 * Updates the position of the circles based on their bound data. The position
 * transitions gradually.
 *
 * @param {*} xScale The x scale used to position the circles
 * @param {*} yScale The y scale used to position the circles
 * @param {number} transitionDuration The duration of the transition
 */
export function moveCircles (xScale, yScale, transitionDuration) {
  // TODO : Set up the transition and place the circle centers
  // in x and y according to their GDP and CO2 respectively

  const circles = d3.selectAll('#circles circle')

  circles.transition()
    .duration(transitionDuration)
    .attr('cx', d => xScale(d.GDP))
    .attr('cy', d => yScale(d.CO2))
}

/**
 * Update the title of the graph.
 *
 * @param {number} year The currently displayed year
 */
export function setTitleText (year) {
  // TODO : Set the title
  const title = `Data for year: ${year}`
  d3.select('#graph-g')
    .selectAll('.title')
    .text(title)
}
