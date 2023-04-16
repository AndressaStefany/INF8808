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
  setSizing()

  d3.csv('./ballondor.csv').then((data) => {
    // TODO
    const visualization = 1
    // const newData = preprocess.function(data)

    // viz.function(...)

    // legend.function(...)

    // build(newData, visualization, transitionDuration, colorScale, xScale, yScale)
  })

  d3.csv('./ballondor.csv').then((data) => {
    // TODO
    const visualization = 2
    // const newData = preprocess.function(data)

    // viz.function(...)

    // legend.function(...)

    // build(newData, visualization, transitionDuration, colorScale, xScale, yScale)
  })

  // Define an array of file paths for the CSV files
  const playTimePaths = helper.listOfPlayTimeCSVs()
  var filePaths = ['./ballondor.csv', './positions.csv'].concat(playTimePaths)

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

    // viz
    const g = helper.generateG(margin)

    const tip = d3Tip().attr('class', 'd3-tip')
      .html(function (d) {
        return tooltip.getContentsViz3(d)
      })
    g.call(tip)
    helper.appendAxes(g)
    helper.appendGraphLabels(g, 'Years', 'Minutes played')
    helper.placeTitleViz3(g, graphSize.width)

    viz.positionLabelsViz3(g, graphSize.width, graphSize.height)

    const radiusScale = scales.setRadiusScale(viz3Data)
    const colorScale = scales.setColorScale(viz3Data)
    const xScale = scales.setXScaleViz3(graphSize.width, viz3Data)
    const yScale = scales.setYScaleViz3(graphSize.height, viz3Data)

    helper.drawXAxisViz3(xScale, graphSize.height)
    helper.drawYAxisViz3(yScale)

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
      viz.drawCircles(data, rScale, colorScale, xScale, yScale)
      viz.moveCircles(xScale, yScale, transitionDuration)
      viz.setTitleTextViz3()
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

  d3.csv('./ballondor.csv').then((data) => {
    // TODO
    const visualization = 4
    // const newData = preprocess.function(data)

    // viz.function(...)

    // legend.function(...)

    // build(newData, visualization, transitionDuration, colorScale, xScale, yScale)
  })
  /**
   *   This function handles the graph's sizing.
   */
  function setSizing () {
    svgSize = {
      width: 1000,
      height: 600
    }

    graphSize = {
      width: svgSize.width - margin.right - margin.left,
      height: svgSize.height - margin.bottom - margin.top
    }

    helper.setCanvasSize(svgSize.width, svgSize.height)
  }
  /**
   * This function builds the graph.
   *
   * @param {object} data The data to be used
   * @param {number} visualization The number of visualization
   * @param {number} transitionDuration The duration of the transition while placing the shapes
   * @param {*} rScale The scale for the circles' radius
   * @param {*} colorScale The scale for the circles' color
   * @param {*} xScale The x scale for the graph
   * @param {*} yScale The y scale for the graph
   */
  function build (data, visualization, transitionDuration, colorScale, xScale, yScale) {
    if (visualization === 1) {
      // TODO
    } else if (visualization === 2) {
      // TODO
    } else if (visualization === 3) {
      // TODO
    } else {
      // TODO
    }
  }
})(d3)
