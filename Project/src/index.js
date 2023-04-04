'use strict'

import * as helper from './scripts/helper.js'
import * as viz from './scripts/viz.js'
import * as preprocess from './scripts/preprocess.js'
import * as legend from './scripts/legend.js'
import * as tooltip from './scripts/tooltip.js'

/**
 * @file This file is the entry-point for the the code for Project for the course INF8808.
 * @author Andressa Oliveira (2122266), Abdelaziz Kheloufi (2023424), and Lotfi Fodil (2021084)
 * @version v1.0.0
 */

(function (d3) {
  let svgSize, graphSize

  const margin = { top: 35, right: 200, bottom: 35, left: 200 }
  const xScale = d3.scaleBand().padding(0.05)
  const yScale = d3.scaleBand().padding(0.2)

  d3.csv('./ballondor.csv').then((data) => {
    // TODO
    const visualization = 1
    // const newData = preprocess.function(data)

    // viz.function(...)

    // legend.function(...)

    setSizing()
    // build(newData, visualization, transitionDuration, colorScale, xScale, yScale)
  })

  d3.csv('./ballondor.csv').then((data) => {
    // TODO
    const visualization = 2
    // const newData = preprocess.function(data)

    // viz.function(...)

    // legend.function(...)

    setSizing()
    // build(newData, visualization, transitionDuration, colorScale, xScale, yScale)
  })

  d3.csv('./ballondor.csv').then((data) => {
    // TODO
    const visualization = 3
    // const newData = preprocess.function(data)

    // viz.function(...)

    // legend.function(...)

    setSizing()
    // build(newData, visualization, transitionDuration, colorScale, xScale, yScale)
  })
  d3.csv('./ballondor.csv').then((data) => {
    // TODO
    const visualization = 4
    // const newData = preprocess.function(data)

    // viz.function(...)

    // legend.function(...)

    setSizing()
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
    if (visualization == 1) {
      // TODO
    } else if (visualization == 2) {
      // TODO
    } else if (visualization == 3) {
      // TODO
    } else {
      // TODO
    }
  }
})(d3)
