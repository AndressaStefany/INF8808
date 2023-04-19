'use strict'

import * as helper from './scripts/helper.js'
import * as viz from './scripts/viz.js'
import * as preprocess from './scripts/preprocess.js'
import * as legend from './scripts/legend.js'
import * as tooltip from './scripts/tooltip.js'
import * as scales from './scripts/scales.js'

import d3Tip from 'd3-tip'

/**
 * @file This file is the entry-point for the the code for Project for the course INF8808.
 * @author Andressa Oliveira (2122266), Abdelaziz Kheloufi (2023424), and Lotfi Fodil (2021084)
 * @version v1.0.0
 */

(function (d3) {
  const margin = {
    top: 75,
    right: 200,
    bottom: 100,
    left: 80
  }

  let svgSize, graphSize
  // Define an array of file paths for the CSV files
  const playTimePaths = helper.listOfPlayTimeCSVs()
  var filePaths = ['./ballondor.csv', './positions.csv'].concat(playTimePaths)

  /**
   * Visualization 1
   *
   */
  d3.csv('./ballondor.csv').then((data) => {
    // TODO
    // Probably the csv will change, you can use Promise.all() for more than one csv
    // const viz1Data = preprocess.function(data)

    // viz.function(...)

    // legend.function(...)

    // /**
    //  * This function builds the graph.
    //  *
    //  * @param {*} variable The description...
    //  */
    // function build (...) {
    //   // TODO
    //   viz.function...(g, ...)
    //   viz.setTitleText('#viz1', 'Vizualization 2')
    // }
    // build(...)
    // viz.set???HoverHandler(tip)
  })

  /**
   * Visualization 2
   *
   */
  d3.csv('./ballondor.csv').then((data) => {
    // TODO
    // Probabily the csv will change, you can use Promise.all() for more than one csv
    // const viz2Data = preprocess.function(data)

    // viz 3
    // setSizing('#map-viz2')
    // const g = helper.generateG(margin, 'viz2')

    // const tip = d3Tip().attr('class', 'd3-tip')
    //   .html(function (d) {
    //     return tooltip.getContentsViz3(d)
    //   })
    // g.call(tip)
    // helper.appendAxes(g)
    // helper.appendGraphLabels(g, 'Years', 'Number...')
    // helper.placeTitle(g, graphSize.width)

    // viz.positionLabels(g, graphSize.width, graphSize.height)

    // const colorScale = scales.setColorScaleViz2(viz2Data)
    // const xScale = scales.setXScaleYears(graphSize.width, viz2Data)
    // const yScale = scales.setYScaleViz2(graphSize.height, viz2Data)

    // helper.drawXAxis(g, xScale, graphSize.height)
    // helper.drawYAxis(g, yScale)

    // legend.drawLegend(colorScale, g, graphSize.width)

    // /**
    //  * This function builds the graph.
    //  *
    //  * @param {*} variable The description...
    //  */
    // function build (...) {
    //   // TODO
    //   viz.function...(g, ...)
    //   viz.setTitleText('#viz2', 'Vizualization 2')
    // }
    // build(...)
    // viz.set???HoverHandler(tip)
  })

  /**
   * Visualization 3
   *
   */
  Promise.all(filePaths.map(function (filePath) {
    return d3.csv(filePath)
  })).then(function (dataArray) {
    // Extract the loaded data from ballonDorData and positionsData files
    const ballonDorData = dataArray[0]
    const positionsData = dataArray[1]
    var mergedData = preprocess.mergeDataByKeys(ballonDorData, positionsData, 'player', 'player')
    mergedData = preprocess.addCodePlayerColumn(mergedData, 'codePlayer')

    // Extract the loaded data from Playing Time files
    // and get the minutes and games of players
    const PlayingTimeArrays = dataArray.slice(2)
    var minutesAndGames = preprocess.getMinutesGames(playTimePaths, PlayingTimeArrays)

    var viz3Data = preprocess.mergeDataByKeys(mergedData, minutesAndGames, 'codePlayer', 'codePlayer')

    // viz 3
    setSizing('#map-viz3')
    const g = helper.generateG(margin, 'viz3')

    const tip = d3Tip().attr('class', 'd3-tip')
      .html(function (d) {
        return tooltip.getContentsViz3(d)
      })
    g.call(tip)
    helper.appendAxes(g)
    helper.appendGraphLabels(g, 'Years', 'Minutes played')
    helper.placeTitle(g, graphSize.width)

    viz.positionLabels(g, graphSize.width, graphSize.height)

    const radiusScale = scales.setRadiusScale(viz3Data)
    const colorScale = scales.setColorScale(viz3Data)
    const xScale = scales.setXScaleYears(graphSize.width, viz3Data)
    const yScale = scales.setYScaleViz3(graphSize.height, viz3Data)

    helper.drawXAxis(g, xScale, graphSize.height)
    helper.drawYAxis(g, yScale)

    legend.drawLegend(colorScale, g, graphSize.width)

    /**
     * This function builds the graph.
     *
     * @param {object} data The data to be used
     * @param {number} transitionDuration The duration of the transition while placing the circles
     * @param {Array[]} years The year to be displayed
     * @param {*} rScale The scale for the circles' radius
     * @param {*} colorScale The scale for the circles' color
     * @param {*} xScale The x scale for the graph
     * @param {*} yScale The y scale for the graph
     */
    function buildScatter (data, transitionDuration, years, rScale, colorScale, xScale, yScale) {
      // then I have to change the range - years
      viz.drawCircles(data, '#viz3', rScale, colorScale, xScale, yScale)
      viz.moveCircles(g, xScale, yScale, transitionDuration)
      viz.setTitleText('#viz3', 'Relationship between winners, minutes and games played')
    }
    // change it
    const transitionDuration = 0
    const years = [1960, 2000, 2021]
    buildScatter(viz3Data, transitionDuration, years, radiusScale, colorScale, xScale, yScale)
    viz.setCircleHoverHandler(tip)
  }).catch(function (error) {
    // Handle any errors that may occur while loading the CSV files
    console.error('Error loading CSV files (viz3):', error)
  })

  /**
   * Visualization 4
   *
   */
  Promise.all(filePaths.map(function (filePath) {
    return d3.csv(filePath) // to review the paths
  })).then(function (dataArray) {
    // Extract the loaded data from ballonDorData and positionsData files
    const ballonDorData = dataArray[0]
    const positionsData = dataArray[1]
    var mergedData = preprocess.mergeDataByKeys(ballonDorData, positionsData, 'player', 'player')
    mergedData = preprocess.addCodePlayerColumn(mergedData, 'codePlayer')

    // Extract the loaded data from Playing Time files
    // and get the minutes and games of players
    const PlayingTimeArrays = dataArray.slice(2)
    var minutesAndGames = preprocess.getMinutesGames(playTimePaths, PlayingTimeArrays)

    var viz4Data = preprocess.mergeDataByKeys(mergedData, minutesAndGames, 'codePlayer', 'codePlayer')

    // viz 4
    setSizing('#map-viz4')
    const g = helper.generateG(margin, 'viz4')

    // const tip = d3Tip().attr('class', 'd3-tip')
    //   .html(function (d) {
    //     return tooltip.getContentsViz3(d)
    //   })
    // g.call(tip)
    helper.appendAxes(g)
    helper.appendGraphLabels(g, 'Years', 'Ages')
    helper.placeTitle(g, graphSize.width)

    viz.positionLabels(g, graphSize.width, graphSize.height)

    // just an example using the data of viz 4
    const xScale = scales.setXScaleYears(graphSize.width, viz4Data)
    const yScale = scales.setYScaleViz4(graphSize.height, viz4Data)

    helper.drawXAxis(g, xScale, graphSize.height)
    helper.drawYAxis(g, yScale)

    /**
     * This function builds the graph.
     *
     * @param {object} data The data to be used
     * @param {number} transitionDuration The duration of the transition while placing the circles
     * @param {Array[]} years The year to be displayed
     * @param {*} xScale The x scale for the graph
     * @param {*} yScale The y scale for the graph
     */
    function buildScatter (data, transitionDuration, years, xScale, yScale) {
      // viz.drawData(data, '#viz4', rScale, colorScale, xScale, yScale)
      // viz.moveCircles(g, xScale, yScale, transitionDuration)
      viz.setTitleText('#viz4', 'Ages of winning players')
    }
    // change it
    const transitionDuration = 0
    const years = [1960, 2000, 2021]
    buildScatter(viz4Data, transitionDuration, years, xScale, yScale)
    // viz.setHoverHandler(tip)
  }).catch(function (error) {
    // Handle any errors that may occur while loading the CSV files
    console.error('Error loading CSV files (viz4):', error)
  })

  /**
   * This function handles the graph's sizing.
   *
   * @param {string} id The id of the graph's div
   */
  function setSizing (id) {
    svgSize = {
      width: 1150,
      height: 600
    }

    graphSize = {
      width: svgSize.width - margin.right - margin.left,
      height: svgSize.height - margin.bottom - margin.top
    }

    helper.setCanvasSize(id, svgSize.width, svgSize.height)
  }
})(d3)
