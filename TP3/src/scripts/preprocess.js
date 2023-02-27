import { range } from './util.js'
/**
 * Gets the names of the neighborhoods.
 *
 * @param {object[]} data The data to analyze
 * @returns {string[]} The names of the neighorhoods in the data set
 */
export function getNeighborhoodNames (data) {
  const neighborhoodNames = [...new Set(data.map(d => d.Arrond_Nom))]
  return neighborhoodNames
}

/**
 * Filters the data by the given years.
 *
 * @param {object[]} data The data to filter
 * @param {number} start The start year (inclusive)
 * @param {number} end The end year (inclusive)
 * @returns {object[]} The filtered data
 */
export function filterYears (data, start, end) {
  const filteredData = data.filter(d => {
    const year = new Date(d.Date_Plantation).getFullYear()
    return year >= start && year <= end
  })
  return filteredData
}

/**
 * Summarizes how any trees were planted each year in each neighborhood.
 *
 * @param {object[]} data The data set to use
 * @returns {object[]} A table of objects with keys 'Arrond_Nom', 'Plantation_Year' and 'Counts', containing
 * the name of the neighborhood, the year and the number of trees that were planted
 */
export function summarizeYearlyCounts (data) {
  const neighborhoods = [...new Set(data.map(d => d.Arrond_Nom))]
  const years = [...new Set(data.map(d => new Date(d.Date_Plantation).getFullYear()))]
  const result = []

  for (const neighborhood of neighborhoods) {
    for (const year of years) {
      const count = data.reduce((acc, d) => {
        const dYear = new Date(d.Date_Plantation).getFullYear()
        if (d.Arrond_Nom === neighborhood && dYear === year) {
          acc += 1
        }
        return acc
      }, 0)
      result.push({
        Arrond_Nom: neighborhood,
        Plantation_Year: year,
        Comptes: count
      })
    }
  }

  return result
}

/**
 * For the heat map, fills empty values with zeros where a year is missing for a neighborhood because
 * no trees were planted or the data was not entered that year.
 *
 * @param {object[]} data The datas set to process
 * @param {string[]} neighborhoods The names of the neighborhoods
 * @param {number} start The start year (inclusive)
 * @param {number} end The end year (inclusive)
 * @param {Function} range A utilitary function that could be useful to get the range of years
 * @returns {object[]} The data set with a new object for missing year and neighborhood combinations,
 * where the values for 'Counts' is 0
 */
export function fillMissingData (data, neighborhoods, start, end, range) {
  const years = range(start, end)

  neighborhoods.forEach(neighborhood => {
    years.forEach(year => {
      const found = data.find(d => d.Arrond_Nom === neighborhood && d.Plantation_Year === year)
      data.push(found || { Arrond_Nom: neighborhood, Plantation_Year: year, Comptes: 0 })
    })
  })

  return data
}
