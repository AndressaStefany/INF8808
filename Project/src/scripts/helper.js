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
