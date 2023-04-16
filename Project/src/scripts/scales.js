/**
 * Defines the color scale used to determine the color of the circle markers.
 *
 * The color of each circle is determined based on the continent of the country it represents.
 *
 * The possible colors are determined by the scheme d3.schemeSet1.
 *
 * @param {object} data The data to be displayed
 * @returns {*} The ordinal scale used to determine the color
 */
export function setColorScale (data) {
  const position = new Set()
  data.forEach(player => position.add(player.position))
  const positionScale = d3.scaleOrdinal(d3.schemeSet1).domain(position)

  return positionScale
}

/**
 * Viz 3:
 * Defines the scale to use for the circle markers' radius.
 *
 * The radius of the circle is linearly proportinal to the population of the given country.
 *
 * The radius is a value defined in the interval [5, 20].
 *
 * @param {object} data The data to be displayed
 * @returns {*} The linear scale used to determine the radius
 */
export function setRadiusScale (data) {
  const games = data.map((d) => d.games)

  const gamesScale = d3.scaleLinear().domain([d3.min(games), d3.max(games)]).range([5, 20])

  return gamesScale
}

/**
 * Viz 3:
 * Defines the linear scale used to position the center of the circles in X.
 *
 * @param {number} width The width of the graph
 * @param {object} data The data to be used
 * @returns {*} The linear scale in X
 */
export function setXScaleViz3 (width, data) {
  const years = data.map((d) => d.year)

  const yearsScale = d3.scaleLinear()
    .domain([d3.min(years), d3.max(years)])
    .range([0, width])

  return yearsScale
}

/**
 * Viz 3:
 * Defines the log scale used to position the center of the circles in Y.
 *
 * @param {number} height The height of the graph
 * @param {object} data The data to be used
 * @returns {*} The linear scale in Y
 */
export function setYScaleViz3 (height, data) {
  const minutes = data.map((d) => d.minutes)

  const minutesScale = d3.scaleLinear()
    .domain([d3.min(minutes), d3.max(minutes)])
    .range([height, 0])

  return minutesScale
}
