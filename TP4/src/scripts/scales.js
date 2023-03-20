/**
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
  const populations = [...data['2000'], ...data['2015']].map((d) => d.Population);
  
  const populationScale = d3.scaleLinear().domain([d3.min(populations), d3.max(populations)]).range([5,20])

  return populationScale
}

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
  const continents = new Set();

  [...data['2000'], ...data['2015']].forEach((country) => {
    continents.add(country.Continent);
  });
  
  const continentScale = d3.scaleOrdinal()
    .domain([...continents].sort())
    .range(d3.schemeCategory10);
  
  return continentScale;
}

/**
 * Defines the log scale used to position the center of the circles in X.
 *
 * @param {number} width The width of the graph
 * @param {object} data The data to be used
 * @returns {*} The linear scale in X
 */
export function setXScale (width, data) {
  const gdps = [...data['2000'], ...data['2015']].map((d) => d.GDP);

  const gdpScale = d3.scaleLog()
    .domain([d3.min(gdps), d3.max(gdps)])
    .range([0, width]);
  
  return gdpScale;
}

/**
 * Defines the log scale used to position the center of the circles in Y.
 *
 * @param {number} height The height of the graph
 * @param {object} data The data to be used
 * @returns {*} The linear scale in Y
 */
export function setYScale (height, data) {
  const co2s = [...data['2000'], ...data['2015']].map((d) => d.CO2);

  const co2Scale = d3.scaleLog()
    .domain([d3.min(co2s), d3.max(co2s)])
    .range([height, 0]);
  
  return co2Scale;
}
