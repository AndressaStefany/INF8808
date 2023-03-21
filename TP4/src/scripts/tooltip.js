/**
 * Defines the contents of the tooltip. See CSS for tooltip styling. The tooltip
 * features the country name, population, GDP, and CO2 emissions, preceded
 * by a label and followed by units where applicable.
 *
 * @param {object} d The data associated to the hovered element
 * @returns {string} The tooltip contents
 */
export function getContents (d) {
  const formatNumber = (num) => {
    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    return formatter.format(num)
  }

  const createDataItem = (label, value) => ({ label, value })

  const data = [
    createDataItem('Country:', d['Country Name']),
    createDataItem('Population:', d.Population),
    createDataItem('GDP:', formatNumber(d.GDP) + ' $ (USD)'),
    createDataItem('CO2 emissions:', formatNumber(d.CO2) + ' metric tonnes')
  ]

  const createContent = (data) => {
    const container = d3.create('div')
    data.forEach(({ label, value }) => {
      const itemContainer = container.append('div')
      itemContainer.append('span')
        .attr('class', 'tooltip-label')
        .text(label)
      itemContainer.append('span')
        .attr('class', 'tooltip-value')
        .text(value)
    })
    return container.html()
  }

  return createContent(data)
}
