import { getContentsViz3 } from './tooltip'

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
    .attr('r', d => rScale(d.games))
    .attr('fill', d => colorScale(d.position))
    .style('opacity', 0.7)
    .attr('stroke', 'white')
}

/**
 * Viz 3:
 * Positions the x axis label and y axis label.
 *
 * @param {*} g The d3 Selection of the graph's g SVG element
 * @param {number} width The width of the graph
 * @param {number} height The height of the graph
 */
export function positionLabelsViz3 (g, width, height) {
  g.select('.x.axis-text')
    .attr('x', width / 2)
    .attr('y', height + 40)

  g.select('.y.axis-text')
    .attr('x', -240)
    .attr('y', height - 480)
}

/**
 * Viz 3:
 * Sets up the hover event handler. The tooltip should show on on hover.
 *
 * @param {*} tip The tooltip
 */
export function setCircleHoverHandler (tip) {
  const circles = d3.select('#circles').selectAll('circle')

  circles.on('mouseover', (event, data) => {
    const circle = d3.select(data)._groups[0][0]
    const content = getContentsViz3(circle)

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
 * Viz 3:
 * Updates the position of the circles based on their bound data. The position
 * transitions gradually.
 *
 * @param {*} xScale The x scale used to position the circles
 * @param {*} yScale The y scale used to position the circles
 * @param {number} transitionDuration The duration of the transition
 */
export function moveCircles (xScale, yScale, transitionDuration) {
  const circles = d3.selectAll('#circles circle')

  circles.transition()
    .duration(transitionDuration)
    .attr('cx', d => xScale(d.year))
    .attr('cy', d => yScale(d.minutes))
}

/**
 * Viz 3:
 * Update the title of the graph.
 */
export function setTitleTextViz3 () {
  const title = 'Relationship between winners, minutes and games played'
  d3.select('#graph-g')
    .selectAll('.title')
    .text(title)
}
