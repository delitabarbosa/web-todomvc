const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
    // Caminho da pasta onde estão presentes os arquivos JSON dos ambientes
    const pathToConfigFile = path.resolve('config_ambiente', `${file}.env.json`)
    return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
    // Aceita um valor de "configFile" ou usa "ambiente" por padrão
    const file = config.env.configFile || 'ambiente'
    return getConfigurationByFile(file)
}