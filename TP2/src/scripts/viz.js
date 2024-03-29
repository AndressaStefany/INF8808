
/**
 * Sets the domain and range of the X scale.
 *
 * @param {*} scale The x scale
 * @param {object[]} data The data to be used
 * @param {number} width The width of the graph
 */
export function updateGroupXScale (scale, data, width) {
  // TODO : Set the domain and range of the groups' x scale
  var domainList = data.map(element => element.Act)
  scale.domain(domainList).range([0, width])
}

/**
 * Sets the domain and range of the Y scale.
 *
 * @param {*} scale The Y scale
 * @param {object[]} data The data to be used
 * @param {number} height The height of the graph
 */
export function updateYScale (scale, data, height) {
  // TODO : Set the domain and range of the graph's y scale
  var maxData = d3.max(data, function (d) {
    var max = d.Players.reduce((previous, current) => {
      return current.Count > previous.Count ? current : previous
    })
    return max.Count
  })

  scale.domain([0, maxData]).range([height, 0])
}

/**
 * Creates the groups for the grouped bar chart and appends them to the graph.
 * Each group corresponds to an act.
 *
 * @param {object[]} data The data to be used
 * @param {*} x The graph's x scale
 */
export function createGroups (data, x) {
  // TODO : Create the groups
  d3.select('#graph-g').selectAll('.group')
    .data(data)
    .enter()
    .append('g')
    .attr('class', 'group')
    .attr('transform', function (d) {
      return 'translate(' + x(d.Act) + ',0)'
    })
}

/**
 * Draws the bars inside the groups
 *
 * @param {*} y The graph's y scale
 * @param {*} xSubgroup The x scale to use to position the rectangles in the groups
 * @param {string[]} players The names of the players, each corresponding to a bar in each group
 * @param {number} height The height of the graph
 * @param {*} color The color scale for the bars
 * @param {*} tip The tooltip to show when each bar is hovered and hide when it's not
 */
export function drawBars (y, xSubgroup, players, height, color, tip) {
  // TODO : Draw the bars
  d3.select('#graph-g').selectAll('.group')
    .selectAll('rect')
    .data(function (d) {
      players.map(player => {
        d.Players.forEach(element => {
          if (player === element.Player) {
            element.Act = d.Act
          }
        })
      })
      return d.Players
    })
    .enter()
    .append('rect')
    .attr('x', function (d) { return xSubgroup(d.Player) })
    .attr('y', function (d) { return y(d.Count) })
    .attr('width', xSubgroup.bandwidth())
    .attr('height', function (d) { return height - y(d.Count) })
    .attr('fill', function (d) { return color(d.Player) })
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)
}
