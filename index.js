const fs = require("fs")
const path = require('path')

const DEFAULT_FILENAME = 'env.json'

module.exports = function(context, options) {

    options = options || {}
    const sourceFile = options.filename || DEFAULT_FILENAME

    const environment = process.env.NODE_ENV
    const customFields = context.siteConfig.customFields
    const configPath = path.resolve(context.siteDir, sourceFile)
    
    try {
        const configContents = fs.readFileSync(configPath).toString()
        const config = JSON.parse(configContents)

        const envConfig = config[environment] || {}
        if (envConfig) {
           console.log(`INFO: loading config for current environment ${environment}`)
            for (let key in envConfig) {                
                customFields[key] = envConfig[key]
            }
        } else {
            console.log(`WARN: no config found for current environment ${environment}`)
        }
    } catch (e) {
        console.log(`ERROR: could not initialise env-loader-json plugin: ${e}`)
    }

    return {
        name: 'env-loader-json'
    };
}

