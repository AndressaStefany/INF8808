/**
 * Generates the SVG element g which will contain the data visualisation.
 *
 * @param {object} margin The desired margins around the graph
 * @returns {*} The d3 Selection for the created g element
 */
export function generateG (margin) {
  return d3.select('.graph')
    .select('svg')
    .append('g')
    .attr('id', 'graph-g')
    .attr('transform',
      'translate(' + margin.left + ',' + margin.top + ')')
}
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

/**
 * Appends an SVG g element which will contain the axes.
 *
 * @param {*} g The d3 Selection of the graph's g SVG element
 */
export function appendAxes (g) {
  g.append('g')
    .attr('class', 'x axis')

  g.append('g')
    .attr('class', 'y axis')
}

/**
 * Appends the labels for the the y axis and the title of the graph.
 *
 * @param {string} labelX The text of the axis X
 * @param {string} labelY The text of the axis Y
 * @param {*} g The d3 Selection of the graph's g SVG element
 */
export function appendGraphLabels (g, labelX, labelY) {
  g.append('text')
    .text(labelY)
    .attr('class', 'y axis-text')
    .attr('transform', 'rotate(-90)')
    .attr('font-size', 12)

  g.append('text')
    .text(labelX)
    .attr('class', 'x axis-text')
    .attr('font-size', 12)
}

/**
 * Viz 3:
 * Places the graph's title.
 *
 * @param {*} g The d3 Selection of the graph's g SVG element
 */
export function placeTitleViz3 (g) {
  g.append('text')
    .attr('class', 'title')
    .attr('x', 0)
    .attr('y', -20)
    .attr('font-size', 14)
}

/**
 * Viz 3:
 * Draws the X axis at the bottom of the diagram.
 *
 * @param {*} xScale The scale to use to draw the axis
 * @param {number} height The height of the graphic
 */
export function drawXAxisViz3 (xScale, height) {
  const xAxis = d3.axisBottom(xScale)
    .tickSizeOuter(0)
    .tickArguments([5, '~s'])
    .tickFormat(d3.format('d')) // specify the format as 'd' for integer

  d3.select('.x.axis')
    .attr('transform', 'translate(0, ' + height + ')')
    .call(xAxis)
}

/**
 * Draws the Y axis to the left of the diagram.
 *
 * @param {*} yScale The scale to use to draw the axis
 */
export function drawYAxisViz3 (yScale) {
  d3.select('.y.axis')
    .call(d3.axisLeft(yScale).tickSizeOuter(0).tickArguments([5, '.0r']))
}

/**
 * @returns {Array[]} The array with names of PlayTime CSVs
 */
export function listOfPlayTimeCSVs () {
  const csvFiles = [
    './PlayTime/Allan-SimonsenPlayTime.csv',
    './PlayTime/Andriy-ShevchenkoPlayTime.csv',
    './PlayTime/Bobby-CharltonPlayTime.csv',
    './PlayTime/Cristiano-RonaldoPlayTime.csv',
    './PlayTime/Denis-LawPlayTime.csv',
    './PlayTime/EusebioPlayTime.csv',
    './PlayTime/Fabio-CannavaroPlayTime.csv',
    './PlayTime/Florian-AlbertPlayTime.csv',
    './PlayTime/Franz-BeckenbauerPlayTime.csv',
    './PlayTime/George-BestPlayTime.csv',
    './PlayTime/George-WeahPlayTime.csv',
    './PlayTime/Gerd-MullerPlayTime.csv',
    './PlayTime/Gianni-RiveraPlayTime.csv',
    './PlayTime/Hristo-StoichkovPlayTime.csv',
    './PlayTime/Igor-BelanovPlayTime.csv',
    './PlayTime/Jean-Pierre-PapinPlayTime.csv',
    './PlayTime/Johan-CruyffPlayTime.csv',
    './PlayTime/Josef-MasopustPlayTime.csv',
    './PlayTime/KakaPlayTime.csv',
    './PlayTime/Karim-BenzemaPlayTime.csv',
    './PlayTime/Karl-Heinz-RummeniggePlayTime.csv',
    './PlayTime/Kevin-KeeganPlayTime.csv',
    './PlayTime/Lev-YashinPlayTime.csv',
    './PlayTime/Lionel-MessiPlayTime.csv',
    './PlayTime/Lothar-MatthausPlayTime.csv',
    './PlayTime/Luis-FigoPlayTime.csv',
    './PlayTime/Luis-SuarezPlayTime.csv',
    './PlayTime/Luka-ModricPlayTime.csv',
    './PlayTime/Marco-van-BastenPlayTime.csv',
    './PlayTime/Matthias-SammerPlayTime.csv',
    './PlayTime/Michael-OwenPlayTime.csv',
    './PlayTime/Michel-PlatiniPlayTime.csv',
    './PlayTime/Omar-SivoriPlayTime.csv',
    './PlayTime/Paolo-RossiPlayTime.csv',
    './PlayTime/Pavel-NedvedPlayTime.csv',
    './PlayTime/Raymond-KopaPlayTime.csv',
    './PlayTime/RivaldoPlayTime.csv',
    './PlayTime/Roberto-BaggioPlayTime.csv',
    './PlayTime/RonaldinhoPlayTime.csv',
    './PlayTime/RonaldoPlayTime.csv',
    './PlayTime/Ronaldo-NazarioPlayTime.csv',
    './PlayTime/Ruud-GullitPlayTime.csv',
    './PlayTime/Samuel-EtooPlayTime.csv',
    './PlayTime/Sandro-MazzolaPlayTime.csv',
    './PlayTime/Steven-GerrardPlayTime.csv',
    './PlayTime/Thierry-HenryPlayTime.csv',
    './PlayTime/Zinedine-ZidanePlayTime.csv'
  ]
  return csvFiles
}
